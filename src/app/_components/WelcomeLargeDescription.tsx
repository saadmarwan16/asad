"use client";

import styles from "@asad/styles/home/welcome.module.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const WelcomeLargeDescription = () => {
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
      <div className="h-full">
        <motion.div className={styles.slider}>
          {imageIdx === 0 && (
            <Image
              width={1075}
              height={700}
              src="/images/about-us.jpg"
              alt="About us"
              className="h-full w-full object-cover"
            />
          )}
          {imageIdx === 1 && (
            <Image
              width={1075}
              height={700}
              src="/images/aims.jpg"
              alt="Aims"
              className="h-full w-full object-cover"
            />
          )}
          {imageIdx === 2 && (
            <Image
              width={1075}
              height={700}
              src="/images/presidents.jpg"
              alt="Presidents"
              className="h-full w-full object-cover"
            />
          )}
          {imageIdx === 3 && (
            <Image
              width={1075}
              height={700}
              src="/images/timeline.jpg"
              alt="Timeline"
              className="h-full w-full object-cover"
            />
          )}
        </motion.div>
      </div>
      <div className="px-36 pt-24">
        <h2 className="flex flex-col gap-2">
          <div className="text-3xl font-medium xl:text-4xl">
            Afican Students Association
          </div>
          <div className="text-3xl font-medium xl:text-4xl">in Denizli</div>
        </h2>
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
          className="lg:mt-6 lg:max-w-[28rem] lg:text-xl xl:mt-16 xl:max-w-[32rem] xl:text-2xl"
        />
      </div>
    </>
  );
};

export default WelcomeLargeDescription;
