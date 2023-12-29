import { about } from "@asad/lib/data/home/about";
import styles from "@asad/styles/home/about.module.css";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import AboutDivider from "./AboutDivider";

const About = () => {
  return (
    <section
      id="about"
      className="bg-base-100 px-5 pb-4 pt-12 text-content-200 sm:px-8 md:px-10 lg:px-12 lg:py-0"
    >
      <div className="relative sm:mx-4 sm:px-4 md:mx-8 md:px-8">
        <h4 className="max-[767]:text-2xl font-medium max-[639px]:text-xl lg:absolute lg:z-[1] lg:mt-14 lg:max-w-[750px]">
          Quidem quisquam blanditiis, doloremque similique optio dolorum non nam
          expedita, voluptates, dolor qui placeat minus nulla laboriosam sequi
          id veniam enim commodi?
        </h4>
        <div
          className={`${styles.details} flex flex-col gap-6 py-10 lg:flex-row lg:gap-0 lg:py-0`}
        >
          <AboutDivider />
          {about.map((detail, index) => (
            <>
              <Link
                href={detail.url}
                className={`${styles.detailLink} relative z-[2]`}
              >
                <div
                  className={styles.detailImage}
                  data-image={detail.image}
                  style={{ backgroundImage: `url(${detail.image})` }}
                >
                  <div className={styles.detailImageOverlay}></div>
                </div>
                <div
                  key={index}
                  className={`${styles.detail} lg:h-screen lg:px-4`}
                >
                  <span className="text-2xl font-light text-primary-200 sm:text-3xl md:text-4xl">
                    {detail.number}
                  </span>
                  <div
                    className={`${styles.detailTitle} ml-1 sm:ml-2 md:ml-3 lg:ml-0`}
                  >
                    <h3 className="font-semibold text-primary-200">
                      {detail.title}
                    </h3>
                  </div>
                  <IoIosArrowRoundForward className="text-4xl text-primary-400 lg:hidden" />
                  <p className="lg:mt-3">{detail.details}</p>
                </div>
              </Link>
              <AboutDivider />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
