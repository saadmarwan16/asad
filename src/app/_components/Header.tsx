"use client";

import { type FunctionComponent } from "react";
import Image from "next/image";
import { Urls } from "@asad/lib/urls";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDrawerContext } from "@asad/lib/components/DrawerContextProvider";

const Logo = () => {
  return (
    <a href={Urls.HOME} className="relative inline-block w-12 sm:w-16">
      <Image
        width={80}
        height={80}
        src="/logo.png"
        alt="Logo"
        className="h-full w-full"
      />
    </a>
  );
};

const Header: FunctionComponent = () => {
  const { toggleDrawer } = useDrawerContext();

  return (
    <>
      <header className="absolute z-20 hidden h-28 items-center text-xl lg:flex">
        <div className="fixed left-8 z-10 flex items-center">
          <Logo />
        </div>
        <div
          className="fixed right-8 z-10 cursor-pointer"
          onClick={toggleDrawer}
        >
          <RxHamburgerMenu className="text-4xl text-content-200" />
        </div>
      </header>
      <header className="text-md flex h-20 items-center justify-between bg-base-100 px-4 sm:h-24 lg:hidden">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="cursor-pointer" onClick={toggleDrawer}>
          <RxHamburgerMenu className="text-3xl text-content-200 md:text-4xl" />
        </div>
      </header>
    </>
  );
};

export default Header;
