import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/slice";

export const FavoriteButton = ({ pokemonId }) => {
  const isFavorite = useSelector((state) =>
    state.favorite.some((item) => item === pokemonId)
  );
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(favoriteSlice.actions.removeFromFavorite({ pokemonId }));
    } else {
      dispatch(favoriteSlice.actions.addToFavorite({ pokemonId }));
    }
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleFavorite();
      }}
      className={isFavorite ? "text-red-500 text-[19px] cursor-pointer" : "text-[19px] cursor-pointer"}
    >
      {isFavorite ? "♥" : "♡"}
    </button>
  );
};

