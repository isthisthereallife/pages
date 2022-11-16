import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/project.module.css";
import murvelGif from "../../../public/images/murvelgif.gif";
import imgKotlin from "../../../public/images/kotlin.png";
import { CREEP_EVENTS } from "../../reducers/creepReducer";
import useCreep from "../../lib/hooks/useCreep";
import { useEffect, useState, useRef } from "react";
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

  const touchStart = useRef();
  const touchEnd = useRef();
  const threshold = 50;
  const router = useRouter();
  const onTouchStart = (event) => {
    touchEnd.current = null;
    touchStart.current = event.targetTouches[0].clientX;
  };
  const onTouchMove = (event) => {
    touchEnd.current = event.targetTouches[0].clientX;
  };
  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const dist = touchStart.current - touchEnd.current;
    const isLeftSwipe = dist > threshold;
    const isRightSwipe = dist < -threshold;
    if (isLeftSwipe) {
      router.push("/projects/Webshop");
    } else if (isRightSwipe) {
      router.push("/projects/TropesBingo");
    }
  };
  useEffect(() => {
    const onKeyUp = (e) => {
      if (e.code === "ArrowRight") {
        router.push("/projects/Webshop");
      } else if (e.code === "ArrowLeft") {
        router.push("/projects/TropesBingo");
      }
    };
    document.addEventListener("keydown", onKeyUp);
    return () => {
      document.removeEventListener("keydown", onKeyUp);
    };
  });
  return (
    <>
      <Head>
        <title>Murvel - Kotlin, Gradle, Firebase</title>
        <link rel="icon" href="/pages/favicon.ico" />
      </Head>
      <div
        className="main"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className={styles.project_image_div} id={styles.murvel_div}>
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
              Create your own personal account
            </li>
            <li className={styles.list_item}>Save your favourites</li>

            <li className={styles.list_item}>
              Send recommendations to friends
            </li>
            <li className={styles.list_item}>
              Offline mode (uses{" "}
              <strong>
                <a className={styles.murvel_link} href="https://realm.io/">
                  Realm
                </a>
              </strong>{" "}
              for caching)
            </li>
            <li className={styles.list_item}>
              Uses{" "}
              <strong>
                <a
                  className={styles.murvel_link}
                  href="https://firebase.google.com/"
                >
                  Firebase
                </a>
              </strong>{" "}
              for user interactions
            </li>
          </ul>
          <h4>
            Written in Kotlin{" "}
            <a href="https://kotlinlang.org">
              <Image
                className={styles.inlineLogo}
                src={imgKotlin}
                height="40px"
                width="40px"
                alt="Kotlin Logo"
              />
            </a>
          </h4>
          <h4>Made for Android devices</h4>
          <div className={styles.project_links}>
            <a href="https://github.com/isthisthereallife/MarvellisimoApp/releases/tag/Releases">
              download apk
            </a>
            <a href="https://github.com/isthisthereallife/MarvellisimoApp">
              source code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
