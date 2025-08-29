import { createAsyncThunk } from "@reduxjs/toolkit";

// createAsyncThunk는 비동기 작업을 처리하는 action을 만들어 준다.
export const fetchMultiplePokemonById = createAsyncThunk(
  // type
  "poketmon/fetchMultiplePokemonById",
  async (maxPoketmonId) => {
    const numberArray = Array.from({ length: maxPoketmonId }, (_, i) => i + 1);
    const fetchApi = async (pokemonId) => {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
        );
        const data = await res.json();
        if (!res.ok) throw new Error(console.log("데이터 가지고 오기 실패!"));
        const pokemonData = {
          id: pokemonId,
          name: data.names.find((el) => el.language.name === "ko").name,
          description: data.flavor_text_entries.find(
            (el) => el.language.name === "ko"
          ).flavor_text,
          front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
          back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
        };
        return pokemonData;
      } catch (error) {
        console.log(error);
      }
    };
    return Promise.all(numberArray.map((el) => fetchApi(el)));
  }
);