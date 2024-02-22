import Button from "@asad/lib/ui/Button";
import Image from "next/image";
import styles from "@asad/styles/shared/timeline.module.css";
import { timelines } from "@asad/lib/data/home/timelines";
import dayjs from "dayjs";
import Link from "next/link";
import { Routes } from "@asad/lib/routes";

const AdminTimeline = () => {
  return (
    <div>
      <h4 className="mb-8 font-medium">Timeline</h4>
      <div className="flex flex-col gap-8">
        <div id={styles.cards}>
          {timelines.map((timeline) => (
            <Link
              href={Routes.ADMIN_TIMELINE_DETAILS(timeline.id.toString())}
              className={`${styles.card} ${styles.cardHover} relative flex flex-col gap-6 border-l-2 border-base-400 py-12 pl-6 md:gap-8`}
            >
              <span className="text-lg font-semibold md:text-xl">
                {dayjs(timeline.date).format("MMM YYYY")}
              </span>
              <div className="aspect-[3/2] w-full">
                <Image
                  src={timeline.image}
                  alt={timeline.description}
                  width={400}
                  height={250}
                  className="h-full w-full rounded-lg"
                />
              </div>
              <p>{timeline.description}</p>
            </Link>
          ))}
        </div>
        <div className="self-end">
          <Button data-text="Load more">Load more</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminTimeline;
