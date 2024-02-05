import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/index.module.css";
import { Button } from "@mui/material";
import { FaHouseUser, FaLockOpen, FaLowVision } from "react-icons/fa";
import useCreep from "../lib/hooks/useCreep";
import imgSvtpk from "../../public/images/svtpk.png";
import imgSpaced from "../../public/images/spaced.png";
import Carousel from "react-bootstrap/Carousel";
import imgPoker from "../../public/images/poker.png";
import imgMurvel from "../../public/images/murvel2.png";
import imgWebshop from "../../public/images/webshop.png";
import imgTropesbingo from "../../public/images/tropes1.png";

import { CREEP_EVENTS } from "../reducers/creepReducer";

function HomePage() {
  const creep = useCreep();
  const ind = creep.creep.currentIndex;

  useEffect(() => {
    if (ind !== 0) {
      creep.creepDispatch({
        payload: {
          currentIndex: 0,
          currentPageType: "home",
          currentPage: "home",
        },
        type: CREEP_EVENTS.UPDATE,
      });
    }
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    creep.currentIndex = index;
  };

  return (
    <>
      <Head>
        <title>isthisthereallife</title>
        <link rel="icon" href="/pages/favicon.ico" />
      </Head>
      <div className="main">
        {
          <Carousel
            className={styles.carousel_main}
            pause={false}
            fade
            variant="dark"
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item interval={3000}>
              <Link href="/projects/SVTpk" className={styles.carousel_link}>
                <Image
                  className={styles.carousel_image}
                  width="680"
                  height="520"
                  src={imgSvtpk}
                  variant="top"
                  alt="Javaapplikation"
                />
              </Link>
              <Carousel.Caption className={styles.carousel_caption}>
                <Link href="/projects/SVTpk" className={styles.carousel_link}>
                  <div>
                    <h5>SVTpk</h5>
                    <p>Privatkopiera från SVT Play</p>
                  </div>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <Link
                href="/projects/TropesBingo"
                className={styles.carousel_link}
              >
                <Image
                  className={styles.carousel_image}
                  width="680"
                  height="520"
                  src={imgTropesbingo}
                  variant="top"
                  alt="Trope Bingo"
                />
              </Link>
              <Carousel.Caption className={styles.carousel_caption}>
                <Link
                  href="/projects/TropesBingo"
                  className={styles.carousel_link}
                >
                  <div>
                    <h5>Trope Bingo</h5>
                    <p>Can you spot the tropes?</p>
                  </div>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2500}>
              <Link href="/projects/Webshop" className={styles.carousel_link}>
                <Image
                  className={styles.carousel_image}
                  src={imgWebshop}
                  width="680"
                  height="520"
                  alt=""
                />
              </Link>
              <Carousel.Caption className={styles.carousel_caption}>
                <Link href="/projects/Webshop" className={styles.carousel_link}>
                  <div>
                    <h5>Web App</h5>
                    <p>API-calls and dynamic page generation</p>
                  </div>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2500}>
              <Link href="/projects/Murvel" className={styles.carousel_link}>
                <Image
                  className={styles.carousel_image}
                  src={imgMurvel}
                  width="680"
                  height="520"
                  alt="Murvel - Android-app"
                />
              </Link>
              <Carousel.Caption className={styles.carousel_caption_red}>
                <Link href="/projects/Murvel" className={styles.carousel_link}>
                  <div>
                    <h5>Android App</h5>
                    <p>Browse the Marvel Universe</p>
                  </div>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2500}>
              <Link
                href="/projects/Spaced"
                className={styles.carousel_link}
              >
                <Image
                  className={styles.carousel_image}
                  src={imgSpaced}
                  width="680"
                  height="520"
                  alt="Hotellbokningsapplikation"
                />
              </Link>
              <Carousel.Caption className={styles.carousel_caption}>
                <Link
                  href="/projects/Spaced"
                  className={styles.carousel_link}
                >
                  <div>
                    <h5>Spaced</h5>
                    <p>Game Boy-esque game</p>
                  </div>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <Link
                href="/projects/Pokertimer"
                className={styles.carousel_link}
              >
                <Image
                  className={styles.carousel_image}
                  src={imgPoker}
                  width="680"
                  height="520"
                  alt="Pokertimer"
                />
              </Link>
              <Carousel.Caption className={styles.carousel_caption_light}>
                <Link
                  href="/projects/Pokertimer"
                  className={styles.carousel_link}
                >
                  <div>
                    <h5>Pokertimer</h5>
                    <p>Håll koll på tiden!</p>
                  </div>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        }
        <Link href="/projects">
          <Button
            className="startpage_button"
            variant="contained"
            startIcon={<FaHouseUser />}
            endIcon={<FaHouseUser />}
          >
            Projects
          </Button>
        </Link>
        <Link href="/about">
          <Button
            className="startpage_button"
            variant="contained"
            startIcon={<FaLowVision />}
            endIcon={<FaLockOpen />}
          >
            About Me
          </Button>
        </Link>
      </div>
    </>
  );
}
export default HomePage;
