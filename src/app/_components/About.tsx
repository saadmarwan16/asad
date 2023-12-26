import { about } from "@asad/lib/data/home/about";
import styles from "@asad/styles/home/about.module.css";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import AboutDivider from "./AboutDivider";

const About = () => {
  return (
    <section className="bg-[#FCFCFC] px-5 pb-4 pt-12 text-[#0A0A0A] sm:px-8 md:px-10 lg:px-12 lg:py-0">
      <div className="relative sm:mx-4 sm:px-4 md:mx-8 md:px-8">
        <h3 className="text-xl font-medium sm:text-2xl md:text-3xl lg:absolute lg:z-[1] lg:mt-14 lg:max-w-[600px]">
          Quidem quisquam blanditiis, doloremque similique optio dolorum non nam
          expedita, voluptates, dolor qui placeat minus nulla laboriosam sequi
          id veniam enim commodi?
        </h3>
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
                  <span className="text-2xl font-light text-[#007B3A] sm:text-3xl md:text-4xl">
                    {detail.number}
                  </span>
                  <div
                    className={`${styles.detailTitle} ml-1 sm:ml-2 md:ml-3 lg:ml-0`}
                  >
                    <h3 className="text-2xl font-semibold text-[#007B3A] sm:text-3xl md:text-4xl">
                      {detail.title}
                    </h3>
                  </div>
                  <IoIosArrowRoundForward className="text-4xl text-[#002913] lg:hidden" />
                  <p className="text-sm sm:text-base">{detail.details}</p>
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
