"use client";

import { useModalContext } from "@asad/lib/components/ModalContextProvider";
import Button from "../ui/Button";

const ContactButton = () => {
  const { toggleModal } = useModalContext();

  return (
    <Button
      variant="secondary"
      size="lg"
      data-text="Contact"
      onClick={() => toggleModal("contact")}
    >
      Contact
    </Button>
  );
};

export default ContactButton;
