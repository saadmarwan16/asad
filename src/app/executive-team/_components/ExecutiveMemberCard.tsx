"use client";

import { type FunctionComponent } from "react";
import Logo from "@asad/lib/components/Logo";
import Image from "next/image";
import { useModalContext } from "@asad/lib/components/ModalContextProvider";
import ExecutiveMemberContent from "./ExecutiveMemberContent";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";
import { type TExecutive } from "@asad/server/db/schema/executives";

interface ExecutiveMemberCardProps {
  executive: TExecutive;
}

const ExecutiveMemberCard: FunctionComponent<ExecutiveMemberCardProps> = ({
  executive,
}) => {
  const { toggleModal } = useModalContext();

  return (
    <div
      onClick={() =>
        toggleModal(<ExecutiveMemberContent executive={executive} />)
      }
      className={`${styles.card} flex cursor-pointer flex-col gap-4`}
    >
      <div className={`${styles.imageContainer} aspect-[5/6]`}>
        <div className={`${styles.image}`}>
          <Image
            src={executive.image ?? '/images/timeline.jpg'}
            alt={executive.name}
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
        <small>{executive.role}</small>
        <h6 className="truncate font-medium">{executive.name}</h6>
      </div>
    </div>
  );
};

export default ExecutiveMemberCard;
