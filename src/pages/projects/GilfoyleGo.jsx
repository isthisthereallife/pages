import styles from '../../styles/project.module.css'
import Link from 'next/link'
import Image from 'next/image'
import imgGilfoyle from '../../../public/images/gilfoyle.png'
import imgBootstrap from '../../../public/images/bootstrap.png'
import imgHtml5 from '../../../public/images/html5.png'
import imgJava from '../../../public/images/java.png'
import imgMysql from '../../../public/images/mysql.png'
import imgSpring from '../../../public/images/spring.png'
import imgVue from '../../../public/images/vuejs2.png'
import { CREEP_EVENTS } from '../../reducers/creepReducer'
import useCreep from '../../lib/hooks/useCreep'
import { useEffect } from 'react'


export default function GilfoyleGo(){
  const creep = useCreep();
  useEffect(()=>{
  if(creep.creep.currentIndex !== 13){
    creep.creepDispatch({
    payload: {
      currentIndex: 13,
      currentPage: "Gilfoyle Go",
      currentPageType: "project"
    },
    type: CREEP_EVENTS.UPDATE
  })
}},)
  
  return(
    <>
      <div className="main">
     {/*
        <Image className={styles.bgImg}
        src={imgGilfoyle_mobile}
        alt="Hotel Booking web application"
        layout="fill"
        objectFit="cover"
        quality={100}
        objectPosition="center"
        />
  */}
          <div className={styles.projectImageDiv}>
            <div 
              width="680"
              height="520">
              <Image className={styles.projectImage}
              src={imgGilfoyle}
              />

            </div>
          </div>
          <div className={styles.infoText} id={styles.gilfoyleInfo}>
        <h3>Hotel Booking Web-App</h3>
            <p>Fully functional application for finding and booking hotel rooms.
            </p>
            <br />
            <div>

            <Link href="https://www.java.com">
            <Image src={imgJava}
            alt="Java"
          height="40"
          width="40"
          /></Link>
          <Link href="https://spring.io/projects/spring-boot">
          <Image src={imgSpring}
          height="40"
          width="40"
          />
          </Link>
          <Link href="https://vuejs.org/">
          <Image src={imgVue}
          height="40"
          width="40"
          />
          </Link>
          <Link href="https://getbootstrap.com/">
          <Image src={imgBootstrap}
          height="40"
          width="40"
          />
          </Link>
          <Link href="https://www.mysql.com/">
          <Image src={imgMysql}
          height="40"
          width="40"
          />
          </Link>
          <Link href="https://www.w3schools.com/html/">
          <Image src={imgHtml5}
          height="40"
          width="40"
          />
          </Link>
            </div>
          </div>
            <br />
            <div className={styles.project_links}>
              <Link href="https://github.com/isthisthereallife/Hotel-Booking-App"> source code</Link>
            </div>
      </div>
    </>
  )
}