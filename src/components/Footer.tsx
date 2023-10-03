import React from 'react'
import { Link } from "react-router-dom";
import styles from './footer.module.css';
//Assets
import PokemonPic from "../assets/pikachu.png"
import LocationPic from "../assets/pointer.png"
import ItemsPic from "../assets/pokeball.png"


const Footer = () => {


  return <footer className={styles.footer}>
    <Link className={styles.link} to="/pokemons">
        <img className={styles.footerIcon} src={PokemonPic} alt = "Pokeball" />
        Pokemons
    </Link>
    <Link className={styles.link} to="/items">
        <img className={styles.footerIcon} src={ItemsPic} alt = "Pokeball" />
        Items
    </Link>
    <Link className={styles.link} to="/map">
        <img className={styles.footerIcon} src={LocationPic} alt = "Pokeball" />
        Maps
    </Link>
  </footer>
}

export default Footer
