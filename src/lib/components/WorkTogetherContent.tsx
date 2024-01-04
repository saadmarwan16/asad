"use client";

import styles from "@asad/styles/shared/contact.module.css";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type TWorkTogether, workTogetherSchema } from "../types/workTogether";

const WorkTogetherContent = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TWorkTogether>({
    resolver: zodResolver(workTogetherSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<TWorkTogether> = (data: TWorkTogether) => {
    console.log(data);
    reset();
  };

  return (
    <form id={styles.workTogetherForm} onSubmit={handleSubmit(onSubmit)}>
      <h5 className="mb-2 font-medium md:hidden">Let's work together</h5>
      <h4 className="mb-3 hidden font-medium md:block">Let's work together</h4>
      <div id={styles.name}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              top="Name"
              placeholder="Enter your name here"
              bottom={errors.name?.message}
              {...field}
            />
          )}
        />
      </div>
      <div id={styles.company}>
        <Controller
          control={control}
          name="company"
          render={({ field }) => (
            <Input
              top="Company name"
              placeholder="Enter your company name here"
              bottom={errors.company?.message}
              {...field}
            />
          )}
        />
      </div>
      <div id={styles.email}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              top="Email"
              placeholder="Enter your email here"
              bottom={errors.email?.message}
              {...field}
            />
          )}
        />
      </div>
      <div id={styles.message}>
        <Controller
          control={control}
          name="message"
          render={({ field }) => (
            <Textarea
              top="How can we work together?"
              placeholder="Tell us how we can work together"
              bottom={errors.message?.message}
              rows={6}
              {...field}
            />
          )}
        />
      </div>
      <div id={styles.submit}>
        <Button data-text="Submit" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default WorkTogetherContent;
