"use client";

import { Executive } from "@asad/lib/types/executive";
import Button from "@asad/lib/ui/Button";
import Input from "@asad/lib/ui/Input";
import Select from "@asad/lib/ui/Select";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_executive.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import AdminAddOrUpdateImage from "@asad/lib/components/admin/AdminAddOrUpdateImage";
import { type TInsertExecutive } from "@asad/server/db/schema/executives";
import { roles } from "@asad/lib/data/admin/roles";
import errorToast from "@asad/lib/utils/errorToast";
import successToast from "@asad/lib/utils/successToast";
import { Routes } from "@asad/lib/routes";
import { addExecutive } from "../../actions";

const AddExecutiveForm = () => {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TInsertExecutive>({
    resolver: zodResolver(Executive.omit({ id: true, image: true })),
    defaultValues: {
      name: "",
      role: "",
      duties: "",
    },
  });

  const onSubmit: SubmitHandler<TInsertExecutive> = async (data) => {
    const res = await addExecutive({
      ...data,
      image: image ?? null,
    });
    if (!res) {
      router.push(Routes.ADMIN_EXECUTIVES);
      successToast("Executive added successfully", "insert-executive-success");
      return;
    }

    errorToast(res, "insert-executive-error");
  };

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
      <div id={styles.button}>
        <Button disabled={isSubmitting} type="submit" data-text="Add">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddExecutiveForm;
