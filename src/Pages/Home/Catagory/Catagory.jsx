import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";


import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../Components/SectionTitle";


const Catagory = () => {
    return (
        <section>
            <SectionTitle
                 heading={"Order Online"}
                subHeading={"From 11:00 am to 10:00"}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper my-28"
            >
                <SwiperSlide> <img src={slide1} alt="" />
                    <h3 className="text-3xl text-center -mt-12">SALAD</h3>
                </SwiperSlide>
                <SwiperSlide> <img src={slide2} alt="" />
                    <h3 className="text-3xl text-center -mt-12">PIZZAS</h3></SwiperSlide>
                <SwiperSlide> <img src={slide3} alt="" />
                    <h3 className="text-3xl text-center -mt-12">SOUPS</h3></SwiperSlide>
                <SwiperSlide> <img src={slide4} alt="" />
                    <h3 className="text-3xl text-center -mt-12">=DESSERTS</h3></SwiperSlide>
                <SwiperSlide> <img src={slide5} alt="" />
                    <h3 className="text-3xl text-center -mt-12">SALAD</h3></SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Catagory;