"use client";

import {
  type FunctionComponent,
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import styles from "@asad/styles/shared/drawer.module.css";
import { nav } from "../data/shared/nav";

export interface IDrawerContext {
  toggleDrawer: () => void;
}

const DrawerContext = createContext<IDrawerContext>({
  toggleDrawer: () => {
    return undefined;
  },
});

export const useDrawerContext = () => useContext(DrawerContext);

const DrawerContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <DrawerContext.Provider
      value={{
        toggleDrawer: toggleDrawer,
      }}
    >
      <Drawer
        customIdSuffix="drawer"
        direction="right"
        lockBackgroundScroll={true}
        open={isOpen}
        onClose={toggleDrawer}
        className="!w-full !max-w-96"
      >
        <nav className="h-full overflow-y-scroll p-4 sm:p-6 md:p-8">
          <div className="mb-14 flex justify-end">
            <IoMdClose
              className="cursor-pointer text-5xl"
              onClick={toggleDrawer}
            />
          </div>
          <ul className={`${styles.list} flex flex-col gap-2 text-3xl`}>
            {nav.map((item, index) => (
              <li key={index}>
                <Link href={item.link} onClick={toggleDrawer}>
                  {item.title}
                  <span></span>
                  <span></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
