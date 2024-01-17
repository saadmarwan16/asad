import ExecutivePresidentTimelineActivitiesWrapper from "@asad/lib/components/ExecutivePresidentTimelineActivitiesWrapper";
import Button from "@asad/lib/ui/Button";
import Image from "next/image";
import styles from "@asad/styles/shared/timeline.module.css";
import { timelines } from "@asad/lib/data/home/timelines";
import dayjs from "dayjs";

const Timeline = () => {
  return (
    <ExecutivePresidentTimelineActivitiesWrapper
      title="Timeline"
      description="Empowering Unity, Celebrating Diversity: Our Journey Through Time."
    >
      <h6>Filter</h6>
      <div id={styles.cards}>
        {timelines.map((timeline) => (
          <div
            className={`${styles.card} relative flex flex-col gap-6 border-l-2 border-base-400 py-12 pl-6 md:gap-8`}
          >
            <span className="text-lg font-semibold md:text-xl">
              {dayjs(timeline.date).format("MMM YYYY")}
            </span>
            <div className="aspect-[3/2] w-full">
              <Image
                src={timeline.image}
                alt={timeline.desciption}
                width={400}
                height={250}
                className="h-full w-full rounded-lg"
              />
            </div>
            <p>{timeline.desciption}</p>
          </div>
        ))}
      </div>
      <div className="self-end">
        <Button data-text="Load more">Load more</Button>
      </div>
    </ExecutivePresidentTimelineActivitiesWrapper>
  );
};

export default Timeline;
