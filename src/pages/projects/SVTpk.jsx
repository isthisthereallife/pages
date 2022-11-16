import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/project.module.css";
import imgSvtpk from "../../../public/images/svtpk2.png";
import imgJava from "../../../public/images/java.png";
import useCreep from "../../lib/hooks/useCreep";
import { CREEP_EVENTS } from "../../reducers/creepReducer";
import { useEffect, useRef } from "react";
import Head from "next/head";

export default function SVTpk() {
  const creep = useCreep();

  useEffect(() => {
    if (creep.creep.currentIndex !== 10) {
      creep.creepDispatch({
        payload: {
          currentIndex: 10,
          currentPage: "SVTpk",
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
      router.push("/projects/TropesBingo");
    } else if (isRightSwipe) {
      router.push("/projects/Audioplayer");
    }
  };
  useEffect(() => {
    const onKeyUp = (e) => {
      if (e.code === "ArrowRight") {
        router.push("/projects/TropesBingo");
      } else if (e.code === "ArrowLeft") {
        router.push("/projects/Audioplayer");
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
        <title>SVTpk - Privatkopiera från SVT Play</title>
        <link rel="icon" href="/pages/favicon.ico" />
      </Head>
      <div
        className="main"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <a
          href="https://isthisthereallife.github.io/svtpk/"
          className={styles.main_image_a}
        >
          <div
            width="680"
            height="520"
            className={styles.project_image_div}
            id={styles.svtpk_div}
          >
            <Image
              className={styles.project_image}
              src={imgSvtpk}
              alt="Screen capture from the program SVTpk"
            />
          </div>
        </a>

        <div className={styles.infoText} id={styles.gilfoyleInfo}>
          <h2 className={styles.title}>Privatkopiera från SVT Play</h2>
          <span>Features</span>
          <ul className={styles.list_lefty}>
            <li className={styles.list_item}>
              <strong>Enables downloads from SVT Play</strong>
            </li>
            <li className={styles.list_item}>Graphical User Interface</li>
            <li className={styles.list_item}>Standalone Java application</li>
            <li className={styles.list_item}>Fully Portable</li>
          </ul>
          <div>Written in Java with JavaFX</div>
          <div>
            <a href="https://www.java.com">
              <Image
                className={styles.inlineLogo}
                src={imgJava}
                height="40px"
                width="40px"
                alt="Java logo"
              />
            </a>
          </div>
          <div className={styles.project_links}>
            <br />
            <a href="https://isthisthereallife.github.io/svtpk/">download</a>
            <br />
            <a href="https://github.com/isthisthereallife/svtpk">source code</a>
          </div>
        </div>
      </div>
    </>
  );
}
