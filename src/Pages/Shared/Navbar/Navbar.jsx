import { Link } from "react-router-dom";


const Navbar = () => {
    const listOptions = <>
        <li><a>Item 1</a></li>
        <li>
            <details>
                <Link to='/contactUs'>Contact Us</Link>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li><a>Item 3</a></li>
    </>
    return (
        <div className="navbar bg-base-100 fixed z-10 bg-opacity-40 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {listOptions}
                    </ul>
                </div>
                <img src="https://i.ibb.co.com/L8DNcxJ/Logo-2.png" alt="logo" className="w-16" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {listOptions}
                </ul>
            </div>
            <div className="navbar-end">
                
            </div>
        </div>
    );
};

export default Navbar;