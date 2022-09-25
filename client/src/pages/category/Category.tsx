import { AiOutlineRight } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import ListPostCategory from "./ListPostCategory";
import ListTopPostCategory from "./ListTopPostCategory";

const Category = () => {

    const { dia } = useParams();

    console.log(dia);


    return (
        <section className="pt-8 lg:pb-12 lg:bg-color_14">
            <div className="container__responsive lg:px-12">
                <div className="pb-8 lg:text-left text-center text-sm">
                    <div ><NavLink to="/" className="text-color_13">Trang chủ </NavLink> <span className="opacity-50"> <AiOutlineRight className="inline"/> Cẩm nang</span></div>
                    <h1 className="font-bold lg:text-3xl text-lg mt-1">CẨM NANG</h1>
                </div>
                <div>
                    <p className="text-color_16 italic lg:px-0 px-4">Tổng hợp những homestay đẹp giá rẻ ở Việt Nam, tìm kiếm review đánh giá về homestay khách quan và đầy đủ nhất. Book phòng homestay online đơn giản dễ dàng nhất, được tư vấn miễn phí khi đặt phòng homestay trên wecheckin.vn</p>
                </div>
                <div className="">
                    <select name="cars" id="cars" className="mt-4 border border-solid border-color_05_border bg-transparent px-2 text-sm py-1">
                        <option value="volvo">TỈNH</option>
                        <option value="saab">Dat Lat </option>
                        <option value="mercedes">An Giang</option>
                        <option value="audi">Audi</option>
                        <option value="volvo">TỈNH</option>
                        <option value="saab">Dat Lat </option>
                        <option value="mercedes">An Giang</option>
                        <option value="audi">Audi</option>
                        <option value="volvo">TỈNH</option>
                        <option value="saab">Dat Lat </option>
                        <option value="mercedes">An Giang</option>
                        <option value="audi">Audi</option>
                        <option value="volvo">TỈNH</option>
                        <option value="saab">Dat Lat </option>
                        <option value="mercedes">An Giang</option>
                        <option value="audi">Audi</option>
                        <option value="volvo">TỈNH</option>
                        <option value="saab">Dat Lat </option>
                        <option value="mercedes">An Giang</option>
                        <option value="audi">Audi</option>
                        <option value="volvo">TỈNH</option>
                        <option value="saab">Dat Lat </option>
                        <option value="mercedes">An Giang</option>
                        <option value="audi">Audi</option>
                        <option value="volvo">TỈNH</option>
                        <option value="saab">Dat Lat </option>
                        <option value="mercedes">An Giang</option>
                        <option value="audi">Audi</option>
                        <option value="volvo">TỈNH</option>
                        <option value="saab">Dat Lat </option>
                        <option value="mercedes">An Giang</option>
                        <option value="audi">Audi</option>
                        <option value="volvo">TỈNH</option>
                        <option value="saab">Dat Lat </option>
                        <option value="mercedes">An Giang</option>
                        <option value="audi">Audi</option>
                        <option value="volvo">TỈNH</option>
                        <option value="saab">Dat Lat </option>
                        <option value="mercedes">An Giang</option>
                        <option value="audi">Audi</option>
                        <option value="volvo">TỈNH</option>
                        <option value="saab">Dat Lat </option>
                        <option value="mercedes">An Giang</option>
                        <option value="audi">Audi</option>
                        <option value="volvo">TỈNH</option>
                        <option value="saab">Dat Lat </option>
                        <option value="mercedes">An Giang</option>
                        <option value="audi">Audi</option>
                    </select>
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