import { AiOutlineComment, AiTwotoneLike } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Detail = () => {
    return (
        <section className="pt-8 pb-12 bg-color_14">
            <div className="container__responsive lg:px-12 px-4">
                <div className="flex flex-row gap-8">
                    <div className="lg:w-2/3 bg-color_01 shadow-around py-6 lg:px-6 px-4">
                        <div>
                            <div className="flex text-sm gap-4 text-color_01">
                                <div className="cursor-pointer bg-[#516eab] py-3 px-3 rounded-sm flex items-center justify-between">
                                    <span className="lg:pr-2 lg:border-r border-solid border-color_03 "><FaFacebookF /></span>
                                    <span className="pl-2 hidden lg:inline">Chia sẽ Facebook</span>
                                </div>
                                <div className="cursor-pointer bg-rose-600 py-3 px-3 rounded-sm flex items-center justify-between">
                                    <span className="lg:pr-2 lg:border-r border-solid border-color_03"><FaInstagram /></span>
                                    <span className="pl-2 hidden lg:inline">Instagram</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="cursor-pointer bg-sky-500 py-1 px-2 rounded-md flex items-center justify-between">
                                        <span className=" pr-2"><AiTwotoneLike /></span>
                                        <span className="mr-2">Thích</span>
                                        <span>0</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="cursor-pointer bg-sky-500 py-1 px-2 rounded-md flex items-center justify-between">
                                        <span className=" pr-2"><AiOutlineComment /></span>
                                        <span className="mr-2">Comment</span>
                                        <span>0</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="mt-6 text-sm font-medium opacity-70">DU LỊCH PHÚ QUỐC, LƯU TRÚ PHÚ QUỐC</p>
                                <h1 className="font-bold text-3xl mt-1">List Resort đẹp nhất ở Phú Quốc - Rất đáng để bạn tận hưởng 1 lần</h1>
                                <div className="mt-4 text-sm cursor-pointer">
                                    Bởi
                                    <span className="ml-1"> khanh134 </span>
                                    -
                                    <span> 06/23/2022</span>
                                    <span className="ml-4"><BsFillEyeFill className="text-blue-300 inline-block mb-[2px]" /> <span>
                                    </span> 101</span>
                                </div>
                                <div>
                                    <p className="pt-8 text-md">Hè đến rồi, mau mau” set up “ một buổi hẹn hò tụ tập bạn bè sau những ngày dài lê thê trên trường, công ty thôi. Nếu bạn không có bồ thì bạn đã có bè. Người yêu có thể không có nhưng nhất định phải có nhóm bạn để cùng nhau du hí mọi nơi. Cuối tuần, lại phải đau đầu chọn địa điểm gặp nhau, thật khó để quyết định. Giờ đây, bạn không phải lo nữa vì đã có Wecheckin gánh rồi, dưới đây sẽ là list các địa điểm lí tưởng tụ tập dành cho bạn.</p>
                                </div>
                                <div className="mt-8">
                                    <div className="px-4 py-4 rounded-sm border border-solid border-color_05_border inline-block">
                                        <div>
                                            <h3 className="font-bold text-lg">Nội dung chính của bài</h3>
                                        </div>
                                        <div>
                                            <ul className="flex flex-col gap-1 mt-1 text-color_15 italic text-sm">
                                                <li>
                                                    <a href="" className="hover:underline">1. Hồ điều hòa</a>
                                                </li>
                                                <li>
                                                    <a href="" className="hover:underline">1. Hồ điều hòa</a>
                                                </li>
                                                <li>
                                                    <a href="" className="hover:underline">1. Hồ điều hòa</a>
                                                </li>
                                                <li>
                                                    <a href="" className="hover:underline">1. Hồ điều hòa</a>
                                                </li>
                                                <li>
                                                    <a href="" className="hover:underline">1. Hồ điều hòa</a>
                                                </li>
                                                <li>
                                                    <a href="" className="hover:underline">Lời kết:</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-lg">
                                    <h2 className="font-bold text-2xl mt-10">1. Hồ điều hòa</h2>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                    <div className="text-center">
                                        <div className="mt-4 inline-block">
                                            <figure>
                                                <img className="" src="../Images/banner.jpg" alt="đang cập nhật anh" />
                                                <figcaption className="text-md italic text-center px-2 bg-color_03">Descrition</figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                    <h2 className="font-bold text-2xl mt-10">1. Hồ điều hòa</h2>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                    <div className="text-center">
                                        <div className="mt-4 inline-block">
                                            <figure>
                                                <img className="" src="../Images/banner.jpg" alt="đang cập nhật anh" />
                                                <figcaption className="text-md italic text-center px-2 bg-color_03">Descrition</figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                    <h2 className="font-bold text-2xl mt-10">1. Hồ điều hòa</h2>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                    <div className="text-center">
                                        <div className="mt-4 inline-block">
                                            <figure>
                                                <img className="" src="../Images/banner.jpg" alt="đang cập nhật anh" />
                                                <figcaption className="text-md italic text-center px-2 bg-color_03">Descrition</figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <h2 className="font-bold text-2xl mt-10">1. Hồ điều hòa</h2>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                    <div className="text-center">
                                        <div className="mt-4 inline-block">
                                            <figure>
                                                <img className="" src="../Images/banner.jpg" alt="đang cập nhật anh" />
                                                <figcaption className="text-md italic text-center px-2 bg-color_03">Descrition</figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                    <h2 className="font-bold text-2xl mt-10">1. Hồ điều hòa</h2>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="lg:w-1/3 h-[200px]  bg-color_01 shadow-around">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Detail;
