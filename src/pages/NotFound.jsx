import { Link } from "react-router-dom"

const NotFound = ()=>{
    return(
    <>
    <div className="text-3xl flex flex-col justify-center items-center gap-3 text-center mt-5 text-white">
        <h1>404</h1>
        <h3>페이지를 찾을 수 없습니다.</h3>
        <Link 
        className="p-1.5 border-4 text-xl w-[200px] rounded-2xl border-gray-600 bg-gray-400"
        to="/">메인으로 돌아가기</Link>
    </div>
    </>)
}
export default NotFound