"use client";

import Button from "@asad/lib/ui/Button";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_or_update_timeline.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import AdminAddOrUpdateImage from "@asad/lib/components/admin/AdminAddOrUpdateImage";
import DatePicker from "react-datepicker";
import DateInput from "@asad/lib/ui/DateInput";
import { type TInsertTimeline } from "@asad/server/db/schema/timeline";
import { Timeline } from "@asad/lib/types/timeline";
import errorToast from "@asad/lib/utils/errorToast";
import { addTimeline } from "../../actions";
import { useRouter } from "next/navigation";
import { Routes } from "@asad/lib/routes";
import successToast from "@asad/lib/utils/successToast";

const AddTimelineForm = () => {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TInsertTimeline>({
    resolver: zodResolver(Timeline.omit({ id: true, image: true })),
    defaultValues: {
      date: undefined,
      description: "",
    },
  });

  const onSubmit: SubmitHandler<TInsertTimeline> = async (data) => {
    if (!image) {
      errorToast("Image is required", "insert-timeline-image-missing-error");
      return;
    }

    const res = await addTimeline({
      ...data,
      image,
    });
    if (!res) {
      router.push(Routes.ADMIN_TIMELINE);
      successToast("Timeline added successfully", "insert-timeline-success");
      return;
    }

    errorToast(res, "insert-timeline-error");
  };

  return (
    <form id={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.date}>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DatePicker
              selected={getValues().date}
              onChange={(date) => {
                if (date) setValue("date", date);
              }}
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
      <AdminAddOrUpdateImage
        image={image}
        setImage={(value) => setImage(value)}
      />
      <div id={styles.button}>
        <Button type="submit" disabled={isSubmitting} data-text="Add">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddTimelineForm;
