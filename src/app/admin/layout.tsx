import type { FunctionComponent, PropsWithChildren } from "react";
import styles from "@asad/styles/shared/admin/header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

export const metadata = {
  title: "Admin Dashboard - ASAD | African Students Association in Denizli",
  description:
    "African Students Association in Denizli is a non-profit association founded in 2015 by African Stidents in Denizli in order to help create and develop strong relationships with one another.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const AdminLayout: FunctionComponent<PropsWithChildren> = async ({
  children,
}) => {
  return (
    <div className="h-screen">
      <div className="fixed hidden h-full w-80 bg-base-200 lg:block"></div>
      <div className="lg:ml-80">
        <div className="bg-base-200 p-5">
          <header id={styles.header}>
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
                className="w-full rounded-lg border-2 border-primary-100 px-4 text-content-100 focus-visible:border-primary-200 focus-visible:outline-none"
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

        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
