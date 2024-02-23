import styles from "@asad/styles/activities/details.module.css";
import Image from "next/image";

const ActivityHero = () => {
  return (
    <>
      <section className="relative -z-20 h-screen bg-base-100 px-5 text-2xl">
        <div
          id={styles.hero}
          className="fixed -mx-5 !h-full w-full text-base-100"
        >
          <div
            className={`${styles.imageContainer} relative h-full w-full overflow-hidden`}
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-black bg-opacity-35"></div>
            <Image
              src="/images/bridging_cultures.jpg"
              alt="A study group of people learning English speaking"
              fill
              objectFit="cover"
              priority
            />
          </div>

          <div
            className={`${styles.textContainer} z-10 mt-40 px-12 md:pl-20 md:pr-0 flex flex-col gap-8 sm:gap-10 md:gap-12 mb-16 md:mb-24`}
          >
            <h4 className={`${styles.title} grow`}>ASAD Speaking Club</h4>

            <h2 className={`${styles.slogan} font-semibold leading-10 md:leading-[3rem]`}>
              Come let's speak English together
            </h2>

            <div className={`${styles.genres} flex flex-wrap gap-2 text-primary-400`}>
              <small className="bg-primary-100 px-4 py-0 uppercase">Speaking</small>
              <small className="bg-primary-100 px-4 py-0 uppercase">English</small>
              <small className="bg-primary-100 px-4 py-0 uppercase">Community</small>
              <small className="bg-primary-100 px-4 py-0 uppercase">Inter-racial</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivityHero;
