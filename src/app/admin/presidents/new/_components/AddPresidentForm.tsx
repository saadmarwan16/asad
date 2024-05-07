"use client";

import AdminAddOrUpdateImage from "@asad/lib/components/admin/AdminAddOrUpdateImage";
import Button from "@asad/lib/ui/Button";
import Input from "@asad/lib/ui/Input";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_or_update_president.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import Select from "@asad/lib/ui/Select";
import { generateYears } from "@asad/lib/utils/generateYears";
import { type TInsertPresident } from "@asad/server/db/schema/presidents";
import { NewPresident } from "@asad/lib/types/president";
import { api } from "@asad/trpc/react";
import errorToast from "@asad/lib/utils/errorToast";
import { Routes } from "@asad/lib/routes";
import successToast from "@asad/lib/utils/successToast";

const AddPresidentForm = () => {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TInsertPresident>({
    resolver: zodResolver(NewPresident),
    defaultValues: {
      name: "",
      from: "",
      to: "",
      accomplishments: "",
    },
  });
  const insertPresident = api.president.insert.useMutation({
    onError: (error) => errorToast(error.message, "insert-president-error"),
    onSuccess: async (res) => {
      router.refresh();
      router.push(Routes.ADMIN_PRESIDENTS);
      successToast(res.message, "insert-president-success");
    },
  });

  const onSubmit: SubmitHandler<TInsertPresident> = async (data) => {
    console.log('Came here', data)
    await insertPresident.mutateAsync({
      ...data,
      image: image ?? null,
    });
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
      <div id={styles.button}>
        <Button disabled={isSubmitting} type="submit" data-text="Add">
          {isSubmitting ? "Adding..." : "Add"}
        </Button>
      </div>
    </form>
  );
};

export default AddPresidentForm;
