
import "swiper/css/navigation";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import { FavoriteLocationType } from "../../common/Type";

interface Props {
    favoriteLocation: FavoriteLocationType,
}

const FavoriteLocation: React.FC<Props> = (props) => {

    const { favoriteLocation } = props;

    console.log(favoriteLocation);


    return (
        <div>
            <img src={favoriteLocation.image} alt="" />
        </div>
    );
}

export default FavoriteLocation;