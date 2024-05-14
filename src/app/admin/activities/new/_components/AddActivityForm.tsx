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
import { type TNewActivity, newActivitySchema } from "@asad/lib/types/activity";
import DateInput from "@asad/lib/ui/DateInput";
import DatePicker from "react-datepicker";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { addActivity } from "../../actions";
import { genres } from "@asad/lib/data/admin/genres";
import errorToast from "@asad/lib/utils/errorToast";
import { type TInsertActivity } from "@asad/server/db/schema/activities";
import successToast from "@asad/lib/utils/successToast";
import { useRouter } from "next/navigation";
import { Routes } from "@asad/lib/routes";
import AddOrUpdateActivityImages from "../../_components/AddOrUpdateActivityImages";

const AddActivityForm = () => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TNewActivity>({
    resolver: zodResolver(newActivitySchema),
    defaultValues: {
      name: "",
      genres: ["Select a genre"],
      date: null,
      location: "",
      sponsors: [],
      city: "",
      description: "",
      images: [],
    },
  });
  const { fields, insert, remove } = useFieldArray({
    control,
    name: "genres" as never,
  });

  const {
    fields: sponsors,
    insert: insertSponsor,
    remove: removeSponsor,
  } = useFieldArray({
    control,
    name: "sponsors" as never,
  });

  const onSubmit: SubmitHandler<TInsertActivity> = async (data) => {
    const res = await addActivity({
      ...data,
      images,
    });
    if (!res) {
      router.push(Routes.ADMIN_ACTIVITIES);
      successToast("Activity added successfully", "insert-activity-success");
      return;
    }

    errorToast(res, "insert-activity-error");
  };

  return (
    <form id={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <AddOrUpdateActivityImages
        images={images}
        setImages={(value) => {
          if (value) setImages([...images, ...value]);
        }}
        removeImage={(url) => setImages(images.filter((i) => i !== url))}
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

      <div id={styles.genres} className="flex flex-col gap-2">
        <label className="cursor-default select-none font-medium">Genres</label>
        {fields.map((field, idx) => (
          <div key={field.id} className="flex gap-2">
            <Controller
              control={control}
              name={`genres.${idx}`}
              render={({ field }) => (
                <Select id="genres" {...field}>
                  <option value={genres[0]} disabled>
                    {genres[0]}
                  </option>
                  {genres.slice(1).map((genre) => (
                    <option value={genre}>{genre}</option>
                  ))}
                </Select>
              )}
            />
            <button
              type="button"
              className="flex aspect-square w-10 items-center justify-center rounded-lg bg-primary-200 font-medium text-base-100 transition-all hover:bg-primary-300"
              onClick={() => {
                if (fields.length <= 1) {
                  errorToast(
                    "Activity must have at least 1 genre",
                    "remove-genre-error",
                  );
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
                if (fields.length >= 5) {
                  errorToast(
                    "Activity can have up to 5 genres",
                    "add-genre-error",
                  );
                  return;
                }

                insert(idx + 1, "Select a genre");
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
        <div className="flex flex-col gap-2">
          <label className="cursor-default select-none font-medium">
            Sponsors
          </label>
          {sponsors.length > 0 ? (
            <>
              {sponsors.map((sponsor, idx) => (
                <div key={sponsor.id} className="flex gap-2">
                  <Controller
                    control={control}
                    name={`sponsors.${idx}`}
                    render={({ field }) => (
                      <Input placeholder="Enter a sponsor here" {...field} />
                    )}
                  />
                  <button
                    type="button"
                    className="flex aspect-square w-10 items-center justify-center rounded-lg bg-primary-200 font-medium text-base-100 transition-all hover:bg-primary-300"
                    onClick={() => removeSponsor(idx)}
                  >
                    <MdDelete className="text-3xl" />
                  </button>
                  <button
                    type="button"
                    className="flex aspect-square w-10 items-center justify-center rounded-lg bg-primary-200 font-medium text-base-100 transition-all hover:bg-primary-300"
                    onClick={() => {
                      if (sponsors.length >= 5) {
                        errorToast(
                          "Activity can have up to 5 sponsors",
                          "add-sponsor-error",
                        );
                        return;
                      }

                      insertSponsor(idx + 1, "");
                    }}
                  >
                    <IoMdAdd className="text-3xl" />
                  </button>
                </div>
              ))}
            </>
          ) : (
            <Button
              data-text="Add Sponsor"
              onClick={() => insertSponsor(0, "")}
            >
              Add Sponsor
            </Button>
          )}
        </div>
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
        <Button type="submit" data-text="Add" disabled={isSubmitting}>
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddActivityForm;
