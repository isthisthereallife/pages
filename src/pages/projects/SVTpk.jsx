import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/project.module.css'
import imgSvtpk from '../../../public/images/svtpk2.png'
import imgJava from '../../../public/images/java.png'
import useCreep from '../../lib/hooks/useCreep'
import { CREEP_EVENTS } from '../../reducers/creepReducer'
import { useEffect } from 'react'

export default function SVTpk(){
  const creep = useCreep()

  useEffect(()=>{
    if(creep.creep.currentIndex !== 10){
      creep.creepDispatch({
        payload: {
          currentIndex: 10,
          currentPageType: "project"
        },
        type: CREEP_EVENTS.UPDATE
      })
    }
  },[])
  console.log("DE T ÄR JU HÄR cree:p: ",creep.creep.currentIndex)

  
      
  return (
    <>
      <div className="main">
        <h2>SVTpk - Privatkopiera från SVT</h2>
        <div 
            width="680"
            height="520"
            className={styles.projectImageDiv}>
        <Image className={styles.projectImage}
          src={imgSvtpk}
          />
          </div>
        <h5>Portable application. Grapical User Interface.</h5>
        <div>A standalone Java application.
        <br />
        Enables downloads from SVT Play.
        </div>
        <hr />
        <p>Written in <Link href="https://www.java.com"><Image className={styles.inlineLogo} src={imgJava} height="45px" width="45px" /></Link> with JavaFX</p>
        <div className="project-external-link-list" >Links:
        <br />
        <Link href="https://isthisthereallife.github.io/svtpk/">download</Link>
        <br />
        <Link href="https://github.com/isthisthereallife/svtpk">source code</Link>
        </div>
        <hr />
      </div>
    </>
  )
}