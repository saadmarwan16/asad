"use client";

import { type FunctionComponent } from "react";
import styles from "@asad/styles/activities/details.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

interface ActivityMainProps {
  title?: string;
}

const ActivityMain: FunctionComponent<ActivityMainProps> = () => {
  return (
    <main
      className={`${styles.main} bg-base-200 px-5 py-12 sm:px-12 sm:py-14 md:px-16 md:py-16 lg:px-28`}
    >
      <h5 className={`${styles.title} text-primary-200`}>ASAD Speaking Club</h5>
      <div className={`${styles.socials} flex flex-col gap-2`}>
        <span className="text-content-100">Share on social</span>
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
          <div className="relative aspect-video">
            <Image
              alt="Image of about"
              fill
              objectFit="cover"
              src="/images/about.png"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              alt="Image of about"
              fill
              objectFit="cover"
              src="/images/about.png"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              alt="Image of about"
              fill
              objectFit="cover"
              src="/images/about.png"
            />
          </div>
        </Carousel>
      </div>
      <p className={`${styles.description} text-gray-600`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        maiores ipsum quos quia earum nihil repellat repellendus iure dolor
        soluta, enim illum laudantium sint laboriosam cum, assumenda consectetur
        ratione magni.
      </p>
      <div className={`${styles.details} flex flex-col gap-3 text-content-100`}>
        <span className={`${styles.detail} font-thin`}>
          <span className="font-medium text-primary-200">LOCATION:</span> Camlik
          Park
        </span>
        <span className={`${styles.detail} font-thin`}>
          <span className="font-medium text-primary-200">CITY:</span> Denizli
        </span>
        <span className={`${styles.detail} font-thin`}>
          <span className="font-medium text-primary-200">SPONSORS:</span> Cerahi
          Hastane, Universite
        </span>
        <span className={`${styles.detail} font-thin`}>
          <span className="font-medium text-primary-200">DATE:</span> 20th May,
          2023
        </span>
      </div>
    </main>
  );
};

export default ActivityMain;
