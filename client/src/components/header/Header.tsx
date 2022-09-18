import { useState } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { showModal } from "../../config/store/slider";

import { AiOutlineDown, AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";

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


const Header = () => {
    const dispath = useDispatch();
    const [open, setOpen] = useState<boolean>(false);

    let modalPopup: string = useSelector((state: any) => state.showModal.status);

    const clickShowPoppup = (e: string) => {
        dispath(showModal(e));
    };

    const clickClosePopup = () => {
        dispath(showModal('closePopup'));
    }

    return (
        <header className="z-50 fixed inset-x-0">
            <nav className="">
                <div className="lg:px-12 px-4 bg-color_01 shadow-header">
                    <div className="flex flex-row items-center justify-between">
                        <div>
                            <a className="mr-4 text-lg font-dancing font-bold" href="/">Travel Blog</a>
                        </div>
                        <div className="lg:hidden py-4 px-4 hover:cursor-pointer" onClick={() => setOpen(o => !o)}>
                            <AiOutlineMenu style={{ fontSize: "25px" }} />
                        </div>
                        <div className={`flex-1 flex lg:flex-row flex-col lg:items-center lg:justify-between lg:static absolute right-0 bottom-0 lg:z-50 z-[-1] lg:bg-inherit bg-color_09 lg:text-inherit text-color_01 lg:w-auto sm:w-[475px] w-full transition-all duration-500 ease-in ${open ? 'translate-y-[100%]' : ''}`}>
                            <div className="flex-1 lg:order-1 order-2 lg:mt-0 mt-4">
                                <ul className="flex lg:flex-row flex-col flex-1">
                                    {
                                        items.map((item, index) => {
                                            return (
                                                <Navitems item={item} key={index} />
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="lg:order-2 order-1 lg:py-0 py-4 lg:px-0 px-2 lg:bg-inherit bg-[#1f2231]">
                                <div className="text-sm flex flex-row">
                                    <button
                                        type="button"
                                        className="lg:flex-auto flex-1 lg:font-normal font-medium px-4 py-1 border-r border-solid lg:border-color_05_border border-color_01 hover:text-color_04"
                                        onClick={() => clickShowPoppup('showLogin')}
                                    >
                                        Đăng nhập
                                    </button>
                                    <Popup open={modalPopup !== 'showLogin' ? false : true} closeOnDocumentClick onClose={modalPopup === 'showLogin' ? () => clickClosePopup() : () => { }}>
                                        <Login />
                                    </Popup>

                                    <button
                                        className="lg:flex-auto flex-1 lg:font-normal font-medium px-4 py-1 hover:text-color_04"
                                        onClick={() => clickShowPoppup('showRegister')}
                                    >
                                        Đăng ký
                                    </button>
                                    <Popup open={modalPopup !== 'showRegister' ? false : true} closeOnDocumentClick onClose={modalPopup === 'showRegister' ? () => clickClosePopup() : () => { }}>
                                        <Register />
                                    </Popup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;