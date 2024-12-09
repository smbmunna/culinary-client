import { PiStudentThin } from "react-icons/pi";

import { PiChefHatThin } from "react-icons/pi";

import { PiCookingPotLight } from "react-icons/pi";

const Welcome = () => {
    return (
        <div className="mb-16 bg-[#252422] text-white w-full py-16">
            <h1 className="text-center text-5xl font-bold mb-8">Welcome to Culinary Institute Dhaka</h1>
            <p className="text-center  px-16   max-w-screen-lg mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque nemo nesciuntmollitia commodi. ipsum dolor sit amet consectetur, adipisicing elit. Excepturi expedita amet iusto corrupti architecto autem veniam, sunt vero eos vitae.</p>
            <div className="grid grid-cols-3 mt-4   max-w-screen-lg mx-auto">
                <div className="text-center grid justify-items-center p-8">
                    <PiStudentThin size={100} color="white" />
                    <h3 className="text-lg font-bold ">Individual Apporoach to Each Student</h3>
                </div>
                <div className="text-center  grid justify-items-center p-8">
                    <PiChefHatThin size={100} color="white" />
                    <h3 className="text-lg font-bold ">Only Professional Chefs Certification</h3>
                </div>
                <div className="text-center grid justify-items-center p-8">
                    <PiCookingPotLight size={100} color="white" />
                    <h3 className="text-lg font-bold ">Quality Ingredients and Equipments</h3>
                </div>
            </div>

        </div>
    );
};

export default Welcome;