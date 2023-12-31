import { Urls } from "@asad/lib/urls";
import styles from "@asad/styles/home/leadership.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const Leadership = () => {
  return (
    <section id="leadership" className="text-base-100">
      <div id={styles.leadership} className="">
        <div>
          <svg viewBox="0 0 1457 804" xmlns="http://www.w3.org/2000/svg">
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
        <div className="relative bg-gradient-to-tl from-primary-400 via-primary-300 to-content-200">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-base-200 opacity-20 mix-blend-lighten"></div>
          <Image
            width={1130}
            height={850}
            src="/images/timeline.jpg"
            alt="About us"
            className="h-full w-full mix-blend-darken"
          />
        </div>
        <div className="h-full w-full px-28">
          <Link
            href={Urls.EXECUTIVE_TEAM}
            className="cur flex h-full w-full items-center justify-center hover:bg-primary-200 hover:bg-opacity-75"
          >
            <div className="flex w-full max-w-80 flex-col gap-6 text-center">
              <h4 className="font-medium">Our executive team</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
                quisquam facere ad laudantium culpa, perferendis labore veniam
                asperiores.
              </p>
              <span className="flex items-center justify-center gap-4 text-lg">
                View more
                <MdArrowForward className="text-2xl" />
              </span>
            </div>
          </Link>
        </div>
        <div className="h-full w-full px-28">
          <Link
            href="#"
            className="flex h-full w-full items-center justify-center hover:bg-primary-200 hover:bg-opacity-75"
          >
            <div className="flex w-full max-w-80 flex-col gap-6 text-center">
              <h4 className="font-medium">Our constitution</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
                quisquam facere ad laudantium culpa, perferendis labore veniam
                asperiores.
              </p>
              <span className="flex items-center justify-center gap-4 text-lg">
                Download
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
