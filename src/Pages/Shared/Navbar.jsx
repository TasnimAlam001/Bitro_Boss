import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext);
    const [cart] = useCart();


    const handleLogOut = () => {
        LogOut()
            .then(() => { })
            .then(error => console.log(error))
    }

    const options =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/order/salad">Order</Link></li>
            <li><Link to="/secret">secret</Link></li>

            {
                user ? <> <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button></> :
                    <> <li><Link to="/login">Login</Link></li></>
            }

        </>


    return (
        <div className="navbar fixed z-10 max-w-screen-xl bg-black opacity-75 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {options}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro BOOS</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {options}
                </ul>
            </div>
            <div className="navbar-end">
                <span className="text-2xl pr-3">
                {
                    user && <p className="">{user.displayName}</p>
                }
                </span>
                <Link to="/dashboard/mycart">
                    <span className="flex ">

                        <span className="text-2xl"><FaShoppingCart></FaShoppingCart></span>
                        <div className="badge badge-secondary">+{cart?.length || 0}</div>

                    </span>
                    
                </Link>
            </div>
        </div>
    );
};

export default Navbar;