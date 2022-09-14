import Link from 'next/link'
import {React} from 'react'
import styles from '../styles/navbar.module.css'

export default function Navbar(){
  return(
  <>
    <div className={styles.navbar}>
      <h1><Link href="/"> HANS_ONLINE </Link></h1>
    </div>
  </>
)}