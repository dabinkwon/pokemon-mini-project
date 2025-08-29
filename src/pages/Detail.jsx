import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedPokemonById } from "../RTK/selector";

export const Detail = () => {
  const { pokemonId } = useParams();
  const selectedPokemon = useSelector(selectedPokemonById(Number(pokemonId)));
console.log(selectedPokemon)
  return (
    <div className="flex justify-center items-start w-full min-h-screen">
        <div className="w-md min-h-[450px]  flex flex-col justify-center gap-5 items-center border-2 rounded-lg border-gray-600 pb-4 bg-gradient-to-t from-gray-500 to-gray-700 shadow-[0_0_25px_rgba(187,185,185,0.5)]">
          <img 
          className="w-[150px] scale-170 drop-shadow-[0_10px_15px_rgba(235,232,226,0.5)]"
          src={selectedPokemon.front} alt={selectedPokemon.name} />
          <p className="text-white text-2xl text-center pt-2.5 font-bold">{selectedPokemon.name}</p>
          <div className="whitespace-pre-wrap text-center text-white">{selectedPokemon.description}</div>
        </div>
    </div>
      );

};