import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CATEGORY_CHECK } from '../../common/Option';
import { ValuePost } from '../../common/Type';


const Footer = () => {
    const dispatch = useDispatch();
    const dataListPost = useSelector((state: any) => state.dataListPost);
    const listHandBook = dataListPost.filter((o: ValuePost) => o.category === CATEGORY_CHECK.handbook);
    const listEntertainment = dataListPost.filter((o: ValuePost) => o.category === CATEGORY_CHECK.entertainment);
    const listEat = dataListPost.filter((o: ValuePost) => o.category === CATEGORY_CHECK.eat);
    const listHomestay = dataListPost.filter((o: ValuePost) => o.category === CATEGORY_CHECK.homstay);
    const listExperience = dataListPost.filter((o: ValuePost) => o.category === CATEGORY_CHECK.experience);

    return (
        <footer className="bg-color_09 mt--8">
            <div className="container__responsive lg:px-12 px-4">
                <div className="py-12 lg:block hidden">
                    <div className="grid grid-cols-3">
                        <div className="px-2">
                            {
                                dataListPost.slice(0, 3).map((post: ValuePost) => {
                                    return (
                                        <div key={post.id} className="flex py-4 cursor-pointer">
                                            <NavLink to={`/detail/${post.id}`} className="w-[100px] h-[67px] relative">
                                                <picture>
                                                    <img className="h-full w-full object-cover" src={post.banner} alt="" />
                                                </picture>
                                            </NavLink>
                                            <div className="flex-1 ">
                                                <div className="pl-4 flex flex-col justify-between h-full">
                                                    <h3 className="content__ellipsis--title min-h-[52px] font-medium text-[16px] pb-1 relative text-color_11 hover:text-color_04">{post.title}</h3>
                                                    <p className=" text-[14px] text-color_11"><span className="px-2 bg-color_13 text-color_01 mr-2">{post.nickname}</span> {post.createDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="px-2 border-x border-solid border-color_10">
                            {
                                dataListPost.slice(3, 6).map((post: ValuePost) => {
                                    return (
                                        <div key={post.id} className="flex py-4 cursor-pointer">
                                            <NavLink to={`/detail/${post.id}`} className="w-[100px] h-[67px] relative">
                                                <picture>
                                                    <img className="h-full w-full object-cover" src={post.banner} alt="" />
                                                </picture>
                                            </NavLink>
                                            <div className="flex-1 ">
                                                <div className="pl-4 flex flex-col justify-between h-full">
                                                    <h3 className="content__ellipsis--title min-h-[52px] font-medium text-[16px] pb-1 relative text-color_11 hover:text-color_04">{post.title}</h3>
                                                    <p className=" text-[14px] text-color_11"><span className="px-2 bg-color_13 text-color_01 mr-2">{post.nickname}</span> {post.createDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="px-2 py-3 text-[16px] font-medium">
                            <ul className=" text-color_11 flex flex-col gap-y-2">
                                <li className="flex justify-between hover:text-color_04 ">
                                    <a href="#">Địa Điểm Vui Chơi</a>
                                    <p>{listEntertainment.length}</p>
                                </li>
                                <li className="flex justify-between hover:text-color_04 ">
                                    <a href="#">Ăn Uống</a>
                                    <p>{listEat.length}</p>
                                </li>
                                <li className="flex justify-between hover:text-color_04 ">
                                    <a href="#">Homestay</a>
                                    <p>{listHomestay.length}</p>
                                </li>
                                <li className="flex justify-between hover:text-color_04 ">
                                    <a href="#">Cẩm Nang</a>
                                    <p>{listHandBook.length}</p>
                                </li>
                                <li className="flex justify-between hover:text-color_04 ">
                                    <a href="#">Trải Nghiệm</a>
                                    <p>{listExperience.length}</p>
                                </li>
                                <li className="flex justify-between hover:text-color_04 ">
                                    <a href="#">Xem Nhiều Nhất</a>
                                    <p>10</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-12 border-t border-solid border-color_10 text  text-color_11">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-12">
                        <div className="pr-8 flex flex-col justify-between">
                            <p className="text-color_01 sm:text-2xl text-lg font-bold">VỀ CHÚNG TÔI</p>
                            <p className="mt-4"><span className="text-color_01 font-medium">Travelblog.vn</span> - Nơi chia sẻ kinh nghiệm du lịch, phượt và trải nghiệm thú vị trên những cung đường phiêu du.</p>
                            <p className="mt-4">Liên hệ chúng tôi:<span className="text-color_04"> travelblog@gmail.com</span>  </p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="text-color_01 sm:text-2xl text-lg font-bold">THEO DÕI CHÚNG TÔI</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row flex-wrap gap-8 mt-6">
                                    <div className="cursor-pointer rounded-sm w-[40px] h-[40px] flex items-center justify-center bg-[#ffffff08] border border-solid border-color_10 hover:text-color_12">
                                        <a href="">
                                            <FaFacebookF />
                                        </a>
                                    </div>
                                    <div className="cursor-pointer rounded-sm w-[40px] h-[40px] flex items-center justify-center bg-[#ffffff08] border border-solid border-color_10 hover:text-color_12">
                                        <a href="">
                                            <FaInstagram />
                                        </a>
                                    </div>
                                    <div className="cursor-pointer rounded-sm w-[40px] h-[40px] flex items-center justify-center bg-[#ffffff08] border border-solid border-color_10 hover:text-color_12">
                                        <a href="">
                                            <FaYoutube />
                                        </a>
                                    </div>
                                </div>
                                <p className="mt-6">© Copyright © 2022 Travelblog.vn. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;