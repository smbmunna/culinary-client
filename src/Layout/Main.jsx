import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Banner from "../Pages/Shared/Banner/Banner";


const Main = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <div  className='mx-auto'>
                <Outlet />
            </div>
            {/* <Footer/> */}
        </div>
    );
};

export default Main;