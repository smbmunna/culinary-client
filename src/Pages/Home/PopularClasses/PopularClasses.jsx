import { useEffect, useState } from "react";
import ClassCard from "../ClassCard/ClassCard";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);
    return (
        <div className="grid justify-center mb-16">
            <h1 className="font-bold text-5xl mb-8 text-center mt-16">Popular Classes</h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    classes.map(cls => <ClassCard cls={cls} key={cls.id} />)
                }
            </div>
            <div className=" grid justify-center">
                <button className="btn btn-outline btn-secondary w-52">All Classes</button>
            </div>
        </div>
    );
};

export default PopularClasses;