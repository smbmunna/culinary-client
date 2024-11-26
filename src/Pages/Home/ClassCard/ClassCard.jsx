
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
                    <button className="btn btn-outline btn-error">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;