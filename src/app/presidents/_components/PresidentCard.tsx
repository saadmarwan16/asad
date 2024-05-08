"use client";

import { type FunctionComponent } from "react";
import Logo from "@asad/lib/components/Logo";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";
import Image from "next/image";
import { useModalContext } from "@asad/lib/components/ModalContextProvider";
import PresidentContent from "./PresidentContent";
import { type TPresident } from "@asad/server/db/schema/presidents";

interface PresidentCardProps {
  president: TPresident;
}

const PresidentCard: FunctionComponent<PresidentCardProps> = ({
  president,
}) => {
  const { toggleModal } = useModalContext();

  return (
    <div
      key={president.id}
      onClick={() => toggleModal(<PresidentContent president={president} />)}
      className={`${styles.card} flex cursor-pointer flex-col gap-4`}
    >
      <div className={`${styles.imageContainer} aspect-[5/6]`}>
        <div className={`${styles.image}`}>
          <Image
            src={president.image ?? "/images/no_profile_image.jpg"}
            alt={president.name}
            width={400}
            height={700}
            className="h-full w-full"
          />
        </div>
        <div
          className={`${styles.overlay} flex flex-col items-center justify-center gap-4 text-xl`}
        >
          <span>
            <Logo className="w-16" />
          </span>
          <span className={styles.cta}>View more</span>
        </div>
      </div>
      <div>
        <small>
          From <span className="small !font-medium">{president.from}</span> to{" "}
          <span className="small !font-medium">{president.to}</span>
        </small>
        <h6 className="truncate font-medium">{president.name}</h6>
      </div>
    </div>
  );
};

export default PresidentCard;
