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
import AdminAside from "./AdminAside";

export interface IAdminDrawerContext {
  toggleDrawer: () => void;
}

const AdminDrawerContext = createContext<IAdminDrawerContext>({
  toggleDrawer: () => {
    return undefined;
  },
});

export const useAdminDrawerContext = () => useContext(AdminDrawerContext);

const AdminDrawerContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <AdminDrawerContext.Provider
      value={{
        toggleDrawer: toggleDrawer,
      }}
    >
      <Drawer
        direction="left"
        lockBackgroundScroll={true}
        open={isOpen}
        onClose={toggleDrawer}
        className="!w-full !max-w-96 !bg-base-200"
      >
        <div className="my-4 flex justify-end px-6 md:my-6">
          <IoMdClose
            className="cursor-pointer text-5xl"
            onClick={toggleDrawer}
          />
        </div>
        <AdminAside />
      </Drawer>
      {children}
    </AdminDrawerContext.Provider>
  );
};

export default AdminDrawerContextProvider;
