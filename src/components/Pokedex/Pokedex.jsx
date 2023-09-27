import { useState } from "react";

// CSS import
import "./Pokedex.css";

// Component import
import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="pokedex-wrapper">
      <h1>POKEDEX</h1>
      <Search updateSearchTerm={setSearchTerm} />
      {searchTerm ? <PokemonDetails pokemonName={searchTerm} />  :  <PokemonList /> }
    </div>
  );
}

export default Pokedex;
