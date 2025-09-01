import { useNavigate } from "react-router-dom";
import { FavoriteButton } from "./FavoriteButton";
import { memo, useState } from "react";

export const Card = memo(({ pokemon }) => {
    const navigate = useNavigate();
    const [isImageLoading,setIsImageLoading] = useState(true);
  return (
    <section 
    onClick={()=>{
        navigate(`/detail/${pokemon.id}`)
    }}
    className="flex flex-col justify-center items-center w-[200px] border-4 rounded-sm border-gray-600 pb-2  bg-linear-to-t from-gray-500 to-gray-700 hover:scale-110 duration-200 ease-in-out hover:drop-shadow-[0_0_6px_rgba(0,0,0,0.5)]">
      {isImageLoading?<div className="w-[180px] text-center">로딩중...</div>:null}
      <img
        className="w-[180px] drop-shadow-[0_10px_15px_rgba(235,232,226,0.5)]"
        src={pokemon.front}
        alt={pokemon.name}
        onLoad={()=>{setIsImageLoading(false)}}
        style={{display:isImageLoading?'none':'block'}}
      />
      <div className="text-white font-bold py-2">{`${pokemon.id}. ${pokemon.name} `}
        <FavoriteButton pokemonId={pokemon.id}/>
      </div>
    </section>
  );
});