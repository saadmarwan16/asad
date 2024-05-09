'use client';

import { type FunctionComponent } from "react";
import Button from "@asad/lib/ui/Button";
import Image from "next/image";
import styles from "@asad/styles/shared/timeline.module.css";
import dayjs from "dayjs";
import useSWRInfinite from "swr/infinite";
import { type TTimeline } from "@asad/server/db/schema/timeline";

interface TimelinesProps {
  data: TTimeline[];
}

const Timelines: FunctionComponent<TimelinesProps> = ({ data }) => {
  const {
    data: timelines,
    size,
    setSize,
    isLoading,
    isValidating,
  } = useSWRInfinite(
    (pageIdx) => {
      return `http://localhost:3000/api/timelines?pageIdx=${pageIdx}&pageSize=12`;
    },
    async (url) => {
      return fetch(url).then((res) => res.json() as Promise<TTimeline[]>);
    },
    {
      fallbackData: [data],
    },
  );

  return (
    <>
      <div id={styles.cards}>
        {timelines?.map((page) => (
          <>
            {page.map((timeline) => (
              <div
                className={`${styles.card} relative flex flex-col gap-6 border-l-2 border-base-400 py-12 pl-6 md:gap-8`}
              >
                <span className="text-lg font-semibold md:text-xl">
                  {dayjs(timeline.date).format("MMM YYYY")}
                </span>
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={timeline.image}
                    alt={timeline.description}
                    fill
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <p>{timeline.description}</p>
              </div>
            ))}
          </>
        ))}
      </div>
      <div className="self-end">
        <Button
          data-text="Load more"
          disabled={
            isLoading || isValidating || timelines?.[size - 1]?.length === 0
          }
          onClick={() => setSize(size + 1)}
        >
          Load more
        </Button>
      </div>
    </>
  );
};

export default Timelines;
