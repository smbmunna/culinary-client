import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PartnerCard from '../../../Components/PartnerCard/PartnerCard';


const Partners = () => {

    //load partners data
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetch('partners.json')
            .then(res => res.json())
            .then(data => setPartners(data))
    }, [])


    return (
        <div>
            <h1 className="font-bold text-5xl mb-8 text-center pt-16">Our Collaborative Partners</h1>
            <div>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={250}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {
                        partners.map(partner => <SwiperSlide key={partner.id}><PartnerCard key={partner.id} image={partner.image} /></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Partners;