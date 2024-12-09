import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const AboutLeader = () => {
    const leaderImg = "https://i.ibb.co.com/PZLc5MQ/Founder.png";
    return (
        <div className="  bg-black ">
            <div className='grid grid-cols-3 items-center gap-4 text-white max-w-screen-lg mx-auto'>
                <div className=" col-span-2">
                    <FaQuoteLeft size={40} />

                    <div className=" flex items-end">
                        <h1 className='font-bold text-5xl mb-8 font-RobotoCondensed '>At Culinary Arts Academy, our students develop the creativity, initiative, and tenacity to be ready to innovative the world of culinary arts. </h1>
                        <FaQuoteRight style={{ fontSize: '160px' }} />
                    </div>
                </div>
                <div>
                    <img src={leaderImg} alt="leader-img" />
                </div>
            </div>
        </div>
    );
};

export default AboutLeader;