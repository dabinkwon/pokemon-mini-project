import { createSelector } from "@reduxjs/toolkit";

export const selectedPokemonById = (pokemonId) =>
  createSelector(
    (state) => state.pokemon.data,  // pokemon 전체 데이터 배열을 꺼냄
    (pokemon) => pokemon.find((el) => el.id === pokemonId) // 위 배열을 받아서 find 실행
  );

export const selectedPokemonByRegExp = (reg)=>createSelector(
  state => state.pokemon.data,  
  (pokemon)=>pokemon.filter(el=>el.name.match(reg)),
)

export const selectedFavoritePokemons = createSelector(
  state=>state.pokemon.data,
  state=>state.favorite,
  (pokemon,favorite)=>{
    return pokemon.filter(el=>favorite.includes(el.id))
  }
)