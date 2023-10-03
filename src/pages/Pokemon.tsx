import { useNavigate, useParams } from 'react-router-dom'
import PokeballImg from "../assets/pokeball.png"
import Footer from '../components/Footer';
import styles from "../pages/pokemon.module.css"
import { useEffect, useState } from 'react';
import { PokemonDetails } from '../types/types';
import { fetchPokemon } from '../api/FetchPokemon';
import { waitFor } from '../utils/utils';
import LoadingScreen from "../components/LoadingScreen"

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const { name } = useParams();
  const navigate = useNavigate();

useEffect(() => {
  async function getPokemon() {
    setIsLoading(true);
    waitFor(1500);
    const fetchedPokemon = await fetchPokemon(name as string);
    setPokemon({...fetchedPokemon})   
    setIsLoading(false); 
  }
  getPokemon();
}, [name]);

if(isLoading || !pokemon){
  return <LoadingScreen/>;

}

  return <>
    <button
      className={styles.pokeballBoton}
      onClick={() => navigate(-1)}>
      <img
        className={styles.pokeballImagen}
        src={PokeballImg} alt="Pokeball" /> Volver a la pagina anterior
    </button>
    <div
    className={styles.pokemon}
    >
      <main
      className={styles.pokemonInfo}>
        <div 
        className={styles.pokemonTitulo}>
          {name?.toUpperCase()}</div>
        <div>Número {pokemon?.id}</div>
        <div><img 
        className={styles.pokemonInfoImagen}
        src={pokemon?.imgSrc} alt={pokemon?.name} /></div>
        <div>HP: {pokemon?.hp}</div>
        <div>Ataque: {pokemon?.attack}</div>
        <div>Defensa: {pokemon?.defense}</div>
      </main>
    </div>
    <Footer />
  </>;
}

export default Pokemon;
