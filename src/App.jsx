import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, [dispatch]);

  return (
    <>
      <header className="flex flex-col justify-center items-center ">
        <div>
          <Link to="/">
            <h1 className="text-[40px] text-white font-extrabold my-5">
              전설의 포켓몬 도감
            </h1>
          </Link>
        </div>
        <nav className="flex justify-center items-center gap-9 py-2 border-y-2 bg-amber-950 text-white font-semibold w-screen">
          <Link to="/">메인</Link>
          <Link to="/favorite">찜목록</Link>
          <div>
            <input
              className="border-2 rounded-lg pl-2 p-1 w-[189px] text-[14px] outline-0"
              placeholder="포켓몬 이름을 입력하세요."
              onChange={(e) => {
                navigate(`/search?pokemon=${e.target.value}`);
              }}
              type="text"
            />
          </div>
        </nav>
      </header>
      <main className="flex justify-center flex-wrap gap-9 items-center mt-8">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-82">
              <div className="w-14 h-14 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:pokemonId" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
