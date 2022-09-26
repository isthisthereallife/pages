import styles from "../../styles/project.module.css";
import Link from "next/link";
import Image from "next/image";
import imgPoker from "../../../public/images/poker.png";
import { CREEP_EVENTS } from "../../reducers/creepReducer";
import useCreep from "../../lib/hooks/useCreep";
import { useEffect } from "react";

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
      <div className="main">
        <div className={styles.project_image_div}>
          <Link href="/projects/Pokertimer/Pokertimer">
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
          <Link href="/projects/Pokertimer/Pokertimer">
            <button className={styles.playBtn}>Starta</button>
          </Link>
        </div>
      </div>
    </>
  );
}
