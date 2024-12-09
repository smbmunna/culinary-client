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
        <div className="grid justify-center mb-16 font-RobotoCondensed">
            <h1 className="font-bold text-5xl mb-8 text-center mt-16 font-RobotoCondensed">Popular Classes</h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    classes.map(cls => <ClassCard cls={cls} key={cls.id} />)
                }
            </div>
            
        </div>
    );
};

export default PopularClasses;