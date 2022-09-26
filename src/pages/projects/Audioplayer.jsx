import styles from "../../styles/project.module.css";
import projectImage from "../../../public/images/audioplayer.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import useCreep from "../../lib/hooks/useCreep";
import { CREEP_EVENTS } from "../../reducers/creepReducer";

export default function Audioplayer() {
  let creep = useCreep();
  useEffect(() => {
    if (creep.creep.currentIndex !== 14) {
      creep.creepDispatch({
        payload: {
          currentIndex: 14,
          currentPage: "Audioplayer",
          currentPageType: "project",
        },
        type: CREEP_EVENTS.UPDATE,
      });
    }
  });

  return (
    <>
      <div className="main">
        <Link href="https://acornsfordinner.github.io/musikspelare/">
          <div className={styles.project_image_div}>
            <Image className={styles.project_image} src={projectImage} />
            <button>Testa</button>
          </div>
        </Link>
        <div className={styles.infoText} id={styles.audioplayerInfo}>
          Responsive audio player made with jQuery
        </div>
      </div>
    </>
  );
}
