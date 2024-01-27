import type { FunctionComponent, PropsWithChildren } from "react";
import styles from "@asad/styles/shared/admin/header.module.css";
import footerStyles from "@asad/styles/shared/footer.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import AdminAside from "./_components/AdminAside";
import Link from "next/link";
import { Routes } from "@asad/lib/routes";
import Image from "next/image";
import dayjs from "dayjs";
import AdminSearchForm from "./_components/AdminSearchForm";
import { FaHeart } from "react-icons/fa6";

export const metadata = {
  title: "Admin Dashboard - ASAD | African Students Association in Denizli",
  description:
    "African Students Association in Denizli is a non-profit association founded in 2015 by African Stidents in Denizli in order to help create and develop strong relationships with one another.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const AdminLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
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
              <AdminSearchForm />
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

            <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:mt-10 lg:mt-12">
              <small className="x-small">
                © 2015-{dayjs().year()}{" "}
                <a href={Routes.HOME} className="hover:text-primary-100">
                  ASAD.
                </a>{" "}
                All rights reserved.
              </small>
              <span>
                Made with lots of{" "}
                <FaHeart
                  className={`${footerStyles.love} mx-1 inline-block text-red-600 md:mx-2`}
                />{" "}
                by
                <Link
                  href="https://www.marwansaad.me/"
                  target="_blank"
                  className="ml-2 text-primary-200 hover:text-primary-100"
                >
                  Yours truly
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
