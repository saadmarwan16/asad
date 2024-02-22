"use client";

import AdminAddOrUpdateImage from "@asad/lib/components/admin/AdminAddOrUpdateImage";
import Button from "@asad/lib/ui/Button";
import Input from "@asad/lib/ui/Input";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_or_update_president.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FunctionComponent, useState } from "react";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import {
  type TNewPresident,
  newPresidentSchema,
  type TPresident,
} from "@asad/lib/types/president";
import Select from "@asad/lib/ui/Select";
import { generateYears } from "@asad/lib/utils/generateYears";

interface UpdatePresidentFormProps {
  president?: TPresident;
}

const UpdatePresidentForm: FunctionComponent<UpdatePresidentFormProps> = ({
  president,
}) => {
  const [image, setImage] = useState<string | undefined>(president?.image);
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<TNewPresident>({
    resolver: zodResolver(newPresidentSchema),
    defaultValues: president,
  });

  const onSubmit: SubmitHandler<TNewPresident> = (data) => {
    console.log({
      ...data,
      image,
    });
    setImage(undefined);
    reset();
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
          variant="secondary"
          onClick={() => console.log("Executive removed")}
        >
          Remove
        </Button>
        <Button type="submit" data-text="Update" disabled={!isDirty}>
          Update
        </Button>
      </div>
    </form>
  );
};

export default UpdatePresidentForm;
