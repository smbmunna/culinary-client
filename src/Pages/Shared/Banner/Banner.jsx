//react-responsive-carousel

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//import all images
import img1 from '../../../assets/Banner/1.png'
import img2 from '../../../assets/Banner/12.png'
import img3 from '../../../assets/Banner/8.png'



const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={img1} className="h-192" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={img2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
             
            </Carousel>
        </div>
    );
};

export default Banner;