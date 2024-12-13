

const PartnerCard = ({image}) => {
    return (
        <div>
            <div className="w-52 flex items-center justify-center h-52 card shadow-xl my-4">
                <figure>
                    <img
                        src={image}
                        alt="partners logo"
                        className="rounded-xl" />
                </figure>
            </div>
        </div>
    );
};

export default PartnerCard;