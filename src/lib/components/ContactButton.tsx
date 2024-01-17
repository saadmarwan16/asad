"use client";

import { useModalContext } from "@asad/lib/components/ModalContextProvider";
import Button from "../ui/Button";
import ContactUsContent from "./ContactUsContent";

const ContactButton = () => {
  const { toggleModal } = useModalContext();

  return (
    <Button
      variant="secondary"
      size="lg"
      data-text="Contact"
      onClick={() => toggleModal(<ContactUsContent />)}
    >
      Contact
    </Button>
  );
};

export default ContactButton;
