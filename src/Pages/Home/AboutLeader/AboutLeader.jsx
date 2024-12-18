import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const AboutLeader = () => {
    const leaderImg = "https://i.ibb.co.com/PZLc5MQ/Founder.png";
    return (
        <div className="  bg-black ">
            <div className='grid  md:grid-cols-4 items-center gap-4 text-white max-w-screen-lg mx-auto px-8 md:px-0'>
                <div className="mt-8 md:mt-0 col-span-2 ">
                    <FaQuoteLeft className="text-[12px] md:text-[16px] text-white" />

                    <div className=" flex items-end">
                        <h1 className='font-bold text-xl md:text-5xl mb-8 font-RobotoCondensed '>At <br/> <span className="text-[#fe3f00]">Culinary Institute Dhaka</span><br/> our students develop the creativity to be ready to innovative the world of culinary arts. </h1>
                        <FaQuoteRight className="text-[24px] md:text-[60px] text-white" />
                    </div>
                </div>
                <div className="col-span-2">
                    <img src={leaderImg} alt="leader-img" />
                </div>
            </div>
        </div>
    );
};

export default AboutLeader;