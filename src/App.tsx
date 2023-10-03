import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pokemon from './pages/Pokemon';
import Pokemons from './pages/Pokemons';
import Items from './pages/Items';

// Importa aquí los componentes que planeas usar en las rutas (por ejemplo, Home).

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          {/* Define tus rutas aquí */}
          <Route path="/pokemons/:name" element={<Pokemon />}
           />
           <Route path="/pokemons" element={<Pokemons />}
           />
          {/* Asegúrate de importar y definir Home u otros componentes necesarios */}
          <Route path="/items" element={<Items/>} />
          <Route path ="/" element={<Pokemons/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
