import useCreep from "../lib/hooks/useCreep";
import styles from "../styles/about.module.css";
import Image from "next/image";
import img from "../../public/images/ooo.jpeg";
import Head from "next/head";
export default function AboutYou() {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <div className="main">
        <Image src={img} />
      </div>
    </>
  );
}
