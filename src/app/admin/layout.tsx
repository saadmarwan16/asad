"use client";

import {
  useState,
  type FunctionComponent,
  type PropsWithChildren,
} from "react";
import styles from "@asad/styles/shared/admin/header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import AdminAside from "./_components/AdminAside";
import Link from "next/link";
import { Routes } from "@asad/lib/routes";
import Button from "@asad/lib/ui/Button";
import Image from "next/image";

// export const metadata = {
//   title: "Admin Dashboard - ASAD | African Students Association in Denizli",
//   description:
//     "African Students Association in Denizli is a non-profit association founded in 2015 by African Stidents in Denizli in order to help create and develop strong relationships with one another.",
//   icons: [{ rel: "icon", url: "/favicon.ico" }],
// };

const AdminLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className="h-screen">
      <AdminAside />
      <div className="h-full lg:ml-[16.4rem]">
        <div className="fixed z-10 block w-full bg-base-100 pb-[0.4rem] shadow-lg lg:w-[calc(100%-16.4rem)] lg:shadow-none">
          <div className="block w-full bg-base-200 p-5 lg:px-10">
            <header id={styles.header} className="w-full">
              <RxHamburgerMenu
                id={styles.hamburger}
                className="cursor-pointer text-4xl lg:hidden"
              />
              <Link href={Routes.HOME} id={styles.name}>
                <span className="text-2xl font-medium text-primary-100">A</span>
                <span className="text-2xl font-medium text-primary-200">S</span>
                <span className="text-2xl font-medium text-primary-300">A</span>
                <span className="text-2xl font-medium text-primary-400">D</span>
              </Link>
              <div
                id={styles.search}
                className="flex max-w-[800px] gap-2 sm:px-6"
              >
                <div className="relative h-12 w-full">
                  <input
                    className="h-full w-full rounded-lg border-2 border-primary-100 bg-transparent px-4 text-content-100 focus-visible:border-primary-200 focus-visible:outline-none"
                    placeholder="Enter search in presidents ..."
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
                      <Button data-text="Executives" size="sm">
                        Executives
                      </Button>
                      <Button data-text="Presidents" size="sm">
                        Presidents
                      </Button>
                      <Button data-text="Activities" size="sm">
                        Activities
                      </Button>
                      <Button data-text="Elections" size="sm">
                        Elections
                      </Button>
                    </div>
                  </div>
                </div>

                <button className="flex aspect-square w-12 items-center justify-center rounded-lg bg-primary-100 font-medium text-primary-400 transition-all hover:bg-primary-200 [&>svg]:hover:text-base-100">
                  <CiSearch className="text-3xl transition-all" />
                </button>
              </div>
              <div
                id={styles.avatar}
                className="relative aspect-square w-12 rounded-full"
              >
                <Image src="/logo.png" alt="User profile" fill />
              </div>
            </header>
          </div>
        </div>
        <div className="relative w-full pt-[9.5rem] sm:pt-[5.5rem]">
          <div className="absolute w-full overflow-y-scroll bg-base-200 p-5 lg:px-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
