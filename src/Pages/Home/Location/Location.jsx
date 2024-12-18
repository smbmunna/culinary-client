import { Map, Marker } from "pigeon-maps"
import FAQ from "../../../Components/FAQ/FAQ";


//23.815777805337525, 90.41691067949965 dhaka

const Location = () => {
    return (
        <div
            className="py-16 relative"
            style={{
                backgroundImage: "url(" + "https://i.ibb.co.com/rtYTDMc/banner-wo-text-2.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'

            }}
        >

            <div className="absolute inset-0 bg-black opacity-65"></div>
            <div className="relative z-10  font-RobotoCondensed">
                <h1 className="font-bold text-5xl text-center md:py-8 text-white  font-RobotoCondensed">Our Location / <span className="text-[#fe3f00]">FAQ</span></h1>
                <div className="md:grid grid-cols-2 gap-8 px-4 md:px-0 items-center max-w-screen-lg mx-auto">
                    <div className="mb-8 md:mb-0">
                        <Map height={300} defaultCenter={[23.815777805337525, 90.41691067949965]} defaultZoom={11}>
                            <Marker width={50} anchor={[23.815777805337525, 90.41691067949965]} />
                        </Map>
                    </div>
                    <div>
                        <FAQ />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Location;