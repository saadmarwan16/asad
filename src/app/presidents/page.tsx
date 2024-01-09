import ExecutivePresidentTimelineActivitiesWrapper from "@asad/lib/components/ExecutivePresidentTimelineActivitiesWrapper";
import Logo from "@asad/lib/components/Logo";
import { activities } from "@asad/lib/data/home/activities";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";
import Image from "next/image";

const Presidents = () => {
  return (
    <ExecutivePresidentTimelineActivitiesWrapper
      title="Presidents"
      description="Our Legacy Leaders: Guiding with Vision, Leading with Excellence."
    >
      <h6>Filter</h6>
      <div id={styles.cards}>
        {activities.map((activity) => (
          <div
            key={activity.id}
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
        ))}
      </div>
    </ExecutivePresidentTimelineActivitiesWrapper>
  );
};

export default Presidents;
