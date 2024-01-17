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
        opacity: [1, 0.8],
        transition: { duration: 0.5 },
      });

      void control.start({
        opacity: [0.8, 1],
        transition: { duration: 0.5 },
      });
    };

    changeSliderImageIdx();

    return () => {
      control.stop();
    };
  }, [imageIdx]);

  return (
    <>
      <div className="h-full overflow-hidden">
        <motion.div
          className={`${styles.slider} h-full overflow-hidden`}
          animate={control}
        >
          <Image
            width={1075}
            height={700}
            src="/images/positive_culture.png"
            alt="People wearing African cultural clothes at an event"
            priority
            className={`${
              imageIdx !== 0 && "hidden"
            } h-full w-full object-cover`}
          />
          <Image
            width={1075}
            height={700}
            src="/images/bridging_cultures.jpg"
            alt="A study group of people learning English speaking"
            priority
            className={`${
              imageIdx !== 1 && "hidden"
            } h-full w-full object-cover`}
          />
          <Image
            width={1075}
            height={700}
            src="/images/togetherness.jpg"
            alt="Fifteen guys wearing a football jersey preparing to start a football match"
            priority
            className={`${
              imageIdx !== 2 && "hidden"
            } h-full w-full object-cover`}
          />
          <Image
            width={1075}
            height={700}
            src="/images/transition.jpg"
            alt="About 20 people on a fun tour"
            priority
            className={`${
              imageIdx !== 3 && "hidden"
            } h-full w-full object-cover`}
          />
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
            "We bridge the gap between the African and Turkish cultures",
            3000,
            () => setImageIdx(2),
            "We propagate the spirit of togetherness",
            3000,
            () => setImageIdx(3),
            "We integrate our new members into the Turkish society",
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
