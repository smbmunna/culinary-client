import AboutLeader from "../AboutLeader/AboutLeader";
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
        </div>
    );
};

export default Home;