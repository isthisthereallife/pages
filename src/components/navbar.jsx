import Link from "next/link";
import { React } from "react";
import { FaAngleLeft } from "react-icons/fa";
import useCreep from "../lib/hooks/useCreep";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  let pageTitle = "isthisthereallife";

  const creep = useCreep();
  const currentPageType = creep.creep.currentPageType;
  const currentPage = creep.creep.currentPage;

  if (currentPageType === "project") {
    pageTitle = currentPage;
  }

  return (
    <>
      <Link href="/">
        <div className={styles.navbar}>
          <span>
            {currentPageType !== "home" ? (
              <Link href="/">
                <FaAngleLeft className={styles.icon} />
              </Link>
            ) : (
              <></>
            )}
          </span>
          <h1>{pageTitle}</h1>
          <span />
        </div>
      </Link>
    </>
  );
}
