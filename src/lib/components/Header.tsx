import { type FunctionComponent } from "react";
import Image from "next/image";
import { Routes } from "@asad/lib/routes";
import Hamburger from "@asad/lib/components/Hamburger";

const Logo = () => {
  return (
    <a href={Routes.HOME} className="relative inline-block w-12 sm:w-16">
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
  return (
    <>
      <header className="absolute z-20 hidden h-28 items-center text-xl lg:flex">
        <div className="fixed left-8 z-10 flex items-center">
          <Logo />
        </div>
        <div className="fixed right-8 z-10">
          <Hamburger />
        </div>
      </header>
      <header className="text-md flex h-20 items-center justify-between bg-base-100 px-4 sm:h-24 lg:hidden">
        <div className="flex items-center">
          <Logo />
        </div>
        <div>
          <Hamburger />
        </div>
      </header>
    </>
  );
};

export default Header;
