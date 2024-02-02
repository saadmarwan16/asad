"use client";

import Button, { button } from "@asad/lib/ui/Button";
import Input from "@asad/lib/ui/Input";
import Select from "@asad/lib/ui/Select";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_executive.module.css";
import Image from "next/image";
import { useState } from "react";
import { FaImage } from "react-icons/fa";

const AdminAddExecutive = () => {
  const [image, setImage] = useState<string | null>(null);

  return (
    <div>
      <h4 className="mb-8 font-medium">Add executive memeber</h4>
      <form id={styles.form}>
        <input
          id="new-image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          id="update-image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <div id={styles.name}>
          <Input top="Name" placeholder="Enter name here" />
        </div>
        <div id={styles.role}>
          <Select id="role" top="Role" defaultValue="">
            <option value="" disabled>
              Select a role
            </option>
            <option value="CEO">CEO</option>
            <option value="CTO">CTO</option>
            <option value="CFO">CFO</option>
          </Select>
        </div>
        <div id={styles.duties}>
          <Textarea
            top="Duties"
            placeholder="Write a short description of the executive member's role here"
            rows={8}
          />
        </div>
        <div id={styles.image} className="flex flex-col gap-2">
          <label className="cursor-default select-none font-medium">
            Image
          </label>
          {image ? (
            <div className="relative h-80 rounded-lg md:h-full">
              <div className="absolute bottom-0 left-0 right-0 top-0 z-[1] flex flex-wrap content-center items-center justify-center gap-4 rounded-lg bg-content-200 bg-opacity-50 px-4 md:px-6">
                <Button
                  variant="secondary"
                  data-text="Remove"
                  onClick={() => setImage(null)}
                >
                  Remove
                </Button>
                <label
                  htmlFor="update-image"
                  data-text="Update"
                  className={`cursor-pointer ${button()}`}
                >
                  Update
                </label>
              </div>
              <Image
                src="/images/timeline.png"
                alt="Executive"
                className="rounded-lg"
                fill
              />
            </div>
          ) : (
            <label
              htmlFor="new-image"
              className="flex cursor-pointer flex-col items-center justify-center gap-6 rounded-lg border-2 border-primary-100 px-10 py-12 hover:border-primary-200"
            >
              <FaImage className="text-6xl text-primary-200 sm:text-7xl md:text-8xl lg:text-9xl" />
              <span className="text-lg font-medium text-primary-300 md:text-xl">
                Add an image
              </span>
            </label>
          )}
        </div>
        <div id={styles.button}>
          <Button type="submit" data-text="Add">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddExecutive;
