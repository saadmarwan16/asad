"use client";

import AdminAddOrUpdateImage from "@asad/lib/components/admin/AdminAddOrUpdateImage";
import Button from "@asad/lib/ui/Button";
import Input from "@asad/lib/ui/Input";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_or_update_president.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import {
  type TNewPresident,
  newPresidentSchema,
} from "@asad/lib/types/president";
import Select from "@asad/lib/ui/Select";

export const generateYears = () => {
  const years = [];
  for (let i = 2015; i <= new Date().getFullYear(); i++) {
    years.push(i.toString());
  }

  return years;
};

const AddPresidentForm = () => {
  const [image, setImage] = useState<string | undefined>(undefined);
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TNewPresident>({
    resolver: zodResolver(newPresidentSchema),
    defaultValues: {
      name: "",
      from: "",
      to: "",
      accomplishments: "",
    },
  });

  // Write a short description Write a short description Write a short description Write a short description Write a short description

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
      {/* <div className={styles.from}>
        <Controller
          control={control}
          name="from"
          render={({ field }) => (
            <DatePicker
              showIcon
              icon={<FaRegCalendarAlt className="text-2xl" />}
              selected={startDate}
              onChange={(date) => {
                console.log(date);
                setStartDate(date);
              }}
              placeholderText="Select the year the president was sworn in"
              dateFormat="MM/yyyy"
              toggleCalendarOnIconClick
              customInput={
                <DateInput
                  top="From"
                  {...field}
                  bottom={errors.from?.message}
                />
              }
              showMonthYearPicker
              maxDate={new Date()}
              isClearable
            />
          )}
        />
      </div> */}
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
        <Button type="submit" data-text="Add">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddPresidentForm;
