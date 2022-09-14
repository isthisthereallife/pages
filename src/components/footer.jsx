import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowCircleRight, FaArrowLeft, FaArrowRight, FaLongArrowAltRight, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'
import useCreep from '../lib/hooks/useCreep'
import styles from '../styles/footer.module.css'
import copyLeft from '../../public/images/Copyleft_white.svg'
import Image from 'next/image'
import Link from 'next/link'
import {PAGES} from '../utils/constants/pageNumbers'
import { useEffect, useState } from 'react'

export default function Footer(){

  const creep = useCreep()
  const currentPageType = creep.creep.currentPageType
  const currentPageIndex = creep.creep.currentIndex
  const currentPageUri = creep.creep.currentPageUri
  let arrowLeftUri, ArrowRightUri = "a"
  const [arrows, setArrows] = useState(false)

  useEffect(() => {
    
    
   
   



if(currentPageType==="project")setArrows(true)


    else setArrows(false)
  },[currentPageType,currentPageIndex])
  

  function arrowClicked(){
    //PAGES.SVTPK.uri
    
  }
let left
let right
switch (currentPageIndex) {
          case 10:  left = <Link href="/projects/GilfoyleGo"><FaArrowLeft className={styles.icon} /></Link>
                    right =<Link href="/projects/Pokertimer"><FaArrowRight className={styles.icon}/></Link> 
                    break;
          case 11:  left = <Link href="/projects/SVTpk"><FaArrowLeft className={styles.icon}/></Link>
                    right = <Link href="/projects/Murvel"><FaArrowRight className={styles.icon}/></Link>
                    break;
          case 12:  left = <Link href="/projects/Pokertimer"><FaArrowLeft className={styles.icon}/></Link>
                    right = <Link href="/projects/GilfoyleGo"><FaArrowRight className={styles.icon}/></Link>
                    break;
          case 13:  left = <Link href="/projects/Murvel"><FaArrowLeft className={styles.icon}/></Link>
                    right = <Link href="/projects/SVTpk"><FaArrowRight className={styles.icon}/></Link>
                    break;
          default:  
                    break;

}

  return(
    <>
      <div className={styles.main}>
        {arrows ? (
        
        
        <>    
        {left}
        <Link href="/projects"><h3>Projects</h3></Link>
        {right}
        </>
        
        
        ) :
        (<>
          <Image height="50px" width="50px" src={copyLeft} />
          </>
        )}
        </div>      
    </>
  )
}