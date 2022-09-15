import "swiper/css/navigation";
import "swiper/css";
import 'swiper/css/bundle';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import { FavoriteLocationType } from "../../common/Type";

import FavoriteLocation from "./FavoriteLocation";

const listFavorite: FavoriteLocationType[] = [
    { id: 1, title: 'NHA TRANG', image: './Images/favorite/dat-lat.jpg', link: '' },
    { id: 2, title: 'GIA LAI', image: './Images/favorite/gia-lai.jpg', link: '' },
    { id: 3, title: 'HỘI AN', image: './Images/favorite/hoi-an.jpg', link: '' },
    { id: 4, title: 'HUẾ', image: './Images/favorite/hue.jpg', link: '' },
    { id: 5, title: 'NHA TRANG', image: './Images/favorite/nha-trang.jpg', link: '' },
    { id: 6, title: 'VŨNG TÀU', image: './Images/favorite/vung-tau.jpg', link: '' },
];

const ListFavoriteLocation = () => {
    return (
        <section className="pb-4">
            <div className="container__responsive lg:px-12 px-6">
                <div className="text-center">
                    <h1 className="font-bold text-xl">Những Địa Điểm Được Yêu Thích Nhất</h1>
                </div>
                <div className="mt-8">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        slidesPerGroup={4}
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