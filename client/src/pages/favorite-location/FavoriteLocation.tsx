
import "swiper/css/navigation";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import { FavoriteLocationType, ValuePost } from "../../common/Type";
import { NavLink } from "react-router-dom";

interface Props {
    stateConsious: ValuePost,
}

const FavoriteLocation: React.FC<Props> = (props) => {
    const {stateConsious} = props;
    const { title, banner, conscious, id } = stateConsious;

    return (
        <NavLink to={`/detail/${id}`} className="block relative cursor-pointer pt-[100%]">
            <div className="absolute w-full h-full top-0 left-0">
                <div className="bg-color_08 absolute left-0 top-0 right-0 bottom-0 flex flex-column items-center justify-center">
                    <p className="text-color_01 md:text-2xl text-md font-bold">{conscious}</p>
                </div>
                <picture>
                    <img className="h-full w-full object-cover" src={banner} alt="" />
                </picture>

            </div>
        </NavLink>
    );
}

export default FavoriteLocation;