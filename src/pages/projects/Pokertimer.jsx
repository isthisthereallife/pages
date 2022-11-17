import styles from "../../styles/project.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import imgPoker from "../../../public/images/poker.png";
import { CREEP_EVENTS } from "../../reducers/creepReducer";
import useCreep from "../../lib/hooks/useCreep";
import { useEffect, useRef } from "react";
import Head from "next/head";

export default function Pokertimer() {
  const creep = useCreep();

  useEffect(() => {
    if (creep.creep.currentIndex !== 14) {
      creep.creepDispatch({
        payload: {
          currentIndex: 14,
          currentPage: "Pokertimer",
          currentPageType: "project",
        },
        type: CREEP_EVENTS.UPDATE,
      });
    }
  }, []);

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
      router.push("/projects/GilfoyleGo");
    } else if (isRightSwipe) {
      router.push("/projects/Webshop");
    }
  };
  useEffect(() => {
    const onKeyUp = (e) => {
      if (e.code === "ArrowRight") {
        router.push("/projects/GilfoyleGo");
      } else if (e.code === "ArrowLeft") {
        router.push("/projects/Webshop");
      }
    };
    document.addEventListener("keydown", onKeyUp);
    return () => {
      document.removeEventListener("keydown", onKeyUp);
    };
  });

  let showFeatures = (e) => {
    const f = document.getElementById("features");
    f.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Pokertimer - JS, jQuery, HTML/CSS</title>
        <link rel="icon" href="/pages/favicon.ico" />
      </Head>
      <div
        className="main"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <a
          href="https://acornsfordinner.github.io/pokertimer/"
          className={styles.main_image_a}
        >
          <div className={styles.project_image_div} id={styles.pokertimer_div}>
            <Image
              width="600px"
              height="450px"
              className={styles.project_image}
              id={styles.poker_img}
              src={imgPoker}
            />
          </div>
        </a>
        <div className={styles.infoText} id={styles.pokertimer_info}>
          <h4>Poker Timer</h4>
          <span id={styles.features_pill} onClick={showFeatures}>
            Features
          </span>
          <ul className={styles.list_lefty} id="features">
            <li className={styles.list_item}>Keep track of blinds</li>
            <li className={styles.list_item}>
              Calculate winnings based on nr of players
            </li>
            <li className={styles.list_item}>Rebuy & Addon functionality</li>
            <li className={styles.list_item}>Breaks included!</li>

            <li className={styles.list_item}>Hilarious sound effects</li>
            <li className={styles.list_item}>
              Press F11 & CTRL+scroll to resize
            </li>
            <li className={styles.list_item}>
              Don't even try using a small screen
            </li>
          </ul>
          <div className={styles.project_links}>
            <a href="https://acornsfordinner.github.io/pokertimer/">
              try it out
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
