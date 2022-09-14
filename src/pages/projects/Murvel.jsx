import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/project.module.css'
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
              <Image 
              className={styles.gif} 
              src={murvelGif} 
              alt="Murvel"
              height="420px"
              width="250px"
              />
            </div>
            <p>All the Marvel info you could possibly want, <br/>in the palm of your hand.
            </p>
            <div>Made for Android devices.</div>
            <div>Written in Kotlin.</div>
            <div className={styles.project_links}>
              <Link href="https://github.com/isthisthereallife/MarvellisimoApp">source code</Link>
            </div>
      </div>
    </>
  )
}