"use client";

import styles from "@asad/styles/shared/admin/side.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { aside } from "@asad/lib/data/shared/admin/aside";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Routes } from "@asad/lib/routes";
import { usePathname } from "next/navigation";

const AdminAside = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("Dashboard");
  const [route, setRoute] = useState(usePathname());

  useEffect(() => {
    setRoute(usePathname());
  }, [usePathname()]);

  return (
    <aside className="h-full w-full overflow-y-scroll bg-base-200 lg:fixed lg:w-64">
      <nav className="flex flex-col gap-12 p-6 sm:gap-14 md:gap-16">
        <Link
          href={Routes.HOME}
          className="relative aspect-square w-24 rounded-full transition-all hover:scale-105"
        >
          <Image src="/logo.png" alt="Logo" sizes="100% 100%" fill />
        </Link>
        <ul className="flex flex-col gap-3">
          <li className="text-xl">
            <Link
              href={Routes.ADMIN_DASHBOARD}
              className={`block hover:text-primary-200 ${
                route === Routes.ADMIN_DASHBOARD && "text-primary-200"
              }`}
              onClick={() => {
                setOpen(false);
                setRoute(Routes.ADMIN_DASHBOARD);
              }}
            >
              Dashboard
            </Link>
          </li>

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
              <ul
                className={`relative pl-8 text-base ${styles.innerList} ${
                  !open || current !== item.title
                    ? styles.hideInnerList
                    : styles.showInnerList
                }`}
              >
                {item.children.map((inner, index) => (
                  <li key={index}>
                    <Link
                      href={inner.link}
                      className={`relative block hover:text-primary-200 ${
                        styles.innerListItem
                      } ${route === inner.link && styles.active} ${
                        !open || current !== item.title
                          ? styles.closed
                          : styles.opened
                      }`}
                      onClick={() => setRoute(inner.link)}
                    >
                      {inner.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminAside;
