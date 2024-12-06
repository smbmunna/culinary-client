import AboutLeader from "../AboutLeader/AboutLeader";
import Location from "../Location/Location";
import NextClass from "../NextClass/NextClass";
import OurTeam from "../OurTeam/OurTeam";
import PopularClasses from "../PopularClasses/PopularClasses";
import Welcome from "../Welcome/Welcome";


const Home = () => {
    return (
        <div>
            <Welcome/>
            <AboutLeader/>
            <PopularClasses/>
            <NextClass/>
            <OurTeam/>
            <Location/>
        </div>
    );
};

export default Home;