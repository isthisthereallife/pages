import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/project.module.css";
import imgSvtpk from "../../../public/images/svtpk2.png";
import imgJava from "../../../public/images/java.png";
import useCreep from "../../lib/hooks/useCreep";
import { CREEP_EVENTS } from "../../reducers/creepReducer";
import { useEffect, useRef } from "react";

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
      <div className="main">
        <h2 className={styles.title}>Privatkopiera från SVT</h2>
        <div width="680" height="520" className={styles.projectImageDiv}>
          <Image
            className={styles.projectImage}
            src={imgSvtpk}
            alt="Screen capture from the program SVTpk"
          />
        </div>
        <div className={styles.infoText} id={styles.gilfoyleInfo}>
          <h5>Portable application. Grapical User Interface.</h5>
          <div>
            A standalone Java application.
            <br />
            Enables downloads from SVT Play.
          </div>
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
