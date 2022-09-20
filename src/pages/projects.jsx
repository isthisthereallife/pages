import styles from '../styles/projects.module.css'
import Link from 'next/link'
import { CREEP_EVENTS } from '../reducers/creepReducer'
import useCreep from '../lib/hooks/useCreep'
import { useEffect } from 'react'




export default function Projects(){
  const creep = useCreep()

  useEffect(() => {
    if(creep.creep.currentIndex !== 2){
      creep.creepDispatch({
        payload: {
          currentIndex: 2,
          currentPage: "Projects",
          currentPageType: "list"
        },
        type: CREEP_EVENTS.UPDATE
      })
    }
  },[])

  return (
    <>
      <div className="main">

        <div className={styles.item}>
          <Link href="/projects/SVTpk" >
            <button className={styles.itemButton}>
              <h4>SVTpk | Privatkopiera från SVT</h4>
            </button>
          </Link>
        </div>

        <div className={styles.item}>
          <Link href="/projects/Pokertimer">
            <button className={styles.itemButton}>
              <h4>Pokertimer | Webb-app</h4>
            </button>
          </Link>
        </div>

        <div className={styles.item}>
          <Link href="/projects/Murvel">
          <button className={styles.itemButton}>
              <h4>Murvel | Kotlin-app</h4>
                </button>
          </Link>
          </div>

          <div className={styles.item}>
          <Link href="/projects/GilfoyleGo">
            <button className={styles.itemButton}>
              <h4>Hotel booking | Web-App</h4>
                </button>
          </Link>
          </div>
          
          <div className={styles.item}>
          <Link href="/projects/Audioplayer">
            <button className={styles.itemButton}>
              <h4>Audioplayer | jQuery</h4>
                </button>
          </Link>
          </div>
          
        {/*
          <div className={styles.item}>
          <Link href="/projects/Audioplayer">
            <button className={styles.itemButton}>
              <h4>Audioplayer</h4>
                </button>
          </Link>
          </div>
          */}
      </div>
    </>
  )
  }
