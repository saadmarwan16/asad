import styles from "@asad/styles/shared/footer.module.css";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Logo from "./Logo";
import { Routes } from "../routes";
import dayjs from "dayjs";

const Footer = () => {
  return (
    <footer className="bg-primary-400 px-5 py-12 text-base-100 sm:px-8 md:px-10 md:py-14 lg:px-12">
      <div id={styles.footer} className="sm:mx-4 sm:px-4 md:mx-8 md:px-8">
        <a id={styles.logo} href={Routes.HOME} className="inline-block w-fit">
          <Logo className="w-24 sm:w-28 md:w-32" />
        </a>
        <div id={styles.address} className="max-w-64 lg:text-center">
          Çamlaraltı, Kınıklı Yerleşkesi, Üniversite Cd. No:11, Pamukkale,
          Turkey, Denizli 20160
        </div>
        <div id={styles.socials} className="flex flex-col gap-2">
          <small className="text-primary-100">Stay connected</small>
          <div className="flex gap-2 text-2xl">
            <Link
              href="https://www.facebook.com/pauasadafrika"
              target="_blank"
              className="hover:text-primary-100"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/asadafrika/"
              target="_blank"
              className="hover:text-primary-100"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/in/asad-afrika-8515b5119/"
              target="_blank"
              className="hover:text-primary-100"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
        <small id={styles.copyright} className="x-small">
          © 2015-{dayjs().year()}{" "}
          <a href={Routes.HOME} className="hover:text-primary-100">
            ASAD.
          </a>{" "}
          All rights reserved.
        </small>
        <span id={styles.me}>
          Made with lots of{" "}
          <FaHeart
            className={`${styles.love} mx-1 inline-block text-red-600 md:mx-2`}
          />{" "}
          by
          <Link
            href="https://www.marwansaad.me/"
            target="_blank"
            className="ml-2 text-primary-200 hover:text-primary-100"
          >
            Yours truly
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
