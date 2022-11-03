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
    if (creep.creep.currentIndex !== 14) {
      creep.creepDispatch({
        payload: {
          currentIndex: 14,
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
        <link rel="icon" href="/pages/favicon.ico" />
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
        <div className={styles.infoText} id={styles.gilfoyleInfo}>
          <h4>Poker Timer</h4>
          <span>Featuring</span>
          <ul className={styles.list_lefty}>
            <li className={styles.list_item}>Keep track of blinds</li>
            <li className={styles.list_item}>
              Calculate winnings based on nr of players
            </li>
            <li className={styles.list_item}>Rebuy & Addon functionality</li>
            <li className={styles.list_item}>Breaks included!</li>

            <li className={styles.list_item}>Hilarious sound effects</li>
            <li className={styles.list_item}>
              Press F11 & CTRL+scroll to resize
            </li>
            <li className={styles.list_item}>
              Don't even try using a small screen
            </li>
          </ul>
          <div className={styles.project_links}>
            <Link href="https://acornsfordinner.github.io/pokertimer/">
              try it out
            </Link>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
