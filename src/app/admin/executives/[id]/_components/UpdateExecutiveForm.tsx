"use client";

import { Executive } from "@asad/lib/types/executive";
import Button from "@asad/lib/ui/Button";
import Input from "@asad/lib/ui/Input";
import Select from "@asad/lib/ui/Select";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_executive.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FunctionComponent, useState } from "react";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import { roles } from "@asad/lib/data/admin/roles";
import AdminAddOrUpdateImage from "@asad/lib/components/admin/AdminAddOrUpdateImage";
import { type TExecutive } from "@asad/server/db/schema/executives";
import { api } from "@asad/trpc/react";
import errorToast from "@asad/lib/utils/errorToast";
import successToast from "@asad/lib/utils/successToast";
import { Routes } from "@asad/lib/routes";

interface UpdateExecutiveFormProps {
  executive: TExecutive;
}

const UpdateExecutiveForm: FunctionComponent<UpdateExecutiveFormProps> = ({
  executive,
}) => {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(executive.image);
  const [deleting, setDeleting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TExecutive>({
    resolver: zodResolver(Executive),
    defaultValues: executive,
  });

  const updateExecutive = api.executive.update.useMutation({
    onError: (error) => errorToast(error.message, "update-executive-error"),
    onSuccess: (res) => {
      router.push(Routes.ADMIN_EXECUTIVES);
      successToast(res.message, "update-executive-success");
    },
  });

  const removeExecutive = api.executive.delete.useMutation({
    onError: (error) => errorToast(error.message, "remove-executive-error"),
    onSuccess: (res) => {
      router.push(Routes.ADMIN_EXECUTIVES);
      successToast(res.message, "remove-executive-success");
    },
    onSettled: () => setDeleting(false),
  });

  const onSubmit: SubmitHandler<TExecutive> = async (data) =>
    await updateExecutive.mutateAsync({
      ...data,
      image: image ?? null,
    });

  return (
    <form id={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div id={styles.name}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              top="Name"
              placeholder="Enter name here"
              {...field}
              bottom={errors.name?.message}
            />
          )}
        />
      </div>
      <div id={styles.role}>
        <Controller
          control={control}
          name="role"
          render={({ field }) => (
            <Select
              id="role"
              top="Role"
              {...field}
              bottom={errors.role?.message}
            >
              <option value="" disabled>
                Select a role
              </option>
              {roles
                .filter((val) => val !== "")
                .map((role, idx) => (
                  <option key={idx} value={role}>
                    {role}
                  </option>
                ))}
            </Select>
          )}
        />
      </div>
      <div id={styles.duties}>
        <Controller
          control={control}
          name="duties"
          render={({ field }) => (
            <Textarea
              top="Duties"
              placeholder="Write a short description of the executive member's role here"
              rows={8}
              bottom={errors.duties?.message}
              {...field}
            />
          )}
        />
      </div>
      <AdminAddOrUpdateImage
        image={image}
        setImage={(value) => setImage(value)}
      />
      <div id={styles.button} className="flex flex-wrap justify-end gap-4">
        <Button
          disabled={deleting}
          type="button"
          data-text="Remove"
          variant="secondary"
          onClick={() => {
            setDeleting(true);
            removeExecutive.mutate({ id: executive.id });
          }}
        >
          {deleting ? "Removing..." : "Remove"}
        </Button>
        <Button disabled={isSubmitting} type="submit" data-text="Update">
          {isSubmitting ? "Updating..." : "Update"}
        </Button>
      </div>
    </form>
  );
};

export default UpdateExecutiveForm;
