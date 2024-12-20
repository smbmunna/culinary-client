import { FaCalendarAlt, FaMoneyBillAlt } from "react-icons/fa";

const ClassCard = ({ cls }) => {
    const { title, price, description, fee, image, time } = cls;
    return (
        <div className="bg-base-100 px-16 md:px-4 py-4">
            <div className="">
                <img
                    className=""
                    src={image}
                    alt="Class" />
            </div>

            <div className="mb-8">
                <div className="flex justify-between items-center bg-black text-white py-2 px-2 mb-2">
                    <div className="flex gap-2">
                        {/* <p>Class Starts: </p> */}
                        <span><FaCalendarAlt className="text-lg text-[#fe3f00]" /></span>
                        <span>{time}</span>
                    </div>
                    <div className="flex gap-2">
                        <FaMoneyBillAlt className="text-xl text-[#fe3f00]" />
                        <span>{fee}</span>
                    </div>
                </div>
                <h2 className="card-title mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <div className="mt-2">
                    <button className="bg-[#fe3f00] text-white px-8 py-2 text-lg hover:bg-black" >Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;