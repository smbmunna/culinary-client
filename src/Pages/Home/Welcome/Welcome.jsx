import { PiStudentThin } from "react-icons/pi";

import { PiChefHatThin } from "react-icons/pi";

import { PiCookingPotLight } from "react-icons/pi";

import { FaHashtag } from "react-icons/fa";
import { RiNumber1 } from "react-icons/ri";

const Welcome = () => {
    return (
        <div className="bg-[#252422] text-white w-full py-16 font-RobotoCondensed">
            <h1 className="text-center text-5xl font-bold mb-8 font-RobotoCondensed">Welcome to <span className="text-[#fe3f00]">Culinary Institute Dhaka</span></h1>
            <p className="text-center  px-16   max-w-screen-md mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque nemo nesciuntmollitia commodi. ipsum dolor sit amet consectetur, adipisicing elit. Excepturi expedita amet iusto corrupti architecto autem veniam, sunt vero eos vitae.</p>
            <div className="grid grid-cols-3 mt-4   max-w-screen-lg mx-auto">
                <div className="text-center grid justify-items-center p-8">
                    <div className="flex">
                        <FaHashtag size={80} color="white" />
                        <RiNumber1 size={90} color="white" />
                    </div>
                    <h3 className="text-lg font-bold ">Ranked No.1 in the Culinary Industry</h3>
                </div>
                <div className="text-center grid justify-items-center p-8">
                    <PiStudentThin size={100} color="white" />
                    <h3 className="text-lg font-bold ">Individual Apporoach to Each Student</h3>
                </div>

                <div className="text-center  grid justify-items-center p-8">
                    <PiChefHatThin size={100} color="white" />
                    <h3 className="text-lg font-bold ">Only Professional Chefs Certification</h3>
                </div>

            </div>

        </div>
    );
};

export default Welcome;