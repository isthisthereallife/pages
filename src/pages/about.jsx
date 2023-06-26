import styles from "../styles/about.module.css";
import Head from "next/head";
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
