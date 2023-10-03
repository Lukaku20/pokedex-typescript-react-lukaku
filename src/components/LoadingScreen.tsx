import React from 'react'
import Pokedex from "../assets/pokedex.png"
import styles from '../components/loadingScreen.module.css'

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
        <h1>Loading...</h1>
        <img
        className={styles.loadingScreenIcon}
        src={Pokedex} alt="" />
      
    </div>
  )
}

export default LoadingScreen
