
import React from "react"
import { Map, Marker } from "pigeon-maps"

//23.815777805337525, 90.41691067949965

const Location = () => {
    return (
        <Map height={300} defaultCenter={[23.815777805337525, 90.41691067949965]} defaultZoom={11}>
            <Marker width={50} anchor={[23.815777805337525, 90.41691067949965]} />
        </Map>
    );
};

export default Location;