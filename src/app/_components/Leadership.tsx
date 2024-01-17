import { Routes } from "@asad/lib/routes";
import styles from "@asad/styles/home/leadership.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const Leadership = () => {
  return (
    <section id="leadership" className="text-base-100">
      <div id={styles.leadership} className="">
        <div className="overflow-hidden md:hidden">
          <svg
            className="h-full w-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-183.3 17.8 417 577.1"
          >
            <path
              fill="#005226"
              d="M-183.3 595V391.7c0-24.6 20.7-47.7 38.2-65.1s40.5-27 65.1-27h213.8c26.8 0 48.6-21.9 48.6-48.6V18h-365.7v577z"
            ></path>
            <path
              fill="#002913"
              d="M214.7 17.8h-43.5v221.9c.3 26.7-21.3 48.4-48.6 48.6H-91.2c-24.6 0-47.7 9.6-65.1 27s-27 40.5-27 65.1v214.4h62.5V390.5c0-13 5-25.2 14.3-34.4 9.2-9.2 21.4-14.3 34.4-14.3h183.5v-.1h30.3c50.7 0 92.1-41.4 92.1-92.1V17.8h-19.1z"
            ></path>
          </svg>
        </div>
        <div className="hidden md:block">
          <svg viewBox="0 0 1457 800" xmlns="http://www.w3.org/2000/svg">
            <g fill="none">
              <path
                fill="#005226"
                d="M0 .052h1069.5v252.457L912.39 401H534.75L389.546 571.84V802L0 801.34z"
              ></path>
              <path
                d="M869.415 459.053H658V342.23h211.415c72.086 0 130.742-58.656 130.742-130.76V.052H1117v211.415c0 136.52-111.066 247.586-247.585 247.586"
                fill="#002913"
                fillRule="nonzero"
              ></path>
              <path
                d="M445.843 801.34H329V589.923c0-66.132 25.766-128.301 72.515-175.07 46.768-46.749 108.938-72.514 175.07-72.514H788v116.843H576.585c-34.92 0-67.752 13.586-92.444 38.297-24.692 24.692-38.298 57.524-38.298 92.444V801.34z"
                fill="#002913"
                fillRule="nonzero"
              ></path>
            </g>
          </svg>
        </div>
        <div className="relative bg-opacity-30 bg-gradient-to-tl from-primary-400 via-primary-300 to-content-200">
          <div className="mix-blend-mutiply absolute bottom-0 left-0 right-0 top-0 bg-base-200 opacity-30"></div>
          <Image
            src="/images/executives.png"
            alt="About us"
            fill={true}
            className="h-full w-full mix-blend-multiply"
          />
        </div>
        <div className="h-full w-full px-6 md:px-8 lg:px-20 xl:px-28">
          <Link
            href={Routes.EXECUTIVE_TEAM}
            className="flex h-full w-full items-center justify-start md:justify-center md:hover:bg-primary-200 md:hover:bg-opacity-75"
          >
            <div className="flex w-full max-w-80 flex-col gap-2 text-left sm:gap-6 md:text-center">
              <h5 className="font-medium sm:hidden">Our executive team</h5>
              <h4 className="hidden font-medium sm:block">
                Our executive team
              </h4>
              <p>
                Their vision, expertise and dedication have propelled the
                association to excellence and new heights.
              </p>
              <span className="flex items-center justify-start gap-4 text-lg md:justify-center">
                View more
                <MdArrowForward className="text-2xl" />
              </span>
            </div>
          </Link>
        </div>
        <div className="h-full w-full px-6 md:px-8 lg:px-20 xl:px-28">
          <Link
            href="/ASAD Constitution.pdf"
            target="_blank"
            className="flex h-full w-full items-center justify-end md:justify-center md:hover:bg-primary-200 md:hover:bg-opacity-75"
          >
            <div className="flex w-full max-w-80 flex-col gap-2 text-right sm:gap-6 md:text-center">
              <h5 className="font-medium sm:hidden">Our constitution</h5>
              <h4 className="hidden font-medium sm:block">Our constitution</h4>
              <p>
                These will serve as the legal framework to ensure proper
                conduct, furthering the well-being of our members
              </p>
              <span className="flex items-center justify-end gap-4 text-lg md:justify-center">
                View more
                <MdArrowForward className="text-2xl" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
