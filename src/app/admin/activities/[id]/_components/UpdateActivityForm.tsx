"use client";

import Button from "@asad/lib/ui/Button";
import Input from "@asad/lib/ui/Input";
import Select from "@asad/lib/ui/Select";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_or_update_activity.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type SubmitHandler,
  useForm,
  Controller,
  useFieldArray,
} from "react-hook-form";
import {
  type TNewActivity,
  newActivitySchema,
  type TActivity,
} from "@asad/lib/types/activity";
import DateInput from "@asad/lib/ui/DateInput";
import DatePicker from "react-datepicker";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { type FunctionComponent, useState } from "react";
import UpdateActivityImages from "./UpdateActivityImages";

interface UpdateExecutiveFormProps {
  activity: TActivity;
}

const UpdateExecutiveForm: FunctionComponent<UpdateExecutiveFormProps> = ({
  activity,
}) => {
  const [images, setImages] = useState<string[]>(activity.images);
  const {
    control,
    reset,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<TNewActivity>({
    resolver: zodResolver(newActivitySchema),
    defaultValues: activity,
  });
  const { fields, insert, remove } = useFieldArray({
    control,
    name: "genres" as never,
  });

  const onSubmit: SubmitHandler<TNewActivity> = (data) => {
    console.log({
      ...data,
    });
    reset();
  };

  return (
    <form id={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <UpdateActivityImages
        images={images}
        setImage={(value) => {
          if (value) setImages([...images, value]);
        }}
        removeImage={(idx) => setImages(images.filter((_, i) => i !== idx))}
      />

      <div id={styles.name}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              top="Name"
              placeholder="Enter activity name here"
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
              placeholder="Enter activity slogan here"
              {...field}
              bottom={errors.slogan?.message}
            />
          )}
        />
      </div>

      <div id={styles.genres} className="flex flex-col gap-2">
        {top && (
          <label className="cursor-default select-none font-medium">
            Genres
          </label>
        )}
        {fields.map((field, idx) => (
          <div key={field.id} className="flex gap-2">
            <Controller
              control={control}
              name={`genres.${idx}`}
              render={({ field }) => (
                <Select id="genres" {...field} bottom={errors.genres?.message}>
                  <option value="s" disabled>
                    Select a genre
                  </option>
                  <option value="Speaking">Speaking</option>
                  <option value="English">English</option>
                  <option value="Interracial">Interracial</option>
                  <option value="Community">Community</option>
                </Select>
              )}
            />
            <button
              type="button"
              className="flex aspect-square w-10 items-center justify-center rounded-lg bg-primary-200 font-medium text-base-100 transition-all hover:bg-primary-300"
              onClick={() => {
                if (fields.length <= 1) {
                  console.log("Activity must have at least 1 genre");
                  return;
                }

                remove(idx);
              }}
            >
              <MdDelete className="text-3xl" />
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 items-center justify-center rounded-lg bg-primary-200 font-medium text-base-100 transition-all hover:bg-primary-300"
              onClick={() => {
                if (fields.length >= 3) {
                  console.log("Activity can have up to 3 genres");
                  return;
                }

                insert(idx + 1, "s");
              }}
            >
              <IoMdAdd className="text-3xl" />
            </button>
          </div>
        ))}
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

export default UpdateExecutiveForm;
