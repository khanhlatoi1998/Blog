import { useState } from "react";

import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { NavLink, useParams, useSearchParams } from "react-router-dom";

import Sidebar from "../../components/sidebar";
import ListPostCategory from "./ListPostCategory";
import ListTopPostCategory from "./ListTopPostCategory";

const Category = () => {
    const [open, setOpen] = useState<boolean>(false);

    const { category } = useParams();
    console.log('cate',category);
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('tinh'));


    return (
        <section className="pt-8 lg:pb-12 lg:bg-color_14">
            <div className="container__responsive lg:px-12">
                <div className="pb-8 lg:text-left text-center text-sm">
                    <div ><NavLink to="/" className="text-color_13">Trang chủ </NavLink> <span className="opacity-50"> <AiOutlineRight className="inline" /> Cẩm nang</span></div>
                    <h1 className="font-bold lg:text-3xl text-lg mt-1"> <NavLink to="?tinh=1" >CẨM NANG</NavLink></h1>
                </div>
                <div>
                    <p className="text-color_16 italic lg:px-0 px-4">Tổng hợp những homestay đẹp giá rẻ ở Việt Nam, tìm kiếm review đánh giá về homestay khách quan và đầy đủ nhất. Book phòng homestay online đơn giản dễ dàng nhất, được tư vấn miễn phí khi đặt phòng homestay trên travelblog.com</p>
                </div>

                <div className="text-sm mt-8 relative lg:px-0 px-4">
                    <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)} className="open cursor-pointer inline-block px-3 py-2 border border-solid border-color_05_border">
                        <div className="flex items-center">
                            <span>Lọc</span>
                            <AiOutlineDown className="ml-4" />
                        </div>
                    </div>
                    <ul  onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)} className={`${open ? 'block' : 'hidden'} flex flex-col gap-1 absolute top-[100%] lg:left-0 left-[20px] max-h-[500px] overflow-y-auto w-auto z-50 py-1 px-2 border border-solid border-color_02 bg-color_01`}>
                        <li className="hover:text-color_04">
                            <NavLink to="?tinh=an-giang">tinh dasd</NavLink>
                        </li>
                        <li className="hover:text-color_04">
                            <NavLink to="?tinh=an-giang">tinh  </NavLink>
                        </li>
                        <li className="hover:text-color_04">
                            <NavLink to="?tinh=an-giang">tinh dasd sdasds </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ListTopPostCategory />
                </div>
                <div className="mt-8 flex flex-row flex-wrap">
                    <ListPostCategory />

                    <Sidebar />
                </div>
            </div>
        </section>
    );
};

export default Category;