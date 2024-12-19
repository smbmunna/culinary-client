

const PartnerCard = ({ image }) => {
    return (
        <div className=" md:my-4 h-32 w-52 md:h-52 md:w-64 grid items-center">
            <div className="">
                <img
                    src={image}
                    alt="partners logo"
                    className="" />
            </div>
        </div>
    );
};

export default PartnerCard;