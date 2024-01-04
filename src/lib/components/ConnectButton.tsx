"use client";

import { useModalContext } from "@asad/lib/components/ModalContextProvider";
import Button from "../ui/Button";

const ConnectButton = () => {
  const { toggleModal } = useModalContext();

  return (
    <Button
      size="lg"
      data-text="Connect"
      onClick={() => toggleModal("work-together")}
    >
      Connect
    </Button>
  );
};

export default ConnectButton;
