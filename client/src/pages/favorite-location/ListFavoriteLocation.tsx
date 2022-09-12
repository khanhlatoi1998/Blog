import "swiper/css/navigation";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import { FavoriteLocationType } from "../../common/Type";

import FavoriteLocation from "./FavoriteLocation";

const listFavorite: FavoriteLocationType[] = [
    { id: 1, title: 'NHA TRANG', image: './Images/favorite/dat-lat.jpg', link: '' },
    { id: 2, title: 'NHA TRANG', image: './Images/favorite/dat-lat.jpg', link: '' },
    { id: 3, title: 'NHA TRANG', image: './Images/favorite/dat-lat.jpg', link: '' },
    { id: 4, title: 'NHA TRANG', image: './Images/favorite/dat-lat.jpg', link: '' },
    { id: 5, title: 'NHA TRANG', image: './Images/favorite/dat-lat.jpg', link: '' },
    { id: 6, title: 'NHA TRANG', image: './Images/favorite/dat-lat.jpg', link: '' },
];

const ListFavoriteLocation = () => {
    return (
        <section className="">
            <div className="container__responsive">
                <div className="text-center">
                    <h1 className="font-bold text-xl">Những Địa Điểm Được Yêu Thích Nhất</h1>
                </div>
                <div className="mt-8">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={true}
                        autoplay={{
                            delay: 3000
                        }}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {
                            listFavorite.map((favoriteLocation) => {
                                return(
                                    <SwiperSlide key={favoriteLocation.id}>
                                        <FavoriteLocation  favoriteLocation={favoriteLocation}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default ListFavoriteLocation;