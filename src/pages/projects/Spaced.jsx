import styles from "../../styles/project.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import imgSpaced from "../../../public/images/spaced.png";
import imgPixiJS from "../../../public/images/pixijs-logo.png";
import imgJS from "../../../public/images/javascript.png";
import { CREEP_EVENTS } from "../../reducers/creepReducer";
import useCreep from "../../lib/hooks/useCreep";
import { useEffect, useRef } from "react";
import Head from "next/head";

export default function Spaced() {
  const creep = useCreep();
  useEffect(() => {
    if (creep.creep.currentIndex !== 15) {
      creep.creepDispatch({
        payload: {
          currentIndex: 15,
          currentPage: "Spaced",
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
      router.push("/projects/Murvel");
    } else if (isRightSwipe) {
      router.push("/projects/TropesBingo");
    }
  };

  useEffect(() => {
    const onKeyUp = (e) => {
      if (e.code === "ArrowRight") {
        router.push("/projects/Murvel");
      } else if (e.code === "ArrowLeft") {
        router.push("/projects/TropesBingo");
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
        <title>Spaced</title>
        <link rel="icon" href="/pages/favicon.ico" />
      </Head>
      <div
        className="main"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <a href="https://dafali.itch.io/spaced">
          <div
            className={styles.project_image_div}
            width="600"
            height="400"
            id={styles.spaced_div}
          >
            <Image className={styles.project_image} src={imgSpaced} />
          </div>
        </a>
        <div className={styles.infoText} id={styles.spacedInfo}>
          <h4>A game about being lost in space</h4>
          <span id={styles.features_pill} onClick={showFeatures}>
            About
          </span>
          <ul className={styles.list_lefty} id="features">
            <li className={styles.list_item}>Made in 10 days for <a href="https://itch.io/jam/gbjam-11">GBJam 11</a></li>
            <li className={styles.list_item}>Exciting gameplay</li>
            <li className={styles.list_item}>Pretty sprites</li>
            <li className={styles.list_item}>Adaptive music</li>
            <li className={styles.list_item}>Ranked 50 out of 2870 participants</li>
          </ul>
          <br />
          <div><a href="https://www.javascript.com">
            <Image
              className={styles.inlineLogo}
              src={imgJS}
              height="40px"
              width="40px"
              alt="JavaScript logo"
            />
          </a>
            {"  "}
            <a href="https://pixijs.com">
              <Image
                className={styles.inlineLogo}
                src={imgPixiJS}
                height="40px"
                width="40px"
                alt="PixiJS logo"
              />
            </a>
          </div>

          <br />
          <div className={styles.project_links}>
            <a href="https://isthisthereallife.itch.io/spaced-mobile">play</a>
            <a href="https://github.com/isthisthereallife/Spaced">
              source code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
