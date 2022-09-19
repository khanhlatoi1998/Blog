import ReactPaginate from "react-paginate";
import { useEffect, useRef, useState } from "react";


const Sidebar = () => {
    const [scroll, setScroll] = useState<number>(0);
    const refContainer = useRef<any>();

    const screenHeight = window.innerHeight;

    const onScrollStyleFixed = () => {
        if (window.innerWidth >= 1024) {
            const getOffset: number = refContainer?.current?.offsetTop;
            const scroll: number = window.pageYOffset;

            console.log('offset: ', getOffset)
            console.log('scroll: ', scroll)
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', onScrollStyleFixed);
    }, []);
    
    return (
        <div className="relative w-full lg:w-1/3 lg:pl-6 mt-8 lg:mt-0" ref={refContainer}>
            <div className="mb-28">
                <div className="p-4 shadow-around bg-color_01">
                    <h3 className="font-bold pb-2 border-b-[2px] border-solid border-color_15">BÀI VIẾT XEM NHIỀU</h3>
                    <div className="mt-2 flex flex-col">
                        <div className="pt-4 pb-6 items-post border-dotted">
                            <p className="text-md font-medium">Kiếm tìm cảm hứng làm việc bên trong những quán cà phê yên tĩnh...</p>
                            <div className="mt-2 text-xs text-color_11">
                                <span className="px-2 bg-color_13 text-color_01 mr-2">Khanh</span>
                                <span>Name </span>
                                <span> - </span>
                                <span> 05/2022</span>
                            </div>
                        </div>
                        <div className="pt-4 pb-6 items-post border-dotted">
                            <p className="text-md font-medium">Kiếm tìm cảm hứng làm việc bên trong những quán cà phê yên tĩnh...</p>
                            <div className="mt-2 text-xs text-color_11">
                                <span className="px-2 bg-color_13 text-color_01 mr-2">Khanh</span>
                                <span>Name </span>
                                <span> - </span>
                                <span> 05/2022</span>
                            </div>
                        </div>
                        <div className="pt-4 pb-6 items-post border-dotted">
                            <p className="text-md font-medium">Kiếm tìm cảm hứng làm việc bên trong những quán cà phê yên tĩnh...</p>
                            <div className="mt-2 text-xs text-color_11">
                                <span className="px-2 bg-color_13 text-color_01 mr-2">Khanh</span>
                                <span>Name </span>
                                <span> - </span>
                                <span> 05/2022</span>
                            </div>
                        </div>
                        <div className="pt-4 pb-6 items-post border-dotted">
                            <p className="text-md font-medium">Kiếm tìm cảm hứng làm việc bên trong những quán cà phê yên tĩnh...</p>
                            <div className="mt-2 text-xs text-color_11">
                                <span className="px-2 bg-color_13 text-color_01 mr-2">Khanh</span>
                                <span>Name </span>
                                <span> - </span>
                                <span> 05/2022</span>
                            </div>
                        </div>
                        <div className="pt-4 pb-6 items-post border-dotted">
                            <p className="text-md font-medium">Kiếm tìm cảm hứng làm việc bên trong những quán cà phê yên tĩnh...</p>
                            <div className="mt-2 text-xs text-color_11">
                                <span className="px-2 bg-color_13 text-color_01 mr-2">Khanh</span>
                                <span>Name </span>
                                <span> - </span>
                                <span> 05/2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="pb-2">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            previousLabel="<"
                            className="flex justify-start gap-1 text-sm"
                            pageLinkClassName="px-2 py-[2px] rounded-sm"
                            activeLinkClassName="bg-color_04"
                            previousLinkClassName="px-2 py-1"
                            nextLinkClassName="px-2 py-1"
                            pageRangeDisplayed={1}
                            marginPagesDisplayed={0}
                            pageCount={40}
                        />
                    </div>
                </div>

                <div className="mt-8 p-4 shadow-around bg-color_01">
                    <h3 className="font-bold pb-2 border-b-[2px] border-solid border-color_15">CHUYÊN MỤC</h3>
                    <div className="pt-4 flex flex-col">
                        <ul>
                            <li className="py-2  items-category">
                                <a href="" className="flex justify-between">
                                    <span>Ha Noi</span>
                                    <span>2</span>
                                </a>
                            </li>
                            <li className="py-2  items-category">
                                <a href="" className="flex justify-between">
                                    <span>Ha Noi</span>
                                    <span>2</span>
                                </a>
                            </li>
                            <li className="py-2  items-category">
                                <a href="" className="flex justify-between">
                                    <span>Ha Noi</span>
                                    <span>2</span>
                                </a>
                            </li>
                            <li className="py-2  items-category">
                                <a href="" className="flex justify-between">
                                    <span>Ha Noi</span>
                                    <span>2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;