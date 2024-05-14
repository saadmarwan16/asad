'use client';

import { type FunctionComponent } from "react";
import Logo from "@asad/lib/components/Logo";
import { Routes } from "@asad/lib/routes";
import Button from "@asad/lib/ui/Button";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { type TActivity } from "@asad/server/db/schema/activities";
import useSWRInfinite from "swr/infinite";

interface ActivitiesProps {
  data: TActivity[];
}

const Activities: FunctionComponent<ActivitiesProps> = ({ data }) => {
  const {
    data: activities,
    size,
    setSize,
    isLoading,
    isValidating,
  } = useSWRInfinite(
    (pageIdx) => {
      return `http://localhost:3000/api/activities?pageIdx=${pageIdx}&pageSize=1`;
    },
    async (url) => {
      return fetch(url).then((res) => res.json() as Promise<TActivity[]>);
    },
    {
      fallbackData: [data],
    },
  );

  return (
    <>
      <div id={styles.cards}>
        {activities?.map((page) => (
          <>
            {page.map((activity) => (
              <Link
                key={activity.id}
                href={Routes.ADMIN_ACTIVITY_DETAILS(activity.id)}
                className={`${styles.card} flex flex-col gap-4`}
              >
                <div className={`${styles.imageContainer} aspect-[5/6]`}>
                  <div className={`${styles.image}`}>
                    <Image
                      src={
                        activity.images[0] ??
                        "https://via.placeholder.com/400x700"
                      }
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
                  <small>{dayjs(activity.date).format("MMMM DD, YYYY")}</small>
                  <h6 className="truncate font-medium">{activity.name}</h6>
                </div>
              </Link>
            ))}
          </>
        ))}
      </div>
      <div className="self-end">
        <Button
          data-text="Load more"
          disabled={
            isLoading || isValidating || activities?.[size - 1]?.length === 0
          }
          onClick={() => setSize(size + 1)}
        >
          Load more
        </Button>
      </div>
    </>
  );
};

export default Activities;
