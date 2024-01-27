"use client";

import { useState } from "react";
import styles from "@asad/styles/shared/admin/header.module.css";
import { CiSearch } from "react-icons/ci";
import Button from "@asad/lib/ui/Button";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type TAdminSearch,
  adminSearchSchema,
} from "@asad/lib/types/admin/search";
import { Routes } from "@asad/lib/routes";
import { useRouter } from "next/navigation";

const AdminSearchForm = () => {
  const [focus, setFocus] = useState(false);
  const [active, setActive] = useState("executives");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAdminSearch>({
    resolver: zodResolver(adminSearchSchema),
    defaultValues: {
      query: "",
    },
  });

  const onSubmit: SubmitHandler<TAdminSearch> = (data) => {
    router.push(`${Routes.ADMIN_SEARCH}?query=${data.query}&in=${active}`);
  };

  return (
    <form
      id={styles.search}
      className="flex max-w-[800px] gap-2 sm:px-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative h-12 w-full">
        <input
          className={`h-full w-full rounded-lg border-2 border-primary-100 bg-transparent px-4 text-content-100 focus-visible:border-primary-200 focus-visible:outline-none ${
            errors.query && "!border-red-700"
          }`}
          placeholder={`Enter search in ${active}`}
          {...register("query")}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <div
          className={`absolute left-0 right-0 top-[3.4rem] h-auto rounded-lg bg-base-100 p-3 shadow-xl sm:p-4 md:p-5 ${
            focus ? styles.focus : styles.notFocus
          }`}
        >
          <span className="mb-4 block text-sm font-medium uppercase text-gray-500">
            Search in
          </span>
          <div className="flex flex-wrap gap-2">
            <Button
              data-text="Executives"
              size="sm"
              variant={active === "executives" ? "primary" : "ghost"}
              onClick={() => setActive("executives")}
            >
              Executives
            </Button>
            <Button
              data-text="Presidents"
              size="sm"
              variant={active === "presidents" ? "primary" : "ghost"}
              onClick={() => setActive("presidents")}
            >
              Presidents
            </Button>
            <Button
              data-text="Activities"
              size="sm"
              variant={active === "activities" ? "primary" : "ghost"}
              onClick={() => setActive("activities")}
            >
              Activities
            </Button>
            <Button
              data-text="Elections"
              size="sm"
              variant={active === "elections" ? "primary" : "ghost"}
              onClick={() => setActive("elections")}
            >
              Elections
            </Button>
          </div>
        </div>
      </div>

      <button className="flex aspect-square w-12 items-center justify-center rounded-lg bg-primary-100 font-medium text-primary-400 transition-all hover:bg-primary-200 [&>svg]:hover:text-base-100">
        <CiSearch className="text-3xl transition-all" />
      </button>
    </form>
  );
};

export default AdminSearchForm;
