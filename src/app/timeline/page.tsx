import ExecutivePresidentTimelineActivitiesWrapper from "@asad/lib/components/ExecutivePresidentTimelineActivitiesWrapper";
import { activities } from "@asad/lib/data/home/activities";
import Button from "@asad/lib/ui/Button";
import Image from "next/image";
import styles from "@asad/styles/shared/timeline.module.css";

const Timeline = () => {
  return (
    <ExecutivePresidentTimelineActivitiesWrapper
      title="Timeline"
      description="Empowering Unity, Celebrating Diversity: Our Journey Through Time."
    >
      <h6>Filter</h6>
      <div id={styles.cards}>
        {activities.map((activity) => (
          <div
            className={`${styles.card} relative flex flex-col gap-6 border-l-2 border-base-400 py-12 pl-6 md:gap-8`}
          >
            <span className="text-lg font-semibold md:text-xl">Aug 2017</span>
            <div className="aspect-[3/2] w-full">
              <Image
                src={activity.image}
                alt={activity.title}
                width={400}
                height={250}
                className="h-full w-full rounded-lg"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nulla a officia assumenda soluta magnam, adipisci autem porro
              animi, culpa.
            </p>
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
