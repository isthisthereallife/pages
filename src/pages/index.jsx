import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import { Button } from '@material-ui/core'
import { FaHouseUser, FaLockOpen, FaLowVision } from 'react-icons/fa'
import useCreep from '../lib/hooks/useCreep'
import imgSvtpk from '../../public/images/svtpk.png'
import imgGilfoyle from '../../public/images/gilfoyle.png'
import Carousel from 'react-bootstrap/Carousel'
import imgPoker from '../../public/images/poker.png'
import imgMurvel from '../../public/images/murvel2.png'
import imgStenarWide from '../../public/images/stenar-wide.jpeg'
import { CREEP_EVENTS } from '../reducers/creepReducer'



function HomePage() {
  const creep = useCreep()
  useEffect(()=>{
  if(creep.creep.currentIndex !== 0){
    creep.creepDispatch({
    payload: {
      currentIndex: 0,
      currentPageType: "home"
    },
    type: CREEP_EVENTS.UPDATE
  })
}},[])
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) =>{
    console.log("changed index to ",selectedIndex)
    setIndex(selectedIndex)
    creep.currentIndex=index;
  }

  console.log(imgSvtpk)
  return <>
    <div className={styles.bg}>
  <div className="main">
    
    {console.log("creep: ",creep)}
    {
      <Carousel className={styles.carouselMain} fade variant="dark" activeIndex={index} onSelect={handleSelect}>

          <Carousel.Item interval={4000} >
          <Link href="/projects/SVTpk">
            <Image
              className={styles.carousel_image}
              width="680"
              height="520"
              src={imgSvtpk}
              variant="top"
                alt="Javaapplikation" />
        </Link>
        <Link href="/projects/SVTpk">
            <Carousel.Caption className={styles.carousel_caption}>
              <h5>SVTpk</h5>
              <p>Privatkopiera från SVT Play</p>
            </Carousel.Caption>
        </Link>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
        <Link href="/projects/Pokertimer">
            <Image className={styles.carousel_image}
            src={imgPoker}
            width="680"
            height="520"
            alt="Pokertimer" />
        </Link>
        <Link href="/projects/Pokertimer">
            <Carousel.Caption className={styles.carousel_caption_light}>
              <h5>Pokertimer</h5>
              <p>Håll koll på tiden!</p>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>
          
          
          
        
          <Carousel.Item interval={4000}>
        <Link href="/projects/Murvel">

            <Image className={styles.carousel_image}
            src={imgMurvel}
            width="680"
            height="520"
            alt="Murvel - Android-app"/>
          </Link>
        <Link href="/projects/Murvel">

            <Carousel.Caption className={styles.carousel_caption_red}>
              <h5>Android App</h5>
              <p>Browse the Marvel Universe</p>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>

  <Carousel.Item interval={4000}>
        <Link href="/projects/GilfoyleGo">

            <Image className={styles.carousel_image}
            src={imgGilfoyle}
            width="680"
            height="520"
            alt="Hotellbokningsapplikation"
            />
          </Link>
        <Link href="/projects/GilfoyleGo">

            <Carousel.Caption className={styles.carousel_caption}>
              <h5>Web App</h5>
              <p>Hotell booking service</p>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>



      </Carousel>
}
    <Link href="/projects"><Button className="startpage_button" variant="text"  startIcon={<FaHouseUser/>} endIcon={<FaHouseUser/>}>
      Projects
      </Button>
      </Link>    
    <Link href="/about"><Button className="startpage_button" variant="contained" startIcon={<FaLowVision/>} endIcon={<FaLockOpen/>}>
      About Me
      </Button>
      </Link>
      </div>
    </div>
    </>
}
export default HomePage
