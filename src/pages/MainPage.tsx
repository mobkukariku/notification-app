import {WelcomeInfo} from "../components/main/WelcomeInfo.tsx";
import {DataForm} from "../components/main/DataForm.tsx";
import {Header} from "../components/shared/Header.tsx";
import {Link} from "react-router-dom";


export default function MainPage() {
    return (
        <>
            <Header />
            <WelcomeInfo />
            <DataForm />
            <Link to={"/notification-get"} >
                link
            </Link>
        </>
    )
}