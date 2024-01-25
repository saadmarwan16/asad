"use client";

import {
  useState,
  type FunctionComponent,
  type PropsWithChildren,
} from "react";
import styles from "@asad/styles/shared/admin/header.module.css";
import sideStyles from "@asad/styles/shared/admin/side.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

// export const metadata = {
//   title: "Admin Dashboard - ASAD | African Students Association in Denizli",
//   description:
//     "African Students Association in Denizli is a non-profit association founded in 2015 by African Stidents in Denizli in order to help create and develop strong relationships with one another.",
//   icons: [{ rel: "icon", url: "/favicon.ico" }],
// };

const AdminLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen">
      <div className="fixed hidden h-full w-64 overflow-y-scroll bg-base-200 lg:block">
        <div className="px-6 py-10">
          <ul className="flex flex-col gap-3">
            <li className="text-xl">Dashboard</li>

            <li className="text-xl">
              <div
                className={`flex cursor-pointer items-center justify-between py-1 text-xl hover:text-primary-200 ${
                  isOpen && "text-primary-200"
                }`}
                onClick={() => setIsOpen((prev) => !prev)}
              >
                Executive team
                <MdArrowForwardIos
                  className={`${isOpen ? sideStyles.open : sideStyles.close}`}
                />
              </div>
              <ul className={`relative pl-8 text-base ${sideStyles.innerList}`}>
                <li>
                  <Link
                    href="#"
                    className={`relative block hover:text-primary-200 ${
                      sideStyles.innerListItem
                    } ${!isOpen && "hidden"}`}
                  >
                    Add
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`relative block hover:text-primary-200 ${
                      sideStyles.innerListItem
                    } ${!isOpen && "hidden"}`}
                  >
                    List
                  </Link>
                </li>
              </ul>
            </li>

            <li className="text-xl">
              Presidents
              <ul className="pl-4 text-base">
                <li>Add</li>
                <li>List</li>
              </ul>
            </li>
            <li className="text-xl">
              Timeline
              <ul className="pl-4 text-base">
                <li>Add</li>
                <li>List</li>
              </ul>
            </li>
            <li className="text-xl">
              Activities
              <ul className="hidden pl-4 text-base">
                <li>Add</li>
                <li>List</li>
              </ul>
            </li>
            <li className="text-xl">
              Elections
              <ul className="hidden pl-4 text-base">
                <li>Add</li>
                <li>List</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-full lg:ml-[16.4rem]">
        <div className="fixed z-10 block w-full bg-base-100 pb-[0.4rem] shadow-lg lg:w-[calc(100%-16.4rem)] lg:shadow-none">
          <div className="block w-full bg-base-200 p-5 lg:px-10">
            <header id={styles.header} className="w-full">
              <RxHamburgerMenu
                id={styles.hamburger}
                className="cursor-pointer text-4xl lg:hidden"
              />
              <span id={styles.name}>
                <span className="text-2xl font-medium text-primary-100">A</span>
                <span className="text-2xl font-medium text-primary-200">S</span>
                <span className="text-2xl font-medium text-primary-300">A</span>
                <span className="text-2xl font-medium text-primary-400">D</span>
              </span>
              <div
                id={styles.search}
                className="flex max-w-[800px] gap-2 sm:px-6"
              >
                <input
                  className="w-full rounded-lg border-2 border-primary-100 bg-transparent px-4 text-content-100 focus-visible:border-primary-200 focus-visible:outline-none"
                  placeholder="Search in presidents ..."
                />
                <button className="flex aspect-square w-12 items-center justify-center rounded-lg bg-primary-100 font-medium text-primary-400 transition-all hover:bg-primary-200 [&>svg]:hover:text-base-100">
                  <CiSearch className="text-3xl transition-all" />
                </button>
              </div>
              <div
                id={styles.avatar}
                className="aspect-square w-12 rounded-full bg-primary-300"
              ></div>
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
