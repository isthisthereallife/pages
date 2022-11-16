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
    if (creep.creep.currentIndex !== 13) {
      creep.creepDispatch({
        payload: {
          currentIndex: 13,
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
      router.push("/projects/Pokertimer");
    } else if (isRightSwipe) {
      router.push("/projects/Murvel");
    }
  };
  useEffect(() => {
    const onKeyUp = (e) => {
      if (e.code === "ArrowRight") {
        router.push("/projects/Pokertimer");
      } else if (e.code === "ArrowLeft") {
        router.push("/projects/Murvel");
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
        <a
          href="https://isthisthereallife.github.io/Webshop"
          className={styles.main_image_a}
        >
          <div
            width="680"
            height="520"
            className={styles.project_image_div}
            id={styles.webshop_div}
          >
            <Image
              className={styles.project_image}
              src={imgWebshop}
              alt="Screen capture from the web shop"
            />
          </div>
        </a>
        <div className={styles.infoText} id={styles.webshop_info}>
          <h4>Mock web shop </h4>
          <span>Features</span>
          <ul className={styles.list_lefty}>
            <li className={styles.list_item}>External API calls</li>
            <li className={styles.list_item}>Parameterized lookups</li>
            <li className={styles.list_item}>Dynamic page generation</li>
            <li className={styles.list_item}>Context-based shopping cart</li>
            <li className={styles.list_item}>Very generous search algorithm</li>
          </ul>
          <div>Written in JavaScript with React and Next.js</div>
          <div>
            <a href="https://www.javascript.com">
              <Image
                className={styles.inlineLogo}
                src={imgJS}
                height="40px"
                width="40px"
                alt="JavaScript logo"
              />
            </a>
            {"  "}
            <a href="https://reactjs.org/">
              <Image
                className={styles.inlineLogo}
                src={imgReact}
                height="40px"
                width="40px"
                alt="React Logo"
              />
            </a>
            {"  "}
            <a href="https://nextjs.org/">
              <Image
                className={styles.inlineLogo}
                src={imgNext}
                height="40px"
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
