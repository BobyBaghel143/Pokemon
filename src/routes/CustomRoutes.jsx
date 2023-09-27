import { Route, Routes } from "react-router-dom";

// Components import
import Pokedex from "../components/Pokedex/Pokedex";
import PokemonDetails from "../components/PokemonDetails/PokemonDetails";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default CustomRoutes;
