"use client";

import { type IActivityItem } from "@asad/lib/data/home/activities";
import { type FunctionComponent } from "react";
import Logo from "@asad/lib/components/Logo";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";
import Image from "next/image";
import { useModalContext } from "@asad/lib/components/ModalContextProvider";
import PresidentContent from "./PresidentContent";

interface PresidentCardProps {
  activity: IActivityItem;
}

const PresidentCard: FunctionComponent<PresidentCardProps> = ({ activity }) => {
  const { toggleModal } = useModalContext();

  return (
    <div
      key={activity.id}
      onClick={() => toggleModal(<PresidentContent />)}
      className={`${styles.card} flex cursor-pointer flex-col gap-4`}
    >
      <div className={`${styles.imageContainer} aspect-[5/6]`}>
        <div className={`${styles.image}`}>
          <Image
            src={activity.image}
            alt={activity.title}
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
        <small>{activity.date}</small>
        <h6 className="truncate font-medium">{activity.title}</h6>
      </div>
    </div>
  );
};

export default PresidentCard;
