import AboutLeader from "../AboutLeader/AboutLeader";
import Location from "../Location/Location";
import NextClass from "../NextClass/NextClass";
import OurTeam from "../OurTeam/OurTeam";
import Partners from "../Partners/Partners";
import PopularClasses from "../PopularClasses/PopularClasses";
import PromoVideo from "../PromoVideo/PromoVideo";
import Welcome from "../Welcome/Welcome";


const Home = () => {
    return (
        <div>
            <Welcome />

            
                <AboutLeader />
                {/* <PromoVideo /> */}
                <div className=" max-w-screen-lg mx-auto">
                <PopularClasses />
                <NextClass />
                <OurTeam />
                <Partners />
                <Location />
            </div>
        </div>
    );
};

export default Home;