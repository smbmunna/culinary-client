// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


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
                            <h2 className="font-bold text-3xl md:text-5xl  text-center md:pt-16 font-RobotoCondensed">John Doe</h2>
                            <div className='w-60 mx-auto bg-[#fe3f00] py-2 text-white text-xl font-semibold'>
                                <h2>Cheif Chef / Instructor</h2>
                            </div>

                            <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum non incidunt vitae dolorum rerum earum omnis temporibus tenetur deleniti at, accusamus iure placeat nostrum atque culpa nihil quas quod.</p>
                            <div className="card-actions justify-center mt-2">
                                <FaFacebook className='text-3xl text-[#fe3f00]' />
                                <FaTwitter className='text-3xl text-[#fe3f00]' />
                                <FaInstagram className='text-3xl text-[#fe3f00]' />
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
                            <h2 className="font-bold text-3xl md:text-5xl  text-center md:pt-16 font-RobotoCondensed">Emma Jones</h2>
                            <div className='w-60 mx-auto bg-[#fe3f00] py-2 text-white text-xl font-semibold'>
                                <h2>Instructor</h2>
                            </div>

                            <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum non incidunt vitae dolorum rerum earum omnis temporibus tenetur deleniti at, accusamus iure placeat nostrum atque culpa nihil quas quod.</p>
                            <div className="card-actions justify-center mt-2">
                                <FaFacebook className='text-3xl text-[#fe3f00]' />
                                <FaTwitter className='text-3xl text-[#fe3f00]' />
                                <FaInstagram className='text-3xl text-[#fe3f00]' />
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
                        <h2 className="font-bold text-3xl md:text-5xl  text-center md:pt-16 font-RobotoCondensed">Henry Cavil</h2>
                            <div className='w-60 mx-auto bg-[#fe3f00] py-2 text-white text-xl font-semibold'>
                                <h2>Coordinator</h2>
                            </div>

                            <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum non incidunt vitae dolorum rerum earum omnis temporibus tenetur deleniti at, accusamus iure placeat nostrum atque culpa nihil quas quod.</p>
                            <div className="card-actions justify-center mt-2">
                                <FaFacebook className='text-3xl text-[#fe3f00]' />
                                <FaTwitter className='text-3xl text-[#fe3f00]' />
                                <FaInstagram className='text-3xl text-[#fe3f00]' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>




        </div>
    );
};

export default OurTeam;