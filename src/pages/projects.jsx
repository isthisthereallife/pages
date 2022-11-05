import styles from "../styles/projects.module.css";
import Link from "next/link";
import { CREEP_EVENTS } from "../reducers/creepReducer";
import useCreep from "../lib/hooks/useCreep";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Image from "next/image";
import bgimg from "../../public/images/java.png";
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
                    SVTpk <br />
                    <br /> Privatkopiera från SVT
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
                    Web shop <br />
                    <br />
                    React/Next.js app
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
                    Murvel <br /> <br />
                    Android App
                  </h4>
                </div>
              </button>
            </Link>
          </div>

          <div className={styles.item}>
            <Link href="/projects/GilfoyleGo">
              <button className={styles.itemButton} id={styles.btnGilf}>
                <div className={styles.titleCard}>
                  <h4 className={styles.title}>
                    Hotel booking <br />
                    <br /> Web App
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
                    Poker Timer <br />
                    <br />
                    Useful tool
                  </h4>
                </div>
              </button>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/projects/Audioplayer">
              <button className={styles.itemButton} id={styles.btnAudioplayer}>
                <div className={styles.titleCard}>
                  <h4 className={styles.title}>
                    Audio player <br />
                    <br /> Built with jQuery
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
