import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/project.module.css";
import imgWebshop from "../../../public/images/webshop.png";
import imgNext from "../../../public/images/nextjs.png";
import imgReact from "../../../public/images/reactjs.png";
import imgJS from "../../../public/images/javascript.png";
import { CREEP_EVENTS } from "../../reducers/creepReducer";
import useCreep from "../../lib/hooks/useCreep";
import { useEffect, useState, useRef } from "react";

export default function Webshop() {
  const creep = useCreep();

  useEffect(() => {
    if (creep.creep.currentIndex !== 11) {
      creep.creepDispatch({
        payload: {
          currentIndex: 11,
          currentPage: "Webshop",
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
        <title>Web Shop</title>
        <link rel="icon" href="/pages/favicon.ico" />
      </Head>
      <div
        className="main"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <a href="https://isthisthereallife.github.io/Webshop">
          <div width="680" height="520" className={styles.project_image_div}>
            <Image
              className={styles.project_image}
              src={imgWebshop}
              alt="Screen capture from the web shop"
            />
          </div>
        </a>
        <div className={styles.infoText} id={styles.gilfoyleInfo}>
          <h4>Mock web shop </h4>
          <span>Features</span>
          <ul className={styles.list_lefty}>
            <li className={styles.list_item}>External API calls</li>
            <li className={styles.list_item}>Parameterized lookups</li>
            <li className={styles.list_item}>Dynamic page generation</li>
            <li className={styles.list_item}>Context-based shopping cart</li>
            <li className={styles.list_item}>Very generous search algorithm</li>
          </ul>
          <div>
            Written in{" "}
            <a href="https://www.javascript.com">
              <Image
                className={styles.inlineLogo}
                src={imgJS}
                height="45px"
                width="45px"
                alt="JavaScript logo"
              />
            </a>{" "}
            with{" "}
            <a href="https://reactjs.org/">
              <Image
                className={styles.inlineLogo}
                src={imgReact}
                height="45px"
                width="45px"
                alt="React Logo"
              />
            </a>{" "}
            and{" "}
            <a href="https://nextjs.org/">
              <Image
                className={styles.inlineLogo}
                src={imgNext}
                height="45px"
                width="70px"
                alt="Next.js Logo"
              />
            </a>
          </div>
          <div className={styles.project_links}>
            <br />
            <a href="https://isthisthereallife.github.io/Webshop">try it out</a>
            <br />
            <a href="https://github.com/isthisthereallife/Webshop">
              source code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}