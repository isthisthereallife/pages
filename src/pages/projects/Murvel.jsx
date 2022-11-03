import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/project.module.css";
import murvelGif from "../../../public/images/murvelgif.gif";
import { CREEP_EVENTS } from "../../reducers/creepReducer";
import useCreep from "../../lib/hooks/useCreep";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Murvel() {
  const creep = useCreep();

  useEffect(() => {
    if (creep.creep.currentIndex !== 12) {
      creep.creepDispatch({
        payload: {
          currentIndex: 12,
          currentPage: "Murvel",
          currentPageType: "project",
        },
        type: CREEP_EVENTS.UPDATE,
      });
    }
  });

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Head>
        <title>Murvel - Kotlin, Gradle, Firebase</title>
        <link rel="icon" href="/pages/favicon.ico" />
      </Head>
      <div className="main">
        <div className={styles.project_image_div}>
          <Image
            className={styles.project_image}
            src={murvelGif}
            id="murvelGif"
            alt="A GIF showing the Murvel App"
            variant="top"
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8zsDwHwAEpQHoSo7vHAAAAABJRU5ErkJggg=="
          />
        </div>
        <div className={styles.infoText} id={styles.murvelInfo}>
          All the Marvel info you could possibly want, <br />
          in the palm of your hand.
          <br />
          <br />
          Features
          <ul className={styles.list_lefty}>
            <li className={styles.list_item}>
              Look up any Marvel Character or Comic Book
            </li>
            <li className={styles.list_item}>
              Find every character in a specific comic
            </li>
            <li className={styles.list_item}>
              Find every comic that a character has appeared in
            </li>
            <li className={styles.list_item}>
              Create your own personal account
            </li>
            <li className={styles.list_item}>Save your favourites</li>
            <li className={styles.list_item}>
              Send recommendations to friends
            </li>
          </ul>
          <h4>Uses Google Firebase</h4>
          <h4>Written in Kotlin.</h4>
          <h4>Made for Android devices</h4>
          <div className={styles.project_links}>
            <Link href="https://github.com/isthisthereallife/MarvellisimoApp">
              source code
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
