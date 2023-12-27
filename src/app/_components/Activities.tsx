import { activities } from "@asad/lib/data/home/activities";
import Button from "@asad/lib/ui/Button";
import styles from "@asad/styles/home/activities.module.css";
import Link from "next/link";

const Activities = () => {
  return (
    <section className="bg-[#F2F7F7] px-5 py-10 text-[#0A0A0A] sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16">
      <div className="flex flex-col gap-8 sm:mx-4 sm:gap-10 sm:px-4 md:mx-8 md:gap-12 md:px-8 lg:gap-14">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl sm:text-3xl md:text-4xl">
            Recent Activities
          </h4>
          <div className="hidden sm:block">
            <Button variant="ghost" data-text="View all">
              View all
            </Button>
          </div>
        </div>
        <div id={styles.activities}>
          {activities.map((activity, index) => (
            <Link key={index} href="#" className={styles.activity}>
              <div className="flex flex-col gap-4 border">
                <div
                  className={`${styles.activityImage}`}
                  style={{ backgroundImage: `url(${activity.image})` }}
                >
                  <div className="flex flex-col items-center justify-center gap-4 text-xl">
                    <span className="text-[#FCFCFC]">Logo</span>
                    <span className={styles.viewActivity}>View more</span>
                  </div>
                </div>
                <div>
                  <small className="text-sm text-[#333333]">
                    {activity.date}
                  </small>
                  <h5>{activity.title}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-end sm:hidden">
          <Button variant="ghost" data-text="View all">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Activities;
