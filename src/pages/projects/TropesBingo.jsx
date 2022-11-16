import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/project.module.css";
import tropesImg1 from "../../../public/images/tropes_square.png";
import tropesImg2 from "../../../public/images/tropes_square2.png";
import tropesImg3 from "../../../public/images/tropes1.png";
import tropesImg4 from "../../../public/images/tropes2.png";

import { CREEP_EVENTS } from "../../reducers/creepReducer";
import useCreep from "../../lib/hooks/useCreep";
import { useEffect, useState, useRef } from "react";
import Head from "next/head";

export default function Murvel() {
  const creep = useCreep();

  useEffect(() => {
    if (creep.creep.currentIndex !== 11) {
      creep.creepDispatch({
        payload: {
          currentIndex: 11,
          currentPage: "Tropes Bingo",
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
      router.push("/projects/Murvel");
    } else if (isRightSwipe) {
      router.push("/projects/SVTpk");
    }
  };
  useEffect(() => {
    const onKeyUp = (e) => {
      if (e.code === "ArrowRight") {
        router.push("/projects/Murvel");
      } else if (e.code === "ArrowLeft") {
        router.push("/projects/SVTpk");
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
        <title>Tropes Bingo</title>
        <link rel="icon" href="/pages/favicon.ico" />
      </Head>
      <div
        className="main"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <a href="http://tropes.bingo" className={styles.main_image_a}>
          <div className={styles.project_image_div} id={styles.tropesbingo_div}>
            <Image
              className={styles.project_image}
              src={tropesImg4}
              id="topes_bingo"
              alt="An image showing a 'Tropes Bingo' game board"
              variant="top"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
            />
          </div>
        </a>
        <div className={styles.infoText} id={styles.tropesbingo_info}>
          Play along whilst watching a film!
          <br />
          <br />
          <span id={styles.features_pill}>Features</span>
          <ul className={styles.list_lefty}>
            <li className={styles.list_item}>
              best domain name = <a href="http://tropes.bingo">tropes.bingo</a>
            </li>
            <li className={styles.list_item}>Look up work (i.e. a film)</li>
            <li className={styles.list_item}>Generate a bingo board</li>
            <li className={styles.list_item}>
              Watch/Read/Think about said thing
            </li>
            <li className={styles.list_item}>
              Tick the box when what is portrayed in said box happens in the
              thing you're watching/reading/thinking about
            </li>
            <li className={styles.list_item}>
              It's bingo, you know how it's done.
            </li>
          </ul>
          <h4>Written in Javascript, and some java for the backend</h4>
          <h4>
            <strong>Made for Mobile devices</strong>
          </h4>
          <div className={styles.project_links}>
            <a href="http://tropes.bingo">play</a>
          </div>
        </div>
      </div>
    </>
  );
}
