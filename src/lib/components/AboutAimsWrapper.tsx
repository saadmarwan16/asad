"use client";

import Contact from "@asad/lib/components/Contact";
import Footer from "@asad/lib/components/Footer";
import Header from "@asad/lib/components/Header";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import {
  type FunctionComponent,
  type PropsWithChildren,
  useState,
} from "react";

interface AboutAimsWrapperProps extends PropsWithChildren {
  title: string;
  description: string;
  url: string;
  alt: string;
}

const AboutAimsWrapper: FunctionComponent<AboutAimsWrapperProps> = ({
  children,
  title,
  description,
  url,
  alt,
}) => {
  const [pos, setPos] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (val) => setPos(val));

  return (
    <div>
      <div className="hidden lg:block">
        <Header />
      </div>
      <div
        className={`absolute z-20 hidden h-28 items-center transition-all lg:flex ${
          pos >= 80 && "opacity-0"
        }`}
      >
        <div className="fixed left-28 z-10 flex items-center xl:left-32">
          <h6 className="text-2xl font-semibold text-gray-400">{title}</h6>
        </div>
      </div>
      <main className="px-4 pt-4 sm:px-12 md:px-16 lg:px-28 lg:pt-28 xl:px-32">
        <div className="absolute -mx-4 -mt-4 w-full sm:-mx-12 md:-mx-16 lg:hidden [&>header:last-child]:bg-content-200 [&>header:last-child]:bg-opacity-0 [&>header:last-child]:mix-blend-multiply">
          <Header />
        </div>
        <div className="relative -z-10 -mx-4 -mb-16 -mt-4 min-h-[50vh] sm:-mx-12 md:-mx-16 lg:-mx-28 lg:-my-28 lg:h-screen xl:-mx-32">
          <Image
            src={url}
            alt={alt}
            fill={true}
            className="mix-blend-mutiply h-full w-full object-cover lg:hidden"
          />
          <Image
            src={url}
            alt={alt}
            width={1130}
            height={850}
            className="mix-blend-mutiply hidden h-full w-full lg:block"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-tl from-primary-400 via-primary-300 to-primary-200 opacity-75 mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 right-0 top-20 bg-content-200 bg-opacity-30 px-4 py-6 mix-blend-lighten sm:px-12 sm:py-10 md:px-16 md:py-16 lg:top-0 lg:px-28 lg:py-36 xl:px-32">
            <h4 className="max-w-[640px] text-2xl font-medium text-base-100 md:text-3xl">
              {description}
            </h4>
          </div>
        </div>

        <div className="-mx-4 pt-16 sm:-mx-12 md:-mx-16 lg:-mx-28 lg:pt-28 xl:-mx-32">
          <div className="bg-base-200 px-4 py-16 sm:px-12 md:px-16 lg:px-28 xl:px-32">
            {children}
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutAimsWrapper;
