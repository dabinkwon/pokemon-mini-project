import { useSelector } from "react-redux"
import { selectedFavoritePokemons } from "../RTK/selector"
import { Card } from "../component/Card"

const Favorite = ()=>{
    const pokemon = useSelector(selectedFavoritePokemons)
    return(<>
    {pokemon.map(el=><Card key={el.id} pokemon={el}/>)}
    </>)
}
export default Favorite