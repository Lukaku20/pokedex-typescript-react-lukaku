import React, { useState, useEffect } from 'react'
import  Header  from '../components/Header'
import Footer  from '../components/Footer';
import {Link} from "react-router-dom"
import BulbasaurPic from "../assets/bulbasaur.gif"
import styles from "./pokemons.module.css"
import { fetchPokemons } from '../api/FetchPokemons';
import { Pokemon } from "../types/types.d";
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';

const Pokemons = () => {
    const [isLoading, setIsLoading] = useState(false); 
    const [query, setQuery] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    
    useEffect(() => {
        const fetchAllPokemons = async () => {
          try {
            setIsLoading(true);
            await waitFor(1000);
            const allPokemons = await fetchPokemons();
            setPokemons(allPokemons);
            setIsLoading(false);
          } catch (error) {
            console.error('Error fetching pokemons:', error);
          }
        };
      
        fetchAllPokemons();
      }, []);
    
    if(isLoading || !pokemons){
      return <LoadingScreen/>;
    }

    const filteredPokemons = pokemons?.slice(0, 152).filter((pokemon) =>{
      return pokemon.name.toLowerCase().match(query.toLowerCase());
    });

  return (
    <> 
    <Header query={query} setQuery={setQuery} />
    <main>
        <h1 className="title">POKEMONS</h1>
        <nav className="nav"> 
        {filteredPokemons?.slice(0, 152).map((pokemon) => (
            <Link
              key={pokemon.id}
              className={styles.listItem}
              to={`/pokemons/${pokemon.name.toLowerCase()}`}
            >
              <img
                className={styles.listItemIcon}
                src={pokemon.imgSrc}
                alt={pokemon.name}
              />
              <div className={styles.listItemText}>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
              </div>
            </Link>
          ))} 
        </nav>
    </main>
    <Footer />
    </>
  );
};

export default Pokemons
