import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/project.module.css'
import murvelImg from '../../../public/images/murvelTall.png'
import murvelGif from '../../../public/images/murvel.gif'
import { CREEP_EVENTS } from '../../reducers/creepReducer'
import useCreep from '../../lib/hooks/useCreep'
import { useEffect } from 'react'



export default function Murvel(){
  const creep = useCreep();

  useEffect(()=>{
  if(creep.creep.currentIndex !== 12){
    creep.creepDispatch({
    payload: {
      currentIndex: 12,
      currentPage: "Murvel",
      currentPageType: "project"
    },
    type: CREEP_EVENTS.UPDATE
  })
}},)
  return (
    <>
      <div className="main">
            
            <div className={styles.gifDiv}>
              <Image className={styles.gif}
              src={murvelImg}
              id="murvelImg"
              alt="A screenshot of the Murvel App"
              height="420px"
              width="250px"
              />
              <Image 
              className={styles.gif} 
              src={murvelGif} 
              id="murvelGif"
              alt="A gif of the Murvel App"
              height="0"
              width="0"
              onLoad={()=>{
                if(document.getElementById("murvelImg"))
                document.getElementById("murvelImg").replaceWith(document.getElementById("murvelGif"))

              
            }}
              />
            </div>
            <div className={styles.infoText}>All the Marvel info you could possibly want, <br/>in the palm of your hand.
            <p>Made for Android devices.</p>
            <h5>Written in Kotlin.</h5>
            </div>
            
            <div className={styles.project_links}>
              <Link href="https://github.com/isthisthereallife/MarvellisimoApp">source code</Link>
            </div>
      </div>
    </>
  )
}