import styles from "../../styles/project.module.css";
import projectImage from "../../../public/images/audioplayer.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import useCreep from "../../lib/hooks/useCreep";
import { CREEP_EVENTS } from "../../reducers/creepReducer";
import Head from "next/head";

export default function Audioplayer() {
  let creep = useCreep();
  useEffect(() => {
    if (creep.creep.currentIndex !== 16) {
      creep.creepDispatch({
        payload: {
          currentIndex: 16,
          currentPage: "Audioplayer",
          currentPageType: "project",
        },
        type: CREEP_EVENTS.UPDATE,
      });
    }
  });

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
      router.push("/projects/SVTpk");
    } else if (isRightSwipe) {
      router.push("/projects/GilfoyleGo");
    }
  };

  useEffect(() => {
    const onKeyUp = (e) => {
      if (e.code === "ArrowRight") {
        router.push("/projects/SVTpk");
      } else if (e.code === "ArrowLeft") {
        router.push("/projects/GilfoyleGo");
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
        <title>Audioplayer - JS, jQuery, HTML/CSS</title>
        <link rel="icon" href="/pages/favicon.ico" />
      </Head>
      <div
        className="main"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <a
          href="https://acornsfordinner.github.io/musikspelare/"
          className={styles.main_image_a}
        >
          <div className={styles.project_image_div} id={styles.audioplayer_div}>
            <Image className={styles.project_image} src={projectImage} />
          </div>
        </a>
        <div className={styles.infoText} id={styles.audioplayer_info}>
          <h4>A somewhat responsive audio player made with jQuery</h4>
          <span id={styles.features_pill}>Features</span>
          <ul className={styles.list_lefty}>
            <li className={styles.list_item}>
              An example of my humble beginnings
            </li>
            <li className={styles.list_item}>
              This one's really not that great tbh
            </li>
            <li className={styles.list_item}>It is developed Mobile First</li>
            <li className={styles.list_item}>
              And I do like the colour scheme
            </li>
            <li className={styles.list_item}>But seriously </li>
            <li className={styles.list_item}>
              Please check out <Link href="/projects">my other projects</Link>{" "}
              instead
            </li>
          </ul>
          <div className={styles.project_links}>
            <a href="https://acornsfordinner.github.io/musikspelare/">
              try it out
            </a>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
