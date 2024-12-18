// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const OurTeam = () => {
    return (
        <div className='mb-16' >
            <h1 className="font-bold text-5xl mb-8 text-center pt-16 font-RobotoCondensed">Learn From the Best</h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //    // clickable: true,
                // }}
                //navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card md:grid grid-cols-2 bg-base-100 shadow-xl ">
                        <div className='w-80 mx-auto md:w-full md:p-4'>
                            <img
                                src="https://i.ibb.co.com/ynCXkWy/chef3.jpg"
                                alt="Album" />
                        </div>
                        <div className="card-body ">
                            <h2 className="font-bold text-3xl md:text-5xl md:mb-8 text-center md:pt-16 font-RobotoCondensed">John Doe</h2>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum non incidunt vitae dolorum rerum earum omnis temporibus tenetur deleniti at, accusamus iure placeat nostrum atque culpa nihil quas quod.</p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card md:grid grid-cols-2  bg-base-100 shadow-xl">
                        <div className='w-80 mx-auto md:w-full md:p-4'>
                            <img
                                src="https://i.ibb.co.com/5Mg99YY/chef2.jpg"
                                alt="Album" />
                        </div>
                        <div className="card-body">
                        <h2 className="font-bold text-3xl md:text-5xl md:mb-8 text-center md:pt-16 font-RobotoCondensed">Emma Jones</h2>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum non incidunt vitae dolorum rerum earum omnis temporibus tenetur deleniti at, accusamus iure placeat nostrum atque culpa nihil quas quod.</p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card md:grid grid-cols-2 bg-base-100 shadow-xl">
                    <div className='w-80 mx-auto md:w-full md:p-4'>
                            <img
                                src="https://i.ibb.co.com/0t3nV5x/chef1.jpg"
                                alt="Album" />
                        </div>
                        <div className="card-body">
                        <h2 className="font-bold text-3xl md:text-5xl md:mb-8 text-center md:pt-16 font-RobotoCondensed">Mark Henry</h2>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum non incidunt vitae dolorum rerum earum omnis temporibus tenetur deleniti at, accusamus iure placeat nostrum atque culpa nihil quas quod.</p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>




        </div>
    );
};

export default OurTeam;