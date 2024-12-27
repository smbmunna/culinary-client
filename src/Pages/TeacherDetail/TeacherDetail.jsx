import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";


const TeacherDetail = () => {
    const { id } = useParams();
    const [data, loading, error] = useFetch('/team.json');
    if (loading) {
        return <div>Loading...</div>
    }
    const teacher = data.filter(t => t.id == id);
    const { name, position, image, description, facebookId, instagramId, twitterId, email } = teacher[0];
    return (
        <div className="max-w-screen-lg mx-auto px-8 md:px-0">
            <div className="pt-20 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-5xl  text-gray-700 font-bold font-RobotoCondensed align-left">{name}</h2>
                    <p className="text-gray-500 font-bold">{position}</p>
                    <p className="text-gray-500 font-bold mb-8"><span className="font-bold text-black">Email: </span>{email}</p>
                    <h2 className="text-2xl  text-gray-700 font-bold font-RobotoCondensed align-left">Brief Info:</h2>
                    <p className="text-gray-500">{description}</p>
                </div>

                <div className="md:py-8 md:py-8">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TeacherDetail;