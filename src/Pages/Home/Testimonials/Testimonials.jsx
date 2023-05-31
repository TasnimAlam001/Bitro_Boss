import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '@smastrom/react-rating/style.css'

// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <SectionTitle
                heading={"TESTIMONIALS"}
                subHeading={"--- What Our Clint Say ---"}
            ></SectionTitle>

            <div>

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="flex flex-col justify-center items-center my-14 mx-24">
                                <div>

                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>

                                <p className="py-5">{review.details}</p>
                                <h3 className="text-4xl text-orange-500">{review.name}</h3>
                            </div>

                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </section>
    );
};

export default Testimonials;