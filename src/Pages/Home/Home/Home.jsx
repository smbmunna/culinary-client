import AboutLeader from "../AboutLeader/AboutLeader";
import PopularClasses from "../PopularClasses/PopularClasses";
import Welcome from "../Welcome/Welcome";


const Home = () => {
    return (
        <div>
            <Welcome/>
            <AboutLeader/>
            <PopularClasses/>
        </div>
    );
};

export default Home;