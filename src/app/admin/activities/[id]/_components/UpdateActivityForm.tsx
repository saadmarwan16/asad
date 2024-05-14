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
import { activitySchema } from "@asad/lib/types/activity";
import DateInput from "@asad/lib/ui/DateInput";
import DatePicker from "react-datepicker";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { type FunctionComponent, useState } from "react";
import { removeActivity, updateActivity } from "../../actions";
import successToast from "@asad/lib/utils/successToast";
import errorToast from "@asad/lib/utils/errorToast";
import { useRouter } from "next/navigation";
import { Routes } from "@asad/lib/routes";
import { type TActivity } from "@asad/server/db/schema/activities";
import AddOrUpdateActivityImages from "../../_components/AddOrUpdateActivityImages";
import { genres } from "@asad/lib/data/admin/genres";

interface UpdateExecutiveFormProps {
  activity: TActivity;
}

const UpdateExecutiveForm: FunctionComponent<UpdateExecutiveFormProps> = ({
  activity,
}) => {
  const router = useRouter();
  const [removing, setRemoving] = useState(false);
  const [images, setImages] = useState<string[]>(activity.images);
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TActivity>({
    resolver: zodResolver(activitySchema),
    defaultValues: activity,
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

  const onSubmit: SubmitHandler<TActivity> = async (data) => {
    const res = await updateActivity({
      ...data,
      images,
    });
    if (!res) {
      router.push(Routes.ADMIN_ACTIVITIES);
      successToast("Activity updated successfully", "update-activity-success");
      return;
    }

    errorToast(res, "update-activity-error");
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
      <div id={styles.button} className="flex flex-wrap justify-end gap-4">
        <Button
          type="button"
          data-text="Remove"
          variant="secondary"
          disabled={removing}
          onClick={async () => {
            setRemoving(true);
            const res = await removeActivity(activity.id);
            if (!res) {
              router.push(Routes.ADMIN_ACTIVITIES);
              successToast(
                "Activity removed successfully",
                "remove-activity-success",
              );
              return;
            }

            errorToast(res, "remove-activity-error");
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

export default UpdateExecutiveForm;
