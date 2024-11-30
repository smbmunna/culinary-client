import AboutLeader from "../AboutLeader/AboutLeader";
import NextClass from "../NextClass/NextClass";
import PopularClasses from "../PopularClasses/PopularClasses";
import Welcome from "../Welcome/Welcome";


const Home = () => {
    return (
        <div>
            <Welcome/>
            <AboutLeader/>
            <PopularClasses/>
            <NextClass/>
        </div>
    );
};

export default Home;