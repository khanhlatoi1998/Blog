import { useState } from "react";
import { AiOutlineDown, AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Popup from "reactjs-popup";
import Login from "../../pages/auth/login";
import Register from "../../pages/auth/register";
import Navitems from "./NavItems";


const defaultIconSize = '0.8rem';

const items = [
    { label: 'TRANG CHỦ', icon: <i></i>, active: true },
    { label: 'ĐỊA ĐIỂM', icon: <AiOutlineDown size={defaultIconSize} />, active: true },
    { label: 'ẨM THỰC', icon: <AiOutlineDown size={defaultIconSize} />, active: true },
    { label: 'CẨM NANG', icon: <AiOutlineDown size={defaultIconSize} />, active: true },
    { label: 'HOMESTAY', icon: <AiOutlineDown size={defaultIconSize} />, active: true },
    { label: 'TOP LIST', icon: <AiOutlineDown size={defaultIconSize} />, active: true },
]


const Menu = () => {
    const [open, setOpen] = useState<boolean>(false);
    const closeModal = (o: any) => setOpen(false);


    return (
        <header className="z-50 fixed inset-x-0">
            <nav className="">
                <div className="px-12 bg-color_01 shadow-header">
                    <div className="flex flex-row items-center justify-between">
                        <div className="lg:hidden py-2 px-4 hover:cursor-pointer">
                            <AiOutlineMenu style={{ fontSize: "25px" }} />
                        </div>
                        <div className="flex-1 lg:block hidden">
                            <ul className="flex flex-row">
                                {
                                    items.map((item, index) => {
                                        return (
                                            <Navitems item={item} key={index} />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="">
                            <div className="text-sm flex flex-row">
                                <button
                                    type="button"
                                    className="px-4 py-1 border-r border-solid border-color_05_border hover:text-color_04"
                                    onClick={() => setOpen(o => !o)}
                                >
                                    Đăng nhập
                                </button>
                                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                                    <Login closeModal={closeModal} />
                                </Popup>

                                <button
                                    onClick={() => setOpen(o => !o)}
                                    className="px-4 py-1 hover:text-color_04"
                                >
                                    Đăng ký
                                </button>
                                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                                    <Register closeModal={closeModal} />
                                </Popup>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Menu;