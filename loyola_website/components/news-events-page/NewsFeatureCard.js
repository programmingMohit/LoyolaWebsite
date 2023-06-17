import React from "react";
import Image from "next/image";
import styles from "../../styles/news-events-page.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const NewsFeatureCard = ({
  id,
  image,
  title,
  description,
  longdescription,
  imagefolder,
  eventroute,
}) => {
  const eventlink = `/news_events/${id}`;
  return (
    <div className={`${styles.cardcontainer} my-4`}>
      {/* Image */}
      <div className={`${styles.eventimage} odd:float-right`}>
        <Image
          src={image}
          alt="News"
          className={`${styles.image} rounded-lg`}
        />
      </div>

      {/* Content */}
      <div className={`${styles.eventinfo} rounded-2xl ${inter.className}`}>
        <h3 className="text-xl text-blue-700 text-center font-bold mb-4">
          {title}
        </h3>
        <div className="text-gray-600">{description}</div>
        <Link
          href={`/news_events/${eventroute}`}
          className="relative  right-0 bottom-0 text-gray-600 font-semibold"
        >
          read more..
        </Link>
      </div>
    </div>
  );
};

export default NewsFeatureCard;
