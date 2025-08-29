import { useNavigate } from "react-router-dom";

export const Card = ({ pokemon }) => {
    const navigate = useNavigate();
  return (
    <section 
    onClick={()=>{
        navigate(`/detail/${pokemon.id}`)
    }}
    className="flex flex-col justify-center items-center w-[200px] border-3 rounded-sm border-gray-600 pb-2  bg-linear-to-t from-gray-500 to-gray-700 hover:scale-110 hover:shadow-[0_0_25px_rgba(187,185,185,0.5)] duration-150 ease-in-out cursor-pointer">
      <img
        className="w-[180px] drop-shadow-[0_10px_15px_rgba(235,232,226,0.5)]"
        src={pokemon.front}
        alt={pokemon.name}
      />
      <div className="text-white font-bold py-2">{`${pokemon.id}. ${pokemon.name} `}</div>
    </section>
  );
};