
const ClassCard = ({ cls }) => {
    const { title, price, description, fee, image } = cls;
    return (
        <div className="bg-base-100">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="mt-4 mb-8">
                <h2 className="card-title mb-2">{title}</h2>
                <p>{description}</p>
                <div className="mt-2">
                    <button className="bg-[#fe3f00] text-white px-8 py-2 text-lg hover:bg-black" >Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;