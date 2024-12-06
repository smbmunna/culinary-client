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
            <Welcome/>
            <AboutLeader/>
            <PromoVideo/>
            <PopularClasses/>
            <NextClass/>
            <OurTeam/>
            <Partners/>
            <Location/>
        </div>
    );
};

export default Home;