import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/project.module.css";
import imgWebshop from "../../../public/images/webshop.png";
import imgNext from "../../../public/images/nextjs.png";
import imgReact from "../../../public/images/reactjs.png";
import imgJS from "../../../public/images/javascript.png";
import { CREEP_EVENTS } from "../../reducers/creepReducer";
import useCreep from "../../lib/hooks/useCreep";
import { useEffect, useState } from "react";

export default function Webshop() {
  const creep = useCreep();

  useEffect(() => {
    if (creep.creep.currentIndex !== 11) {
      creep.creepDispatch({
        payload: {
          currentIndex: 11,
          currentPage: "Webshop",
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
      <Head>
        <title>Web Shop</title>
        <link rel="icon" href="/pages/favicon.ico" />
      </Head>
      <div className="main">
        {/* <h2 className={styles.title}>Privatkopiera från SVT Play</h2>
         */}
        <div width="680" height="520" className={styles.project_image_div}>
          <Link href="https://isthisthereallife.github.io/Webshop">
            <Image
              className={styles.project_image}
              src={imgWebshop}
              alt="Screen capture from the web shop"
            />
          </Link>
        </div>
        <div className={styles.infoText} id={styles.gilfoyleInfo}>
          <h4>Mock web shop </h4>
          <span>Featuring</span>
          <ul className={styles.list_lefty}>
            <li className={styles.list_item}>External API calls</li>
            <li className={styles.list_item}>Parameterized lookups</li>
            <li className={styles.list_item}>Dynamic page generation</li>
            <li className={styles.list_item}>Context-based shopping cart</li>
            <li className={styles.list_item}>Very generous search algorith</li>
          </ul>
          <div>
            Written in{" "}
            <Link href="https://www.javascript.com">
              <Image
                className={styles.inlineLogo}
                src={imgJS}
                height="45px"
                width="45px"
                alt="JavaScript logo"
              />
            </Link>{" "}
            with{" "}
            <Link href="https://reactjs.org/">
              <Image
                className={styles.inlineLogo}
                src={imgReact}
                height="45px"
                width="45px"
                alt="React Logo"
              />
            </Link>{" "}
            and{" "}
            <Link href="https://nextjs.org/">
              <Image
                className={styles.inlineLogo}
                src={imgNext}
                height="45px"
                width="70px"
                alt="Next.js Logo"
              />
            </Link>
          </div>
          <div className={styles.project_links}>
            <br />
            <Link href="https://isthisthereallife.github.io/Webshop">
              try it out
            </Link>
            <br />
            <Link href="https://github.com/isthisthereallife/Webshop">
              source code
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
