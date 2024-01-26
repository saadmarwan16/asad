"use client";

import styles from "@asad/styles/shared/admin/side.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { aside } from "@asad/lib/data/shared/admin/aside";
import { useState } from "react";

const AdminAside = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("Dashboard");

  return (
    <aside className="fixed hidden h-full w-64 overflow-y-scroll bg-base-200 lg:block">
      <div className="px-6 py-10">
        <ul className="flex flex-col gap-3">
          <li className="text-xl">Dashboard</li>

          {aside.map((item, index) => (
            <li key={index} className="text-xl">
              <div
                className={`flex cursor-pointer items-center justify-between py-1 text-xl hover:text-primary-200 ${
                  open && current === item.title && "text-primary-200"
                }`}
                onClick={() => {
                  if (current === item.title) {
                    setOpen((prev) => !prev);
                  } else if (current !== item.title && !open) {
                    setOpen(true);
                  }

                  setCurrent(item.title);
                }}
              >
                {item.title}
                <MdArrowForwardIos
                  className={`${
                    open && current === item.title ? styles.open : styles.close
                  }`}
                />
              </div>
              <ul className={`relative pl-8 text-base ${styles.innerList}`}>
                {item.children.map((inner, index) => (
                  <li key={index}>
                    <Link
                      href={inner.link}
                      className={`relative block hover:text-primary-200 ${
                        styles.innerListItem
                      } ${(!open || current !== item.title) && "hidden"}`}
                    >
                      {inner.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AdminAside;
