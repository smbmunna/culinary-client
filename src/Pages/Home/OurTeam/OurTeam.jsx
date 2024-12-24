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
import TeacherCard from '../TeacherCard/TeacherCard';
import useFetch from '../../../Hooks/useFetch';


const OurTeam = () => {
    const [data, loading, error] = useFetch('/team.json');
    if (loading) {
        return <div className='text-2xl text-red-400'>Loading...</div>
    }
    return (
        <div className='mb-16' >
            <h1 className="font-bold text-5xl mb-8 text-center pt-16 font-RobotoCondensed">Learn From the Best</h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    data.map(teacher=><SwiperSlide key={teacher.id}><TeacherCard key={teacher.id} teacher={teacher}/></SwiperSlide>)
                }

            </Swiper>




        </div>
    );
};

export default OurTeam;