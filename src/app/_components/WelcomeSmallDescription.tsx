"use client";

import styles from "@asad/styles/home/welcome.module.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const WelcomeSmallDescription = () => {
  const control = useAnimation();
  const [imageIdx, setImageIdx] = useState(0);

  useEffect(() => {
    const changeSliderImageIdx = () => {
      void control.start({
        opacity: [1, 0.75],
        transition: { duration: 25 },
      });

      void control.start({
        opacity: [0.75, 1],
        transition: { duration: 1 },
      });
    };

    changeSliderImageIdx();

    return () => {
      control.stop();
    };
  }, [imageIdx]);

  return (
    <>
      <div className={`${styles.contentContainer} relative`}>
        <h4 className="px-5 sm:px-16 md:px-24">
          <div className="text-2xl font-medium sm:hidden sm:text-3xl">
            African
          </div>
          <div className="text-2xl font-medium sm:hidden sm:text-3xl">
            Students Association
          </div>
          <div className="hidden text-2xl font-medium sm:block sm:text-3xl">
            African Students Association
          </div>
          <div className="text-2xl font-medium sm:text-3xl">in Denizli</div>
        </h4>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            "We promote our rich African cultures in a positive manner",
            3000,
            () => setImageIdx(1),
            "We support one another in times of difficulties",
            3000,
            () => setImageIdx(2),
            "We propagate the spirit of togetherness",
            3000,
            () => setImageIdx(3),
            "We protect the rights of all members",
            3000,
            () => setImageIdx(0),
          ]}
          speed={60}
          style={{ fontWeight: 500 }}
          repeat={Infinity}
          omitDeletionAnimation
          wrapper="div"
          className="absolute bottom-0 right-0 h-20 w-[66%] p-2 text-base 2xs:h-24 2xs:text-lg xs:h-32 xs:p-8 xs:text-xl sm:h-48 sm:p-12 sm:text-2xl sm:font-medium md:p-16"
        />
      </div>
      <div className={`${styles.imageContainer} h-full overflow-hidden`}>
        <div className={`${styles.slider} h-full overflow-hidden`}>
          {imageIdx === 0 && (
            <Image
              src="/images/about-us.jpg"
              alt="About us"
              fill
              className="h-full w-full object-cover"
            />
          )}
          {imageIdx === 1 && (
            <Image
              src="/images/aims.jpg"
              alt="Aims"
              fill
              className="h-full w-full object-cover"
            />
          )}
          {imageIdx === 2 && (
            <Image
              src="/images/presidents.jpg"
              alt="Presidents"
              fill
              className="h-full w-full object-cover"
            />
          )}
          {imageIdx === 3 && (
            <Image
              src="/images/timeline.jpg"
              alt="Timeline"
              fill
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default WelcomeSmallDescription;
