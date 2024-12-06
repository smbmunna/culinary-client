import { Map, Marker } from "pigeon-maps"
import FAQ from "../../../Components/FAQ/FAQ";


//23.815777805337525, 90.41691067949965 dhaka

const Location = () => {
    return (
        <div>
            <h1 className="font-bold text-5xl mb-8 text-center pt-16">Our Location / FAQ</h1>
            <div className="grid grid-cols-2 gap-4 items-center">
                <div>
                    <Map height={300} defaultCenter={[23.815777805337525, 90.41691067949965]} defaultZoom={11}>
                        <Marker width={50} anchor={[23.815777805337525, 90.41691067949965]} />
                    </Map>
                </div>
                <div>
                    <FAQ />
                </div>
            </div>
        </div>
    );
};

export default Location;