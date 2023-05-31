import OrderCard from "./OrderCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
// import { useState } from "react";

const OrderTab = ({ items }) => {

    // const [newItems, setNewItems] = useState([]);

    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + (index + 1) + "</span>";
    //     },
    // };

    // if(items.length>0){
    //     const totalItems =items.slice(0,5);
    //     setNewItems(totalItems);
    // }
    // else{
    //     setNewItems(items);
    // }



    return (
        <div >
            {/* 
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >

                
                <SwiperSlide>

                    

                </SwiperSlide>
                <SwiperSlide>HEllo </SwiperSlide>

            </Swiper> */}


            <div className='grid md:grid-cols-3'>

                {
                    items.map(item => <OrderCard
                        key={item._id}
                        item={item}
                    ></OrderCard>)
                }
            </div>


        </div>
    );
};

export default OrderTab;