import { FaCalendarDays } from "react-icons/fa6";


const FooterClassCard = ({ cls }) => {
    const { title, time, image } = cls;

    return (
            <div className="grid  grid-cols-2 items-center my-2">
                <div className='w-16'>
                    <img
                        src={image}
                        alt="Classes" />
                </div>
                <div className="w-52">
                    <h2 className="text-white">{title}</h2>
                    <div className="flex gap-2 my-2 items-center">
                        <FaCalendarDays />
                        <p>{time}</p>
                    </div>
                </div>
            </div>
    );
};

export default FooterClassCard;