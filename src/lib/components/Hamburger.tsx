"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { useDrawerContext } from "@asad/lib/components/DrawerContextProvider";

const Hamburger = () => {
  const { toggleDrawer } = useDrawerContext();

  return (
    <RxHamburgerMenu
      className="cursor-pointer text-4xl text-content-200"
      onClick={toggleDrawer}
    />
  );
};

export default Hamburger;
