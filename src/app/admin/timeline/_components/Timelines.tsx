"use client";

import { type FunctionComponent } from "react";
import Button from "@asad/lib/ui/Button";
import Image from "next/image";
import styles from "@asad/styles/shared/timeline.module.css";
import dayjs from "dayjs";
import Link from "next/link";
import { Routes } from "@asad/lib/routes";
import useSWRInfinite from "swr/infinite";
import { type TTimeline } from "@asad/server/db/schema/timeline";

interface TimelinesProps {
  data: TTimeline[];
}

const Timelines: FunctionComponent<TimelinesProps> = ({ data }) => {
  const { data: timelines } = useSWRInfinite(
    (pageIdx) => {
      return `http://localhost:3000/api/timelines?page=${pageIdx}`;
    },
    async (url) => {
      return fetch(url).then((res) => res.json() as Promise<TTimeline[]>);
    },
    {
      fallbackData: [data],
    },
  );

  return (
    <div className="flex flex-col gap-8">
      <div id={styles.cards}>
        {timelines?.map((page) => (
          <>
            {page.map((timeline) => (
              <Link
                href={Routes.ADMIN_TIMELINE_DETAILS(timeline.id.toString())}
                className={`${styles.card} ${styles.cardHover} relative flex flex-col gap-6 border-l-2 border-base-400 py-12 pl-6 md:gap-8`}
              >
                <span className="text-lg font-semibold md:text-xl">
                  {dayjs(timeline.date).format("MMM YYYY")}
                </span>
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={timeline.image}
                    alt={timeline.description}
                    fill={true}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <p>{timeline.description}</p>
              </Link>
            ))}
          </>
        ))}
      </div>
      <div className="self-end">
        <Button data-text="Load more">Load more</Button>
      </div>
    </div>
  );
};

export default Timelines;
