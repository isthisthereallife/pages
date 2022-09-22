

import styles from '../../styles/project.module.css'
import Link from 'next/link'
import Image from 'next/image'
import imgPoker from '../../../public/images/poker.png'
import { CREEP_EVENTS } from '../../reducers/creepReducer'
import useCreep from '../../lib/hooks/useCreep'
import { useEffect } from 'react'


export default function Pokertimer(){
  const creep = useCreep()
  
  useEffect(()=>{
    if(creep.creep.currentIndex !== 11){
      creep.creepDispatch({
        payload: {  
          currentIndex: 11,
          currentPage: "Pokertimer",
          currentPageType: "project"
        },
        type: CREEP_EVENTS.UPDATE
      })
    }
  },[])

  return(
    <>
      <div className="main">
        <div classname={styles.projectImageDiv}>
        
          <Link href="/projects/Pokertimer/Pokertimer">
          <Image className={styles.projectImage}
          src={imgPoker}
          />
          </Link>
        <div className={styles.project_links} >
          <Link href="/projects/Pokertimer/Pokertimer">
          <button className={styles.playBtn}>Starta</button>
          </Link>
        </div>
        </div>
      </div>

          </>
  )
}