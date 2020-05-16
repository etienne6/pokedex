import React from "react";
import ReactDOM from "react-dom";
import PokeCard from "./components/Pokemon/PokeCard";
import { getPokedex } from "./axios/axios";
import "./styles/layouts.css";
import "./styles/types.css";

async function main() {
  const pokedex = await getPokedex("original-unova");
  ReactDOM.render(
    <>
      {pokedex.map((pokemon) => {
        const { types, image, name } = pokemon;
        return <PokeCard types={types} image={image} name={name} />;
      })}
    </>,
    document.getElementById("pokemonList")
  );
}

main();
