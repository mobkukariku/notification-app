import {Container} from "./Container.tsx";
import Logo from "../assets/logo.svg"
import {Home, Settings} from "lucide-react";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className={"border-y-2 border-gray-200 py-2"}>
            <Container className={"flex items-center"}>
                <Link to={"/"} >
                    <img src={Logo} className={"w-40 h-fit"} alt="logo"/>
                </Link>
                <div className="flex gap-4 ml-auto">
                    <Link to={'/'} className="flex items-center gap-2 px-4 py-2 cursor-pointer rounded-xl bg-[#29B56E] text-white font-medium hover:bg-green-700 transition-colors">
                        <Home className="w-5 h-5" />
                        Main
                    </Link>
                    <Link to={'/settings'} className="flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer bg-[#29B56E] text-white font-medium  hover:bg-green-700 transition-colors">
                        <Settings className="w-5 h-5" />
                        Settings
                    </Link>
                </div>

            </Container>
        </header>
    )
}