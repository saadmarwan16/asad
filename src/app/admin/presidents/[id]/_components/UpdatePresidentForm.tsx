"use client";

import { useRouter } from "next/navigation";
import AdminAddOrUpdateImage from "@asad/lib/components/admin/AdminAddOrUpdateImage";
import Button from "@asad/lib/ui/Button";
import Input from "@asad/lib/ui/Input";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_or_update_president.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FunctionComponent, useState } from "react";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import { President } from "@asad/lib/types/president";
import Select from "@asad/lib/ui/Select";
import { generateYears } from "@asad/lib/utils/generateYears";
import { type TPresident } from "@asad/server/db/schema/presidents";
import errorToast from "@asad/lib/utils/errorToast";
import successToast from "@asad/lib/utils/successToast";
import { removePresident, updatePresident } from "../../actions";
import { Routes } from "@asad/lib/routes";

interface UpdatePresidentFormProps {
  president: TPresident;
}

const UpdatePresidentForm: FunctionComponent<UpdatePresidentFormProps> = ({
  president,
}) => {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(president.image ?? null);
  const [removing, setRemoving] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TPresident>({
    resolver: zodResolver(President),
    defaultValues: president,
  });

  const onSubmit: SubmitHandler<TPresident> = async (data) => {
    const res = await updatePresident({
      ...data,
      image
    });
    if (res) {
      errorToast(res, "update-president-error");
      return;
    }

    router.push(Routes.ADMIN_PRESIDENTS);
    successToast("President updated successfully", "update-president-success");
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
      <div id={styles.from}>
        <Controller
          control={control}
          name="from"
          render={({ field }) => (
            <Select
              id="from"
              top="Year sworn in"
              {...field}
              bottom={errors.from?.message}
            >
              <option value="" disabled>
                Select the year the president was sworn in
              </option>
              {generateYears().map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          )}
        />
      </div>
      <div id={styles.to}>
        <Controller
          control={control}
          name="to"
          render={({ field }) => (
            <Select
              id="to"
              top="Year sworn out"
              {...field}
              bottom={errors.to?.message}
            >
              <option value="" disabled>
                Select the year the president was sworn in
              </option>
              {generateYears().map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          )}
        />
      </div>
      <div id={styles.duties}>
        <Controller
          control={control}
          name="accomplishments"
          render={({ field }) => (
            <Textarea
              top="Accomplishments"
              placeholder="Write a short description of the accomplishments of the president here."
              rows={8}
              bottom={errors.accomplishments?.message}
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
          type="button"
          data-text="Remove"
          disabled={removing}
          variant="secondary"
          onClick={async () => {
            const id = president.id;
            if (id) {
              setRemoving(true);
              const res = await removePresident(id);
              if (res) {
                errorToast(res, "remove-president-error");
                return;
              }

              router.push(Routes.ADMIN_PRESIDENTS);
              successToast(
                "President removed successfully",
                "remove-president-success",
              );
            }
          }}
        >
          Remove
        </Button>
        <Button type="submit" data-text="Update" disabled={isSubmitting}>
          Update
        </Button>
      </div>
    </form>
  );
};

export default UpdatePresidentForm;
