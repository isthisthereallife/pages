import styles from "../../styles/project.module.css";
import projectImage from "../../../public/images/audioplayer.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import useCreep from "../../lib/hooks/useCreep";
import { CREEP_EVENTS } from "../../reducers/creepReducer";
import Head from "next/head";

export default function Audioplayer() {
  let creep = useCreep();
  useEffect(() => {
    if (creep.creep.currentIndex !== 15) {
      creep.creepDispatch({
        payload: {
          currentIndex: 15,
          currentPage: "Audioplayer",
          currentPageType: "project",
        },
        type: CREEP_EVENTS.UPDATE,
      });
    }
  });

  return (
    <>
      <Head>
        <title>Audioplayer - JS, jQuery, HTML/CSS</title>
        <link rel="icon" href="/pages/favicon.ico" />
      </Head>
      <div className="main">
        <Link href="https://acornsfordinner.github.io/musikspelare/">
          <div className={styles.project_image_div}>
            <Image className={styles.project_image} src={projectImage} />
          </div>
        </Link>
        <div className={styles.infoText} id={styles.gilfoyleInfo}>
          <h4>A somewhat responsive audio player made with jQuery</h4>
          <br />
          Features
          <ul className={styles.list_lefty}>
            <li className={styles.list_item}>
              An example of my humble beginnings
            </li>
            <li className={styles.list_item}>
              This one's really not that great tbh
            </li>
            <li className={styles.list_item}>
              I do like the colour scheme, tho
            </li>
            <li className={styles.list_item}>But seriously </li>
            <li className={styles.list_item}>
              Please check out my other projects instead
            </li>
          </ul>
          <div className={styles.project_links}>
            <Link href="https://acornsfordinner.github.io/musikspelare/">
              try it out
            </Link>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
