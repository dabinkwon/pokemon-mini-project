import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { Link, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Detail } from "./pages/Detail";
import { Search } from "./pages/Search";
import { Favorite } from "./pages/Favorite";

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchMultiplePokemonById(151))
  },[dispatch])


  return (<>
    <header className="flex flex-col justify-center items-center">
      <div>
        <Link to="/">
          <h1 className="text-[40px] text-white font-extrabold my-5">전설의 포켓몬 도감</h1>
        </Link>
      </div>
      <nav className="flex justify-center items-center gap-9 py-2 border-y-2 bg-amber-950 text-white font-semibold w-screen">
        <Link to = "/">메인</Link>
        <Link to = "/detail/1">상페정보</Link>
        <Link to = "/search">검색</Link>
        <Link to = "/favorite">찜목록</Link>
      </nav>
    </header>
    <main className="flex justify-center flex-wrap gap-9 items-center mt-8">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/detail/:pokemonId" element={<Detail/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
    </main>
  </>);
}

export default App;