
import { Link, useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const CourseDetail = () => {
    const { id } = useParams();
    const [data, loading, error] = useFetch('/classes.json');
    if (loading) {
        return <div className="text-2xl text-red-200">Loading...</div>
    }

    const classInfo = data.filter(cls => cls.id == id);

    const { title, description, fee, image, time, duration, availability, location, notes } = classInfo[0];


    return (
        <div className="pt-24 grid md:grid-cols-2 max-w-screen-lg mx-auto items-center ">
            <div className="grid top-20 px-4">
                <h1 className="text-5xl  text-gray-700 font-bold font-RobotoCondensed">{title}</h1>
                <img src={image} alt="" />
                <h2 className="text-2xl mt-4  text-gray-700 font-bold font-RobotoCondensed">Highlights of the Cooking Class</h2>
                <p className="text-gray-500 py-2">{description}</p>
                <p className="text-gray-500 font-bold"><span className="font-bold text-black">Fees: </span>{fee}</p>
                <p className="text-gray-500  font-semibold"><span className="font-bold text-black">Duration: </span>{duration}</p>
                <p className="text-gray-500  font-semibold"><span className="font-bold text-black">Availability: </span>{availability}</p>
                <p className="text-gray-500 font-semibold"><span className="font-bold text-black">Location: </span>{location}</p>
            </div>
            {/* sidebar */}
            <div className="mt-4 md:mt-0">
                <h1 className="text-5xl  text-gray-700 font-bold font-RobotoCondensed">Want to be a Chef?</h1>
                <img className="px-8" src="https://i.ibb.co.com/ynCXkWy/chef3.jpg" alt="" />
                
                    <button className="bg-[#fe3f00] text-white px-8 py-2 text-lg hover:bg-black btn mx-auto mt-2 w-4/3 grid mx-auto">Contact Us</button>
                
            </div>
        </div>
    );
};

export default CourseDetail;