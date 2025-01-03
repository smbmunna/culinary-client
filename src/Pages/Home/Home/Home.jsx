import Banner from "../../Shared/Banner/Banner";
import AboutLeader from "../AboutLeader/AboutLeader";
import Location from "../Location/Location";
import NextClass from "../NextClass/NextClass";
import OurTeam from "../OurTeam/OurTeam";
import Partners from "../Partners/Partners";
import PopularClasses from "../PopularClasses/PopularClasses";
import Welcome from "../Welcome/Welcome";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Welcome />
            <AboutLeader />
            {/* <PromoVideo /> */}
            <div className=" max-w-screen-lg mx-auto">
                <PopularClasses />
            </div>
            <NextClass />
            <div className=" max-w-screen-lg mx-auto " >
                <OurTeam />
            </div>
            <Location />
            <Partners />
        </div>
    );
};

export default Home;