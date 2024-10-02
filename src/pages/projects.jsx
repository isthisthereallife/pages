import styles from "../styles/projects.module.css";
import Link from "next/link";
import { CREEP_EVENTS } from "../reducers/creepReducer";
import useCreep from "../lib/hooks/useCreep";
import { useEffect } from "react";
import Head from "next/head";

export default function Projects() {
  const creep = useCreep();

  useEffect(() => {
    if (creep.creep.currentIndex !== 2) {
      creep.creepDispatch({
        payload: {
          currentIndex: 2,
          currentPage: "Projects",
          currentPageType: "list",
        },
        type: CREEP_EVENTS.UPDATE,
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/pages/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.buttonContainer}>
          <div className={styles.item}>
            <Link href="/projects/SVTpk">
              <button
                className={styles.itemButton}
                id={styles.btnSvtpk}
                variant="outline-primary"
              >
                <div className={styles.titleCard}>
                  <h4 className={styles.title}>
                    <strong>SVTpk</strong> <br />
                    <br /> <i>Privatkopiera från SVT Play</i>
                  </h4>
                </div>
              </button>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/projects/TropesBingo">
              <button
                className={styles.itemButton}
                id={styles.btn_tropesbingo}
                variant="outline-primary"
              >
                <div className={styles.titleCard}>
                  <h4 className={styles.title}>
                    <strong>Trope Bingo</strong>
                    <br />
                    <br />
                    <i>Mobile game</i>
                  </h4>
                </div>
              </button>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/projects/Spaced">
              <button className={styles.itemButton} id={styles.btnSpaced}>
                <div className={styles.titleCard}>
                  <h4 className={styles.title}>
                    <strong>Spaced</strong> <br />
                    <br />
                    <i>Game Boy-esque game</i>
                  </h4>
                </div>
              </button>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/projects/Murvel">
              <button className={styles.itemButton} id={styles.btnMurvel}>
                <div className={styles.titleCard}>
                  <h4 className={styles.title}>
                    <strong>Murvel</strong> <br /> <br />
                    <i>Android App</i>
                  </h4>
                </div>
              </button>
            </Link>
          </div>

          <div className={styles.item}>
            <Link href="/projects/Pokertimer">
              <button className={styles.itemButton} id={styles.btnPoker}>
                <div className={styles.titleCard}>
                  <h4 className={styles.title}>
                    <strong>Poker Timer</strong> <br />
                    <br />
                    <i>Useful tool</i>
                  </h4>
                </div>
              </button>
            </Link>
          </div>

          <div className={styles.item}>
            <Link href="/projects/Webshop">
              <button className={styles.itemButton} id={styles.btnWebshop}>
                <div className={styles.titleCard}>
                  <h4 className={styles.title}>
                    <strong>Web shop</strong> <br />
                    <br />
                    <i>React/Next.js app</i>
                  </h4>
                </div>
              </button>
            </Link>
          </div>


        </div>

        {/*
          <div className={styles.item}>
          <Link href="/projects/Audioplayer">
            <button className={styles.itemButton}>
              <h4>Audioplayer</h4>
                </button>
          </Link>
          </div>
          */}
      </div>
    </>
  );
}
