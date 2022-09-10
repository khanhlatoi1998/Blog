import { AiOutlineDown, AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
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
    return (
        <header>
            <nav className="bg-stone-900">
                <div className="lg:container mx-auto px-12">
                    <div className="flex flex-row items-center justify-between">
                        <div className="md:hidden p-2 hover:cursor-pointer">
                            <AiOutlineMenu style={{fontSize: "25px", color: "white"}}/>
                        </div>
                        <div className="flex-1 md:block hidden">
                            <ul className="flex flex-row border-l border-solid border-color_03 text-white font-bold">
                                {
                                    items.map((item, index) => {
                                        return (
                                            <Navitems item={item} key={index} />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <form action="" className="flex flex-row">
                                <input
                                    type="text"
                                    name="search"
                                    className="bg-transparent placeholder:text-right px-4 text-white" 
                                    placeholder="Tìm bài viết..."
                                />
                                <AiOutlineSearch style={{color: "white", fontSize: "18px"}}/>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;