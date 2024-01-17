"use client";

import Contact from "@asad/lib/components/Contact";
import Footer from "@asad/lib/components/Footer";
import Header from "@asad/lib/components/Header";
import { useScroll, useMotionValueEvent } from "framer-motion";
import {
  type FunctionComponent,
  type PropsWithChildren,
  useState,
} from "react";

interface ExecutivePresidentTimelineActivitiesWrapperProps
  extends PropsWithChildren {
  title: string;
  description: string;
}

const ExecutivePresidentTimelineActivitiesWrapper: FunctionComponent<
  ExecutivePresidentTimelineActivitiesWrapperProps
> = ({ children, title, description }) => {
  const [pos, setPos] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (val) => setPos(val));

  return (
    <div>
      <Header />
      <div
        className={`absolute z-20 hidden h-28 items-center transition-all lg:flex ${
          pos >= 70 && "opacity-0"
        }`}
      >
        <div className="fixed left-28 z-10 flex items-center xl:left-32">
          <h6 className="text-2xl font-semibold text-gray-400">{title}</h6>
        </div>
      </div>
      <main className="px-4 pb-16 pt-4 sm:px-12 md:px-16 lg:px-28 lg:py-28 xl:px-32">
        <h4 className="max-w-[730px] font-medium">{description}</h4>
        <div className="flex flex-col gap-8 pt-12 sm:pt-14 md:pt-16 lg:pt-20">
          {children}
        </div>
      </main>
      <div className="h-[1px] bg-gray-500"></div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ExecutivePresidentTimelineActivitiesWrapper;
