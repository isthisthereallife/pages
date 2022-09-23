import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/project.module.css";
import "bootstrap/dist/css/bootstrap.css";
import murvelImg from "../../../public/images/murvelTall.png";
import murvelGif from "../../../public/images/murvel.gif";
import { CREEP_EVENTS } from "../../reducers/creepReducer";
import useCreep from "../../lib/hooks/useCreep";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

export default function Murvel() {
  const creep = useCreep();

  useEffect(() => {
    if (creep.creep.currentIndex !== 12) {
      creep.creepDispatch({
        payload: {
          currentIndex: 12,
          currentPage: "Murvel",
          currentPageType: "project",
        },
        type: CREEP_EVENTS.UPDATE,
      });
    }
  });

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="main">
        <div className={styles.container}>
          <Carousel
            wrap={false}
            pause={false}
            className={styles.carousel_main}
            fade
            variant="dark"
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item interval={5000} className={styles.project_image_div}>
              <Image
                className={styles.projectImage}
                src={murvelImg}
                id="murvelImg"
                alt="A screenshot of the Murvel App"
                variant="top"
              />
            </Carousel.Item>
            <Carousel.Item className={styles.project_image_div}>
              <Image
                className={styles.projectImage}
                src={murvelGif}
                id="murvelGif"
                alt="A gif of the Murvel App"
              />
            </Carousel.Item>
          </Carousel>
          <div className={styles.infoText} id={styles.murvelInfo}>
            All the Marvel info you could possibly want, <br />
            in the palm of your hand.
            <p>Made for Android devices.</p>
            <h5>Written in Kotlin.</h5>
          </div>

          <div className={styles.project_links}>
            <Link href="https://github.com/isthisthereallife/MarvellisimoApp">
              source code
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
