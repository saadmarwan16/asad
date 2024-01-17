"use client";

import {
  type FunctionComponent,
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { IoMdClose } from "react-icons/io";

export interface IModalContext {
  content: IModalContent;
  toggleModal: (content: IModalContent) => void;
}

type IModalContent = JSX.Element | undefined;

const ModalContext = createContext<IModalContext>({
  content: undefined,
  toggleModal: () => {
    return undefined;
  },
});

export const useModalContext = () => useContext(ModalContext);

const ModalContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<IModalContent>(undefined);
  const toggleModal = (content: IModalContent) => {
    setContent(content);
    setOpen((prevState) => !prevState);
  };

  return (
    <ModalContext.Provider
      value={{
        content: content,
        toggleModal: toggleModal,
      }}
    >
      <Modal
        open={open}
        onClose={() => {
          setContent(undefined);
        }}
        closeOnOverlayClick={false}
        closeIcon={<IoMdClose className="text-3xl" onClick={toggleModal} />}
        classNames={{
          modalContainer: "no-scrollbar",
        }}
        styles={{
          modalContainer: {
            width: "90%",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          },
          modal: {
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
        center
      >
        <div className="mt-8">{content}</div>
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
