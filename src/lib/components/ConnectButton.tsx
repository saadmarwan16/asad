"use client";

import { useModalContext } from "@asad/lib/components/ModalContextProvider";
import Button from "../ui/Button";
import WorkTogetherContent from "./WorkTogetherContent";

const ConnectButton = () => {
  const { toggleModal } = useModalContext();

  return (
    <Button
      size="lg"
      data-text="Connect"
      onClick={() => toggleModal(<WorkTogetherContent />)}
    >
      Connect
    </Button>
  );
};

export default ConnectButton;
