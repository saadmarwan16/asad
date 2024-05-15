import Logo from "@asad/lib/components/Logo";
import Button from "@asad/lib/ui/Button";
import { Routes } from "@asad/lib/routes";
import styles from "@asad/styles/home/activities.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import { type TActivity } from "@asad/server/db/schema/activities";
import { type FunctionComponent } from "react";

interface ActivitiesProps {
  activities: TActivity[];
}

const Activities: FunctionComponent<ActivitiesProps> = ({ activities }) => {
  return (
    <section
      id="activities"
      className="bg-base-200 px-5 py-10 text-content-200 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16"
    >
      <div className="flex flex-col gap-8 sm:mx-4 sm:gap-10 sm:px-4 md:mx-8 md:gap-12 md:px-8 lg:gap-14">
        <div className="flex items-center justify-between">
          <h4>Recent Activities</h4>
          <Link href={Routes.ACTIVITIES} className="hidden sm:block">
            <Button variant="ghost" data-text="View all">
              View all
            </Button>
          </Link>
        </div>
        <div id={styles.activities}>
          {activities.map((activity) => (
            <Link
              key={activity.id}
              href={Routes.ACTIVITY_DETAILS(activity.id)}
              className={styles.activity}
            >
              <div className="flex flex-col gap-4">
                <div
                  className={`${styles.activityImage}`}
                  style={{ backgroundImage: `url(${activity.images[0]})` }}
                >
                  <div className="flex flex-col items-center justify-center gap-4 text-xl">
                    <span>
                      <Logo className="w-16" />
                    </span>
                    <span className={styles.viewActivity}>View more</span>
                  </div>
                </div>
                <div>
                  <small>{dayjs(activity.date).format("MMMM DD, YYYY")}</small>
                  <h6 className="truncate font-medium">{activity.name}</h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href={Routes.ACTIVITIES}
          className="flex items-center justify-end sm:hidden"
        >
          <Button variant="ghost" data-text="View all">
            View all
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Activities;
