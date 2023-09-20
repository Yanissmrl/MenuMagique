
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router";
import { Outlet } from "react-router";
import Homepage from "../../routes/Homepage";

export default function Layout() {

    const { pathname } = useLocation();

    return (
        <>
            <Header />
            {pathname === '/' ? <Homepage /> : <Outlet />}
            <Footer />
        </>
    )
}