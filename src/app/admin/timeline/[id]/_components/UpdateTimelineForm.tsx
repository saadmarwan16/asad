"use client";

import Button from "@asad/lib/ui/Button";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_or_update_timeline.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FunctionComponent, useState } from "react";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import AdminAddOrUpdateImage from "@asad/lib/components/admin/AdminAddOrUpdateImage";
import DatePicker from "react-datepicker";
import DateInput from "@asad/lib/ui/DateInput";
import { type TTimeline } from "@asad/server/db/schema/timeline";
import { Timeline } from "@asad/lib/types/timeline";
import errorToast from "@asad/lib/utils/errorToast";
import successToast from "@asad/lib/utils/successToast";
import { useRouter } from "next/navigation";
import { removeTimeline, updateTimelne } from "../../actions";
import { Routes } from "@asad/lib/routes";

interface UpdateTimelineFormProps {
  timeline: TTimeline;
}

const UpdateTimelineForm: FunctionComponent<UpdateTimelineFormProps> = ({
  timeline,
}) => {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(timeline.image);
  const [removing, setRemoving] = useState(false);
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TTimeline>({
    resolver: zodResolver(Timeline),
    defaultValues: timeline,
  });

  const onSubmit: SubmitHandler<TTimeline> = async (data) => {
    if (!image) {
      errorToast("Image is required", "update-timeline-image-missing-error");
      return;
    }

    const res = await updateTimelne({
      ...data,
      image,
    });
    if (!res) {
      router.push(Routes.ADMIN_TIMELINE);
      successToast("Timeline updated successfully", "update-timeline-success");
      return;
    }

    errorToast(res, "update-timeline-error");
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
      <div id={styles.button} className="flex flex-wrap justify-end gap-4">
        <Button
          type="button"
          data-text="Remove"
          variant="secondary"
          disabled={removing}
          onClick={async () => {
            setRemoving(true);
            const res = await removeTimeline(timeline.id);
            if (!res) {
              router.push(Routes.ADMIN_TIMELINE);
              successToast(
                "Timeline removed successfully",
                "remove-timeline-success",
              );
              return;
            }

            errorToast(res, "remove-president-error");
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

export default UpdateTimelineForm;
