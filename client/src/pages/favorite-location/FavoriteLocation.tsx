
import "swiper/css/navigation";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import { FavoriteLocationType } from "../../common/Type";

interface Props {
    favoriteLocation: FavoriteLocationType,
}

const FavoriteLocation: React.FC<Props> = (props) => {

    const { title, image } = props.favoriteLocation;


    return (
        <div className="h-full relative cursor-pointer">
            <div className="bg-color_08 absolute left-0 top-0 right-0 bottom-0 flex flex-column items-center justify-center">
                <p className="text-color_01 text-2xl font-bold">{title}</p>
            </div>
            <picture>
                <img className="h-[300px] w-full object-cover" src={image} alt="" />
            </picture>
        </div>
    );
}

export default FavoriteLocation;