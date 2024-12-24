import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";


const TeacherDetail = () => {
    const { id } = useParams();
    const [data, loading, error] = useFetch('/team.json');
    if (loading) {
        return <div>Loading...</div>
    }
    const teacher = data.filter(t => t.id == id);
    console.log(teacher);
    const { name, position, image, description, facebookId, instagramId, twitterId } = teacher[0];
    console.log(name);
    return (
        <div>
            <h1 className="text-3xl">Teacher detail page</h1>
            <div className="grid gap-4  top-20 px-4">
                <h1 className="text-5xl">{name}</h1>
                <img src={image} alt="" />
                <p className="text-gray-500">{description}</p>
                <p className="text-gray-500">{position}</p>
            </div>
        </div>
    );
};

export default TeacherDetail;