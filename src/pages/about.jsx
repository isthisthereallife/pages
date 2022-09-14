import useCreep from "../lib/hooks/useCreep"
import styles from '../styles/about.module.css'
import Image from 'next/image'
import img from '../../public/images/ooo.jpeg'
export default function AboutYou(){
  const you = useCreep()
  
  return (
    <>
      <div className={styles.main}>
      <Image src={img} />
      </div>
    </>
  )
}