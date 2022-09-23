import useCreep from "../lib/hooks/useCreep";
import styles from "../styles/about.module.css";
import Image from "next/image";
import img from "../../public/images/ooo.jpeg";
export default function AboutYou() {
  return (
    <>
      <div className="main">
        <Image src={img} />
      </div>
    </>
  );
}
