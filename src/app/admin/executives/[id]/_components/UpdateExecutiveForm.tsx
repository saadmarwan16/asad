"use client";

import {
  type TNewExecutive,
  newExecutiveSchema,
  type TExecutive,
} from "@asad/lib/types/executive";
import Button from "@asad/lib/ui/Button";
import Input from "@asad/lib/ui/Input";
import Select from "@asad/lib/ui/Select";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_executive.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FunctionComponent, useState } from "react";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import UpdateExecutiveImage from "./UpdateExecutiveImage";

interface UpdateExecutiveFormProps {
  executive?: TExecutive;
}

const UpdateExecutiveForm: FunctionComponent<UpdateExecutiveFormProps> = ({
  executive,
}) => {
  const [image, setImage] = useState<string | undefined>(executive?.image);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<TNewExecutive>({
    resolver: zodResolver(newExecutiveSchema),
    defaultValues: executive,
  });

  const onSubmit: SubmitHandler<TNewExecutive> = (data) => {
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
              <option value="President">President</option>
              <option value="Vice President">Vice President</option>
              <option value="General Secretary">General Secretary</option>
              <option value="Deputy General Secretary">
                Deputy General Secretary
              </option>
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
      <UpdateExecutiveImage
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

export default UpdateExecutiveForm;
