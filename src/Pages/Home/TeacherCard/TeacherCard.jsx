import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeacherCard = ({ teacher }) => {
    const {id, name, position, image, description, facebookId, instagramId, twitterId } = teacher;

    return (
        <div className="card md:grid grid-cols-2 bg-base-100 shadow-xl ">
            <div className='w-80 mx-auto md:w-full md:p-4'>
                <img
                    src={image}
                    alt="Album" />
            </div>
            <div className="card-body ">
                <h2 className="font-bold text-3xl md:text-5xl  text-center md:pt-16 font-RobotoCondensed">{name}</h2>
                <Link to={`/instructor/${id}`}>
                    <button className='w-60 mx-auto bg-[#fe3f00] py-2 text-white text-xl font-semibold'>{position}</button>
                </Link>
                <p className='text-gray-600 mt-4'>{description}</p>
                <div className="card-actions justify-center mt-2">
                    <FaFacebook className='text-3xl text-[#fe3f00]' />
                    <FaTwitter className='text-3xl text-[#fe3f00]' />
                </div>
            </div>
        </div>
    )
}
export default TeacherCard;