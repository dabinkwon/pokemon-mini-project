import { getRegExp } from "korean-regexp"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { selectedPokemonByRegExp } from "../RTK/selector"
import { Card } from "../component/Card"

const Search = ()=>{
    const [searchParams] = useSearchParams()
    const param = searchParams.get("pokemon")
    const reg = getRegExp(param);

    const pokemon = useSelector(selectedPokemonByRegExp(reg));

    return(<>
        {pokemon.map(el=><Card key={el.id} pokemon={el}/>)}
    </>)
}
export default Search