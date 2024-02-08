"use client";

import AdminAddOrUpdateImage from "@asad/lib/components/admin/AdminAddOrUpdateImage";
import {
  type TNewExecutive,
  newExecutiveSchema,
} from "@asad/lib/types/executive";
import Button, { button } from "@asad/lib/ui/Button";
import Input from "@asad/lib/ui/Input";
import Select from "@asad/lib/ui/Select";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_executive.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";

import "react-datepicker/dist/react-datepicker.css";

const AddPresidentForm = () => {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TNewExecutive>({
    resolver: zodResolver(newExecutiveSchema),
    defaultValues: {
      name: "",
      role: "",
      duties: "",
    },
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
              <option value="DCEO">DCEO</option>
              <option value="DCTO">DCTO</option>
              <option value="DCFO">DCFO</option>
            </Select>
          )}
        />
      </div>
      <div>
        <DatePicker
          showIcon
          icon={<FaRegCalendarAlt className="text-2xl" />}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Select the year the president was sworn in"
          className="w-full rounded-lg border-2 !pl-10 border-primary-100 p-2 focus-visible:border-primary-200 focus-visible:outline-none"
          dateFormat="dd/MM/yyyy"
          // showMonthYearPicker
          maxDate={new Date()}
          portalId="new-president-portal"
          isClearable
          withPortal
        />
      </div>
      <div id={styles.duties}>
        <Controller
          control={control}
          name="duties"
          render={({ field }) => (
            <Textarea
              top="Accomplishments"
              placeholder="Write a short description of the accomplishments of the president here."
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
        <Button type="submit" data-text="Add">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddPresidentForm;
