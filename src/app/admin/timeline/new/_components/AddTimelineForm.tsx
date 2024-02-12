"use client";

import Button from "@asad/lib/ui/Button";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_or_update_timeline.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import AdminAddOrUpdateImage from "@asad/lib/components/admin/AdminAddOrUpdateImage";
import {
  type TTimelineForm,
  timelineFormSchema,
} from "@asad/lib/types/timeline";
import DatePicker from "react-datepicker";
import DateInput from "@asad/lib/ui/DateInput";

const AddTimelineForm = () => {
  const [image, setImage] = useState<string | undefined>(undefined);
  const {
    control,
    reset,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<TTimelineForm>({
    resolver: zodResolver(timelineFormSchema),
    defaultValues: {
      date: new Date(),
      description: "",
    },
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
              onChange={(date) => {
                if (!date) return;

                console.log(date);
                setValue("date", date);
              }}
              placeholderText="Select the year the president was sworn in"
              dateFormat="dd/MM/yyyy"
              toggleCalendarOnIconClick
              customInput={
                <DateInput
                  top="Date"
                  {...field}
                  bottom={errors.date?.message}
                />
              }
              onChangeRaw={(e) => console.log(e.target.value)}
              portalId="new-timeline"
              withPortal
              minDate={new Date(2015, 1, 1)}
              maxDate={new Date()}
              showYearDropdown
              showMonthDropdown
              fixedHeight
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
        <Button type="submit" data-text="Add">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddTimelineForm;
