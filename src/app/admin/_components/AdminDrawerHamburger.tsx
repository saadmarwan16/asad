"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import styles from "@asad/styles/shared/admin/header.module.css";
import { useAdminDrawerContext } from "./AdminDrawerContextProvider";

const AdminDrawerHamburger = () => {
  const { toggleDrawer } = useAdminDrawerContext();

  return (
    <RxHamburgerMenu
      id={styles.hamburger}
      className="cursor-pointer text-4xl lg:hidden"
      onClick={toggleDrawer}
    />
  );
};

export default AdminDrawerHamburger;
