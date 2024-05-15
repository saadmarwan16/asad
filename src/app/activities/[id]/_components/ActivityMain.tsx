"use client";

import { type FunctionComponent } from "react";
import styles from "@asad/styles/activities/details.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { type TActivity } from "@asad/server/db/schema/activities";
import dayjs from "dayjs";

interface ActivityMainProps {
  activity: TActivity;
}

const ActivityMain: FunctionComponent<ActivityMainProps> = ({
  activity: { name, images, description, location, city, sponsors, date },
}) => {
  return (
    <main
      className={`${styles.main} bg-base-200 px-5 py-12 sm:px-12 sm:py-14 md:px-16 md:py-16 lg:px-28`}
    >
      <h5 className={`${styles.title} text-primary-200`}>{name}</h5>
      <div className={`${styles.socials} flex flex-col gap-2`}>
        <span className="text-content-100">Share on socials</span>
        <div className="flex gap-2 text-2xl">
          <Link
            href="https://www.facebook.com/pauasadafrika"
            target="_blank"
            className="text-primary-200 hover:text-primary-100"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://www.instagram.com/asadafrika/"
            target="_blank"
            className="text-primary-200 hover:text-primary-100"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/in/asad-afrika-8515b5119/"
            target="_blank"
            className="text-primary-200 hover:text-primary-100"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
      <div className={`${styles.imageContainer}`}>
        <Carousel showThumbs={false} infiniteLoop={false}>
          {images.map((image) => (
            <div key={image} className="relative aspect-video">
              <Image alt="Image of about" fill objectFit="cover" src={image} />
            </div>
          ))}
        </Carousel>
      </div>
      <p className={`${styles.description} text-gray-600`}>{description}</p>
      <div className={`${styles.details} flex flex-col gap-3 text-content-200`}>
        <span className={`${styles.detail} font-light`}>
          <span className="font-medium text-primary-200">LOCATION:</span>{" "}
          {location}
        </span>
        <span className={`${styles.detail} font-light`}>
          <span className="font-medium text-primary-200">CITY:</span> {city}
        </span>
        <span className={`${styles.detail} font-light`}>
          <span className="font-medium text-primary-200">SPONSORS:</span>
          {sponsors.map((sponsor) => (
            <span key={sponsor} className="font-light">
              {" "}
              {sponsor},{" "}
            </span>
          ))}
        </span>
        <span className={`${styles.detail} font-light`}>
          <span className="font-medium text-primary-200">DATE:</span>{" "}
          {dayjs(date).format("MMMM DD, YYYY")}
        </span>
      </div>
    </main>
  );
};

export default ActivityMain;
