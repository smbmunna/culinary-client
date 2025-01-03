import { Link as ScrollLink } from "react-scroll";

import { Link } from "react-router-dom";


const Navbar = () => {
    const listOptions = <>
        <li className="font-RobotoCondensed text-xl ">
            <Link to='/' smooth={true} duration={500}>Home</Link>
        </li>
        <li className="font-RobotoCondensed text-xl ">
            <ScrollLink to='courses' smooth={true} duration={500}>Courses</ScrollLink>
        </li>
        <li className="font-RobotoCondensed text-xl ">
            <ScrollLink to='instructors' smooth={true} duration={500}>Instructors</ScrollLink>
        </li>
        <li className="font-RobotoCondensed text-xl ">
            <ScrollLink to='location' smooth={true} duration={500}>Location/FAQ</ScrollLink>
        </li>
        <li className="font-RobotoCondensed text-xl ">
            <Link to='/contactUs'>Contact Us</Link>
        </li>

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
                <Link to='/'>
                    <img src="https://i.ibb.co.com/L8DNcxJ/Logo-2.png" alt="logo" className="w-16" />
                </Link>
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