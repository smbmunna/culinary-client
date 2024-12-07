// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import TimerComponent from '../../../Components/TimerComponent/TimerComponent';





const Banner = () => {
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/LZctZD0/banner-wo-text.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-lg">
                                <h1 className="mt-20 text-5xl font-bold">No.1 Culinary Institute in Bangladesh</h1>
                             
                                <TimerComponent heading1=""/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;