import styles from '../../styles/project.module.css'
import Link from 'next/link'
import Image from 'next/image'
import imgGilfoyle from '../../../public/images/gilfoyle.png'
import imgGilfoyle_mobile from '../../../public/images/gilfoyle_mobile.png'
import imgBootstrap from '../../../public/images/bootstrap.png'
import imgHtml5 from '../../../public/images/html5.png'
import imgJava from '../../../public/images/java.png'
import imgMysql from '../../../public/images/mysql.png'
import imgSpring from '../../../public/images/spring.png'
import imgVue from '../../../public/images/vuejs2.png'
import { CREEP_EVENTS } from '../../reducers/creepReducer'
import useCreep from '../../lib/hooks/useCreep'


export default function GilfoyleGo(){
  
  
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
        <h2>Hotel Booking Web-App</h2>
          <hr />
          <div 
            width="680"
            height="520">
            <Image className={styles.projectImage}
            src={imgGilfoyle}
            />

          </div>
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
            <br />
            <div className="project-external-link-list">
              <Link href="https://github.com/isthisthereallife/Hotel-Booking-App"> source code</Link>
            </div>
      </div>
    </>
  )
}