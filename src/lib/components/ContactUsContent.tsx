"use client";

import styles from "@asad/styles/shared/contact.module.css";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type TContact, contactSchema } from "../types/contact";

const ContactUsContent = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TContact>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<TContact> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form id={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
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
              variant="secondary"
              {...field}
            />
          )}
        />
      </div>
      <div id={styles.phone}>
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <Input
              top="Phone number"
              placeholder="Enter your phone number here"
              bottom={errors.phone?.message}
              variant="secondary"
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
              variant="secondary"
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
              top="How can we work help?"
              placeholder="Tell us how we can help"
              bottom={errors.message?.message}
              rows={6}
              variant="secondary"
              {...field}
            />
          )}
        />
      </div>
      <div id={styles.submit}>
        <Button data-text="Submit" type="submit" variant="secondary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactUsContent;
