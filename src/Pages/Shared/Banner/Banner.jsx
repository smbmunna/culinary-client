// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
            <Swiper pagination={false} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className="hero min-h-screen relative">                                                
                            <video
                                className="w-full h-full object-cover"
                                src="https://cms.culinaryartsswitzerland.com/sites/default/files/2021-04/CAA.mp4"
                                autoPlay
                                muted
                                loop
                            />
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-neutral-content text-center relative z-20">
                            <div className="">
                                <h1 className="mt-20 text-8xl font-bold">PASSION for FOOD, CAREER for LIFE</h1>

                                {/* <TimerComponent heading1=""/> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>Slide 2</SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Banner;