import Hamburger from "@asad/lib/components/Hamburger";
import { Logo } from "@asad/lib/components/Header";
import styles from "@asad/styles/activities/details.module.css";
import Image from "next/image";

const ActivityHero = () => {
  return (
    <>
      <section className="lg:relative lg:-z-20 lg:h-screen flex-grow bg-base-100 px-5 text-2xl">
        <div
          id={styles.hero}
          className="-mx-5 lg:h-full w-screen lg:w-full text-base-100 lg:fixed"
        >
          <header className={`${styles.header} z-50 text-md flex h-20 items-center justify-between px-4 sm:h-24 lg:hidden`}>
            <div className="flex items-center">
              <Logo />
            </div>
            <div>
              <Hamburger />
            </div>
          </header>

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
            className={`${styles.textContainer} z-10 mb-16 mt-24 sm:mt-28 md:mt-32 lg:mt-40 flex flex-col gap-12 px-4 md:mb-24 lg:pl-20 lg:pr-0`}
          >
            <h4 className={`${styles.title} grow`}>ASAD Speaking Club</h4>

            <h2
              className={`${styles.slogan} font-semibold leading-10 md:leading-[3rem]`}
            >
              Come let's speak English together
            </h2>

            <div
              className={`${styles.genres} flex flex-wrap gap-2 text-primary-400`}
            >
              <small className="bg-primary-100 px-4 py-0 uppercase">
                Speaking
              </small>
              <small className="bg-primary-100 px-4 py-0 uppercase">
                English
              </small>
              <small className="bg-primary-100 px-4 py-0 uppercase">
                Community
              </small>
              <small className="bg-primary-100 px-4 py-0 uppercase">
                Inter-racial
              </small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivityHero;
