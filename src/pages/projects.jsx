import styles from "../styles/projects.module.css";
import Link from "next/link";
import { CREEP_EVENTS } from "../reducers/creepReducer";
import useCreep from "../lib/hooks/useCreep";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Image from "next/image";
import bgimg from "../../public/images/java.png";

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
      <div className={styles.main}>
        <div className={styles.buttonContainer}>
          
          <div className={styles.item}>
            <Link href="/projects/SVTpk">
              <button
                className={styles.itemButton}
                id={styles.btnSvtpk}
                variant="outline-primary"
                onTouchStart={(x) => {
                  console.log("touched: ", x);
                  console.log("x.target.id: ", x.target.id);
                  console.log(x.target.parentElement);
                  console.log(x.target.parentElement);
                }}
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
            <Link href="/projects/Pokertimer">
              <button className={styles.itemButton} id={styles.btnPoker}>
                <div className={styles.titleCard}>
                  <h4 className={styles.title}>
                    Pokertimer <br />
                    Web-app
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
                    Murvel <br /> Android-app
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
                    Hotel booking <br /> Web-App
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
                    Audioplayer <br />
                    <br /> Built with jQuery
                  </h4>
                </div>
              </button>
            </Link>
          </div>
          <div className={styles.item}>
            <button
              
              className={styles.itemButton}
              id={styles.utfyllnad}
            ></button>
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
