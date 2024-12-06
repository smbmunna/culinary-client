

const PartnerCard = ({image}) => {
    return (
        <div>
            <div className="w-64 flex items-center justify-center h-64">
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