"use client";

import Button from "@asad/lib/ui/Button";
import Input from "@asad/lib/ui/Input";
import Select from "@asad/lib/ui/Select";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_or_update_activity.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import AdminAddOrUpdateImage from "@asad/lib/components/admin/AdminAddOrUpdateImage";
import { type TNewActivity, newActivitySchema } from "@asad/lib/types/activity";
import DateInput from "@asad/lib/ui/DateInput";
import DatePicker from "react-datepicker";

const AddExecutiveForm = () => {
  const [image, setImage] = useState<string | undefined>(undefined);
  const {
    control,
    reset,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<TNewActivity>({
    resolver: zodResolver(newActivitySchema),
    defaultValues: {
      name: "",
      slogan: "",
      genres: [],
      date: null,
      location: "",
      sponsors: [],
      city: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<TNewActivity> = (data) => {
    console.log({
      ...data,
      image,
    });
    setImage(undefined);
    reset();
  };

  return (
    <form id={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <AdminAddOrUpdateImage
        image={image}
        setImage={(value) => setImage(value)}
      />

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

      <div id={styles.slogan}>
        <Controller
          control={control}
          name="slogan"
          render={({ field }) => (
            <Input
              top="Slogan"
              placeholder="Enter slogan here"
              {...field}
              bottom={errors.slogan?.message}
            />
          )}
        />
      </div>

      <div id={styles.genres}>
        <Controller
          control={control}
          name="genres"
          render={({ field }) => (
            <Select
              id="genres"
              top="Genres"
              {...field}
              bottom={errors.genres?.message}
            >
              <option value="" disabled>
                Select a genre
              </option>
              <option value="Speaking">Speaking</option>
              <option value="English">English</option>
              <option value="Interracial">Interracial</option>
              <option value="Community">Community</option>
            </Select>
          )}
        />
      </div>

      <div className={styles.date}>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DatePicker
              selected={getValues().date}
              onChange={(date) => setValue("date", date)}
              placeholderText="Select the date the timeline occured"
              dateFormat="dd/MM/yyyy"
              toggleCalendarOnIconClick={false}
              customInput={
                <DateInput
                  top="Date"
                  {...field}
                  bottom={errors.date?.message}
                />
              }
              portalId="new-timeline"
              withPortal
              minDate={new Date(2015, 1, 1)}
              maxDate={new Date()}
              showYearDropdown
              showMonthDropdown
              isClearable
            />
          )}
        />
      </div>

      <div id={styles.location}>
        <Controller
          control={control}
          name="location"
          render={({ field }) => (
            <Input
              top="Location"
              placeholder="Enter location here"
              {...field}
              bottom={errors.location?.message}
            />
          )}
        />
      </div>

      <div id={styles.city}>
        <Controller
          control={control}
          name="city"
          render={({ field }) => (
            <Input
              top="City"
              placeholder="Enter city here"
              {...field}
              bottom={errors.city?.message}
            />
          )}
        />
      </div>

      <div id={styles.sponsors}>
        <Controller
          control={control}
          name="sponsors"
          render={({ field }) => (
            <Input
              top="Sponsors"
              placeholder="Enter a sponsor here"
              {...field}
              bottom={errors.sponsors?.message}
            />
          )}
        />
      </div>

      <div id={styles.description}>
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <Textarea
              top="Description"
              placeholder="Write a short description of the executive member's role here"
              rows={8}
              bottom={errors.description?.message}
              {...field}
            />
          )}
        />
      </div>

      <div id={styles.button}>
        <Button type="submit" data-text="Add">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddExecutiveForm;
