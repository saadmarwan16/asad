"use client";

import Button from "@asad/lib/ui/Button";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_or_update_timeline.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FunctionComponent, useState } from "react";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import AdminAddOrUpdateImage from "@asad/lib/components/admin/AdminAddOrUpdateImage";
import {
  type TTimelineForm,
  timelineFormSchema,
  type TTimeline,
} from "@asad/lib/types/timeline";
import DatePicker from "react-datepicker";
import DateInput from "@asad/lib/ui/DateInput";

interface UpdateTimelineFormProps {
  timeline?: TTimeline;
}

const UpdateTimelineForm: FunctionComponent<UpdateTimelineFormProps> = ({
  timeline,
}) => {
  const [image, setImage] = useState<string | undefined>(timeline?.image);
  const {
    control,
    reset,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isDirty },
  } = useForm<TTimelineForm>({
    resolver: zodResolver(timelineFormSchema),
    defaultValues: timeline,
  });

  const onSubmit: SubmitHandler<TTimelineForm> = (data) => {
    console.log({
      ...data,
      image,
    });
    setImage(undefined);
    reset();
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

export default UpdateTimelineForm;
