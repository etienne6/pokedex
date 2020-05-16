import axios from "axios";

/**
 * @param {String} pokemon
 */
async function getPokemon(pokemon) {
  //TODO: fix this try catch block for better code readability
  let request;
  try {
    request = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  } catch (error) {
    return;
  }
  const { data } = request;
  //TODO: Make this a cleaner destructuring
  let {
    types,
    sprites: { front_default },
    name,
  } = data;

  types = types.map((type) => type.type.name);

  return {
    types,
    image: front_default,
    name,
  };
}

/**
 * Grabs the name of all the pokemons in the region
 * @param {String} region
 * @returns {Array} A String array of all the pokemons in the region
 */
async function getPokedex(region) {
  const pokedex = [];
  let request;
  try {
    request = await axios.get(`https://pokeapi.co/api/v2/pokedex/${region}`);
  } catch (error) {
    console.log(error);
    return;
  }

  let {
    data: { pokemon_entries },
  } = request;

  pokemon_entries = pokemon_entries.map((entry) => entry.pokemon_species.name);

  for (const entry of pokemon_entries) {
    const pokemon = await getPokemon(entry);
    //if conditioned placed here because some api endpoints return a 404. And this causes a bug to not how the pokemon
    if (pokemon) pokedex.push(pokemon);
    console.log(pokemon);
  }
  return pokedex;
}

export { getPokedex, getPokemon };
