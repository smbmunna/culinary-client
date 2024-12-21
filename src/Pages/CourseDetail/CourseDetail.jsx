
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const CourseDetail = () => {
    const { id } = useParams();
    const [data, loading, error] = useFetch('/classes.json');
    if(loading){
        return <div className="text-2xl text-red-200">Loading...</div>
    }
    
    const classInfo= data.filter(cls=>cls.id==id);
    
    const { title, description, fee, image, time } = classInfo[0];


    return (
        <div className="min-h-screen relative">
            <div className="grid gap-4 absolute top-20 px-4">
                <h1 className="text-5xl">{title}</h1>
                <p className="text-gray-500">{description}</p>
                <p className="text-gray-500">{fee}</p>
                <p className="text-gray-500">{time}</p>
            </div>
        </div>
    );
};

export default CourseDetail;