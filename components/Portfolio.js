import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const img1 = "./images/img1.png";
const img2 = "./images/img2.png";
const img3 = "./images/img3.png";
const img4 = "./images/img4.png";
const img5 = "./images/img5.png";
const img6 = "./images/img6.png";

const array = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6];

function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    while (ctr > 0) {

        index = Math.floor(Math.random() * ctr);

        ctr--;

        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

const images = shuffle(array);

function Portfolio() {
    return (
        <div className="relative mt-10">
            <div className="w-[75%] ml-48">
                <p className="outfit font-bold text-lg">Annetts Artworks</p>
            </div>
            <div className="">
                <Swiper className='mySwiper h-[600px]' grabCursor={true} slidesPerView={4} spaceBetween={10}
                    Grid cssMode={true} mousewheel={true} grid={{ rows: 2 }} modules={[Grid, Pagination, Mousewheel]} pagination={{ clickable: true }}>
                    {images.map((img) => {
                        return (<SwiperSlide key={img.key}><img className={"scale-50"} src={img} /></SwiperSlide>)
                    })}
                </Swiper>
            </div>

        </div >
    )
}

export default Portfolio