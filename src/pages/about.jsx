import useCreep from "../lib/hooks/useCreep";
import styles from "../styles/about.module.css";
import Image from "next/image";
import img from "../../public/images/ooo.jpeg";
import Head from "next/head";
import Link from "next/link";
export default function About() {
  return (
    <>
      <Head>
        <title>About me</title>
        <link rel="icon" href="/pages/favicon.ico" />
      </Head>
      <div className="main">
        <div className={styles.main}>
          <div className={styles.box}>
            <a href="https://github.com/isthisthereallife">Github</a>
          </div>
          <div className={styles.box}>
            <a href="https://www.linkedin.com/in/magnus-pettersson-467ab823a/">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
