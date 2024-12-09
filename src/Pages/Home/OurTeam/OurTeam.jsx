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
        <div className='mb-16'>
            <h1 className="font-bold text-5xl mb-8 text-center pt-16 font-RobotoCondensed">Learn From the Best</h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card grid grid-cols-2 bg-base-100 shadow-xl ">
                        <figure>
                            <img
                                src="https://i.ibb.co.com/ynCXkWy/chef3.jpg"
                                alt="Album" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="font-bold text-5xl mb-8 text-center pt-16 font-RobotoCondensed">John Doe</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolore velit minima eligendi optio iusto, tempora ipsum ad quos, atque consectetur perspiciatis. Expedita, adipisci. Vero voluptas itaque mollitia, tempora, id culpa iure temporibus laborum, laudantium nemo quia sapiente? Iure excepturi tenetur quam, ipsa itaque fugiat maxime voluptates tempore, quidem non repudiandae deserunt facere veritatis quos asperiores, id nemo dignissimos quia.</p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card grid grid-cols-2  bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src="https://i.ibb.co.com/5Mg99YY/chef2.jpg"
                                alt="Album" />
                        </figure>
                        <div className="card-body">
                            <h2 className="font-bold text-5xl mb-8 text-center pt-16">Emma Jones</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolore velit minima eligendi optio iusto, tempora ipsum ad quos, atque consectetur perspiciatis. Expedita, adipisci. Vero voluptas itaque mollitia, tempora, id culpa iure temporibus laborum, laudantium nemo quia sapiente? Iure excepturi tenetur quam, ipsa itaque fugiat maxime voluptates tempore, quidem non repudiandae deserunt facere veritatis quos asperiores, id nemo dignissimos quia.</p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card grid grid-cols-2 bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src="https://i.ibb.co.com/0t3nV5x/chef1.jpg"
                                alt="Album" />
                        </figure>
                        <div className="card-body">
                            <h2 className="font-bold text-5xl mb-8 text-center pt-16">Henry Potter</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolore velit minima eligendi optio iusto, tempora ipsum ad quos, atque consectetur perspiciatis. Expedita, adipisci. Vero voluptas itaque mollitia, tempora, id culpa iure temporibus laborum, laudantium nemo quia sapiente? Iure excepturi tenetur quam, ipsa itaque fugiat maxime voluptates tempore, quidem non repudiandae deserunt facere veritatis quos asperiores, id nemo dignissimos quia.</p>
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