import { PiStudentThin } from "react-icons/pi";

import { PiChefHatThin } from "react-icons/pi";

import { FaHashtag } from "react-icons/fa";
import { RiNumber1 } from "react-icons/ri";

const Welcome = () => {
    return (
        <div className="bg-[#252422] text-white w-full py-16 font-RobotoCondensed">
            <h1 className="text-center text-4xl px-16 md:px-0 md:text-5xl font-bold mb-8 font-RobotoCondensed">Welcome to <span className="text-[#fe3f00]">Culinary Institute Dhaka</span></h1>
            <p className="text-center  px-16   max-w-screen-md mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque nemo nesciuntmollitia commodi. ipsum dolor sit amet consectetur, adipisicing elit. Excepturi expedita amet iusto corrupti architecto autem veniam, sunt vero eos vitae.</p>
            <div className="grid md:grid-cols-3 mt-4   max-w-screen-lg mx-auto">
                <div className="text-center grid gap-4 md:gap-0 justify-items-center mt-4 md:mt-0 md:p-8">
                    <div className="flex">
                        <FaHashtag className="text-[40px] md:text-[80px] text-white" />
                        <RiNumber1 className="text-[40px] md:text-[80px] text-white"  />
                    </div>
                    <h3 className="text-lg font-bold mt-4">Ranked No.1 in the Culinary Industry</h3>
                </div>
                <div className="text-center grid justify-items-center p-8">
                    <PiStudentThin className="text-[60px] md:text-[100px] text-white"  />
                    <h3 className="text-lg font-bold ">Individual Apporoach to Each Student</h3>
                </div>

                <div className="text-center  grid justify-items-center md:p-8">
                    <PiChefHatThin className="text-[60px] md:text-[100px] text-white"  />
                    <h3 className="text-lg font-bold ">Only Professional Chefs Certification</h3>
                </div>

            </div>

        </div>
    );
};

export default Welcome;