import Link from "next/link";
import Image from "next/image";
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
          currentPage: "SVT pk",
          currentPageType: "project",
        },
        type: CREEP_EVENTS.UPDATE,
      });
    }
  });

  return (
    <>
      <Head>
        <title>SVTpk - Privatkopiera från SVT Play</title>
        <link rel="icon" href="/pages/favicon.ico" />
      </Head>
      <div className="main">
        <h2 className={styles.title}>Privatkopiera från SVT Play</h2>
        <div width="680" height="520" className={styles.project_image_div}>
          <Image
            className={styles.project_image}
            src={imgSvtpk}
            alt="Screen capture from the program SVTpk"
          />
        </div>
        <div className={styles.infoText} id={styles.gilfoyleInfo}>
          <span>Features</span>
          <ul className={styles.list_lefty}>
            <li className={styles.list_item}>
              Enables downloads from SVT Play
            </li>
            <li className={styles.list_item}>Graphical User Interface</li>
            <li className={styles.list_item}>Standalone Java application</li>
            <li className={styles.list_item}>Fully Portable</li>
          </ul>
          <div>
            Written in
            <Link href="https://www.java.com">
              <Image
                className={styles.inlineLogo}
                src={imgJava}
                height="45px"
                width="45px"
                alt="Java logo"
              />
            </Link>{" "}
            with JavaFX
          </div>
          <div className={styles.project_links}>
            <br />
            <Link href="https://isthisthereallife.github.io/svtpk/">
              download
            </Link>
            <br />
            <Link href="https://github.com/isthisthereallife/svtpk">
              source code
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
