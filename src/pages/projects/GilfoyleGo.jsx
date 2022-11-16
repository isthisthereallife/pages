import styles from "../../styles/project.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import imgGilfoyle from "../../../public/images/gilfoyle.png";
import imgBootstrap from "../../../public/images/bootstrap.png";
import imgHtml5 from "../../../public/images/html5.png";
import imgJava from "../../../public/images/java.png";
import imgMysql from "../../../public/images/mysql.png";
import imgSpring from "../../../public/images/spring.png";
import imgVue from "../../../public/images/vuejs2.png";
import { CREEP_EVENTS } from "../../reducers/creepReducer";
import useCreep from "../../lib/hooks/useCreep";
import { useEffect, useRef } from "react";
import Head from "next/head";

export default function GilfoyleGo() {
  const creep = useCreep();
  useEffect(() => {
    if (creep.creep.currentIndex !== 15) {
      creep.creepDispatch({
        payload: {
          currentIndex: 15,
          currentPage: "Gilfoyle Go",
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
      router.push("/projects/Audioplayer");
    } else if (isRightSwipe) {
      router.push("/projects/Pokertimer");
    }
  };

  useEffect(() => {
    const onKeyUp = (e) => {
      if (e.code === "ArrowRight") {
        router.push("/projects/Audioplayer");
      } else if (e.code === "ArrowLeft") {
        router.push("/projects/Pokertimer");
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
        <title>Gilfoyle Go - Spring Boot, Vue, MySQL</title>
        <link rel="icon" href="/pages/favicon.ico" />
      </Head>
      <div
        className="main"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={styles.project_image_div}
          width="600"
          height="400"
          id={styles.gilfoylego_div}
        >
          <Image className={styles.project_image} src={imgGilfoyle} />
        </div>
        <div className={styles.infoText} id={styles.gilfoyleInfo}>
          <h4>Mock hotel booking app.</h4>
          <span id={styles.features_pill}>Features</span>
          <ul className={styles.list_lefty}>
            <li className={styles.list_item}>Spring Boot Backend</li>
            <li className={styles.list_item}>Vue Frontend</li>
            <li className={styles.list_item}>MySQL Database</li>
          </ul>
          <br />
          <div>
            <a href="https://www.java.com">
              <Image src={imgJava} alt="Java" height="40" width="40" />
            </a>
            <a href="https://spring.io/projects/spring-boot">
              <Image src={imgSpring} height="40" width="40" />
            </a>
            <a href="https://vuejs.org/">
              <Image src={imgVue} height="40" width="40" />
            </a>
            <a href="https://getbootstrap.com/">
              <Image src={imgBootstrap} height="40" width="40" />
            </a>
            <a href="https://www.mysql.com/">
              <Image src={imgMysql} height="40" width="40" />
            </a>
            <a href="https://www.w3schools.com/html/">
              <Image src={imgHtml5} height="40" width="40" />
            </a>
          </div>

          <br />
          <div className={styles.project_links}>
            <a href="https://github.com/isthisthereallife/Hotel-Booking-App">
              source code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
