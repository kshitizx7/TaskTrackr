import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
    return (
        <header className="mt-5 mx-10 rounded-2xl flex border-solid-1 shadow-2xl h-25 items-center  justify-between">
                <img  className="w-20 " src={LOGO_URL} />
                <div className="font-bold text-3xl">Task<span className="border-b-4 border-black ">Trackr</span></div>
                <ul className="flex px-2">
                    <Link to={"/"}><li className="px-2 text-gray-700 font-medium cursor-pointer hover:text-yellow-400">Home</li></Link>
                    <Link to={"/About"}><li className="px-2 text-gray-700 font-medium cursor-pointer hover:text-yellow-400">About</li></Link>
                    <Link to={"/Contact"}><li className="px-2 text-gray-700 font-medium cursor-pointer hover:text-yellow-400">contact</li></Link>
                </ul>
        </header>
    )
}

export default Header;