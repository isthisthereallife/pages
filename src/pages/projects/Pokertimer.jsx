import styles from "../../styles/project.module.css";
import Link from "next/link";
import Image from "next/image";
import imgPoker from "../../../public/images/poker.png";
import { CREEP_EVENTS } from "../../reducers/creepReducer";
import useCreep from "../../lib/hooks/useCreep";
import { useEffect } from "react";
import Head from "next/head";

export default function Pokertimer() {
  const creep = useCreep();

  useEffect(() => {
    if (creep.creep.currentIndex !== 11) {
      creep.creepDispatch({
        payload: {
          currentIndex: 11,
          currentPage: "Pokertimer",
          currentPageType: "project",
        },
        type: CREEP_EVENTS.UPDATE,
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Pokertimer - JS, jQuery, HTML/CSS</title>
      </Head>
      <div className="main">
        <div className={styles.project_image_div}>
          <Link href="https://acornsfordinner.github.io/pokertimer/">
            <Image
              width="600px"
              height="450px"
              className={styles.project_image}
              id={styles.poker_img}
              src={imgPoker}
            />
          </Link>
        </div>
        <div className={styles.project_links}>
          <Link href="https://acornsfordinner.github.io/pokertimer/">
            <div>
              <button className={styles.playBtn}>Start</button>
              <div>(Works best on desktop)</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
