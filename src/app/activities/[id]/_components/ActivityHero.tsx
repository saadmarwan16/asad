import Hamburger from "@asad/lib/components/Hamburger";
import { Logo } from "@asad/lib/components/Header";
import { type TActivity } from "@asad/server/db/schema/activities";
import styles from "@asad/styles/activities/details.module.css";
import Image from "next/image";
import { type FunctionComponent } from "react";

interface ActivityHeroProps {
  activity: TActivity;
}

const ActivityHero: FunctionComponent<ActivityHeroProps> = ({
  activity: { images, name, genres },
}) => {
  return (
    <>
      <section className="min-h-[400px] flex-grow bg-base-100 px-5 text-2xl lg:relative lg:-z-20 lg:h-screen">
        <div
          id={styles.hero}
          className="-mx-5 min-h-[400px] w-screen text-base-100 lg:fixed lg:h-full lg:w-full"
        >
          <header
            className={`${styles.header} text-md z-50 flex h-20 items-center justify-between px-4 sm:h-24 lg:hidden`}
          >
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
              src={
                images.length > 0 && images[0]
                  ? images[0]
                  : "/images/bridging_cultures.jpg"
              }
              alt={name}
              fill
              objectFit="cover"
              priority
            />
          </div>

          <div
            className={`${styles.textContainer} z-10 mb-16 mt-32 flex flex-col gap-12 px-4 md:mb-24 lg:mt-40 lg:pl-20 lg:pr-0`}
          >
            <h4 className={`${styles.title} grow`}>{name}</h4>

            <div
              className={`${styles.genres} flex flex-wrap gap-2 text-primary-400`}
            >
              {genres.map((genre) => (
                <small
                  key={genre}
                  className="bg-primary-100 px-4 py-0 uppercase"
                >
                  {genre}
                </small>
              ))}
              {/* <small className="bg-primary-100 px-4 py-0 uppercase">
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
              <small className="bg-primary-100 px-4 py-0 uppercase">
                Inter-racial
              </small> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivityHero;
