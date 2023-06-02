import { Outlet, useLocation } from "react-router-dom";
import Foorter from "../Pages/Shared/Foorter";
import Navbar from "../Pages/Shared/Navbar";


const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Foorter></Foorter>}
        </div>
    );
};

export default Main;