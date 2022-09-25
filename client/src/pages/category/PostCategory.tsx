import { AiOutlineRight, AiOutlineShareAlt, AiTwotoneLike } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const PostCategory = () => {
    return (
        <div className="bg-color_01 lg:shadow-around rounded">
            <div className="pt-[55%] relative cursor-pointer shadow-sm">
                <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0">
                    <div className="absolute left-0 top-0 right-0 bottom-0 flex flex-col items-start justify-end">
                        <p className="text-color_01 text-sm font-medium bg-color_13 px-1">category</p>
                    </div>
                    <picture>
                        <img className="h-full w-full object-cover" src="../Images/favorite/dat-lat.jpg" alt="" />
                    </picture>
                </div>
            </div>
            <div>
                <div className="px-6 py-4 flex flex-col gap-6">
                    <NavLink to="url" className="lg:text-xl text-lg text-center font-medium hover:text-color_04">Nhật ký cách ly 14 ngày của cô bạn 9x: “Tớ sẽ chẳng quên được đâu, Đà Nẵng trong tim tớ”!</NavLink>
                    <div className="text-center">
                        <div className="px-4 py-1 inline border-y border-solid border-color_05_border">
                            Hằng Bắp - Tháng Tư 14, 2020
                        </div>
                    </div>
                    <div className="">
                        <p className="text-color_16">Cách ly có đáng sợ như nhiều người nghĩ? Hãy cùng Wecheckin theo dõi bài viết về nhật ký cách ly 14 ngày của một bạn du học sinh về từ Hàn Quốc với những hình ảnh dễ thương, chân thật trong bối cảnh dịch Covid-19 đang diễn ra phức tạp. Hằng ngày, trên...</p>
                    </div>
                </div>
                <div className="flex items-center justify-between px-6 py-4 border-t border-solid border-color_05_border">
                    <div className="">
                        <a href="" className="flex items-center hover:text-color_04">Xem thêm  <AiOutlineRight className="text-sm" /></a>
                    </div>
                    <div className="text-sm flex gap-1 text-color_01">
                        <div className="cursor-pointer bg-color_17 px-3 py-1 rounded flex items-center justify-between">
                            <span className=" pr-2"><AiTwotoneLike /></span>
                            <span className="mr-2">Thích</span>
                            <span>0</span>
                        </div>
                        <div className="cursor-pointer bg-color_fb px-3 rounded flex items-center justify-between">
                            <span className=" pr-2"><AiOutlineShareAlt /></span>
                            <span className="mr-2">Chia sẽ</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCategory;