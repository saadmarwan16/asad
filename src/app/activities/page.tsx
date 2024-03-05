import ExecutivePresidentTimelineActivitiesWrapper from "@asad/lib/components/ExecutivePresidentTimelineActivitiesWrapper";
import Logo from "@asad/lib/components/Logo";
import { activities } from "@asad/lib/data/home/activities";
import { Routes } from "@asad/lib/routes";
import Button from "@asad/lib/ui/Button";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

const Activities = () => {
  return (
    <ExecutivePresidentTimelineActivitiesWrapper
      title="Activities"
      description="Our year-round activities focus on cultural exchange, academic support, and community building among African students in Denizli."
    >
      <h6>Filter</h6>
      <div id={styles.cards}>
        {activities.map((activity) => (
          <Link
            key={activity.id}
            href={Routes.ACTIVITY_DETAILS(activity.id)}
            className={`${styles.card} flex flex-col gap-4`}
          >
            <div className={`${styles.imageContainer} aspect-[5/6]`}>
              <div className={`${styles.image}`}>
                <Image
                  src={activity.images[0] ?? 'https://via.placeholder.com/400x700'}
                  alt={activity.name}
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
              <small>{dayjs(activity.date).format('MMMM DD, YYYY')}</small>
              <h6 className="truncate font-medium">{activity.name}</h6>
            </div>
          </Link>
        ))}
      </div>
      <div className="self-end">
        <Button data-text="Load more">Load more</Button>
      </div>
    </ExecutivePresidentTimelineActivitiesWrapper>
  );
};

export default Activities;
