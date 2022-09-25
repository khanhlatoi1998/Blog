import ReactPaginate from "react-paginate";
import { useEffect, useRef } from "react";

import { StyleSidebarType } from "../../common/Type";

const Sidebar = () => {
    const refContainer = useRef<any>();
    const refElement = useRef<any>();

    let style: Object = {
        position: 'static',
        top: 'auto',
        bottom: 'auto',
        width: 'auto',
    };

    let prevScrollPos: number = window.pageYOffset;

    let checkScrollBtContainer = 0;
    let checkFixedTop = 0;
    let checkFixedBottom = 0;
    let checkAbsolute = 0;
    let checkStatic = 1;
    let topWhenFixedTop = 0;

    const styleSidebarOnScroll = (position: string, getTopPos: number | string, bottom: string | number, width: any) => {
        let newStyle: StyleSidebarType = {
            position: position,
            top: getTopPos !== 'auto' ? `${getTopPos}px` : 'auto',
            bottom: bottom !== 'auto' ? `${bottom}px` : 'auto',
            width: width !== 'auto' ? (window.innerWidth >= 1280 ? width : '285px') : 'auto'
        };

        Object.assign(refElement.current.style, newStyle);
    }

    const onScrollStyleFixed = () => {
        // get top absolutee to set scroll  
        // 3 case: scroll top, scroll middle, scroll bottom

        if (window.innerWidth >= 1024) {
            const getOffsetTop: number = refContainer.current.offsetTop;
            const screenHeight: number = window.innerHeight;
            const heightElement: number = refElement.current.offsetHeight;
            const heightContainer: number = refContainer.current.offsetHeight;
            const currentScrollPos: number = window.pageYOffset;
            const space: number = 32;

            let getInitialHidden: number = getOffsetTop - screenHeight;
            let getScrollToBtElement: number = heightElement + getInitialHidden + space; // 32px margin-bottom 
            let getScrollToBtContainer = heightContainer + getOffsetTop - screenHeight - 80 + space; // 80 margin-bottom
            let getScrollHidden = heightElement - screenHeight + space + space; // 1 space when scroll bottom container, 1 space margin-top fixed
            let getHiddenFixed = heightElement - screenHeight; // if result < 0 is not hidden

            if (heightElement <= screenHeight) {
                styleSidebarOnScroll('sticky', '32', 'auto', 'auto');
            } else {
                if (prevScrollPos > currentScrollPos) {
                    if (checkScrollBtContainer === 1) {
                        if (getScrollToBtContainer - currentScrollPos >= 0 && getScrollToBtContainer - currentScrollPos >= getScrollHidden) {
                            styleSidebarOnScroll('fixed', 32, 'auto', '370px');

                            checkFixedTop = 1;
                            checkStatic = 0;
                            checkScrollBtContainer = 0;
                        }
                    }

                    if (checkAbsolute === 1) {
                        if (currentScrollPos < topWhenFixedTop + getOffsetTop - space) {
                            styleSidebarOnScroll('fixed', 32, 'auto', '370px');

                            checkFixedTop = 1;
                            checkAbsolute = 0;
                            checkFixedBottom = 0;
                        }
                    }

                    if (checkFixedBottom === 1) {
                        topWhenFixedTop = currentScrollPos - getOffsetTop - space - getHiddenFixed;
                        styleSidebarOnScroll('absolute', topWhenFixedTop, 'auto', 'auto');

                        checkAbsolute = 1;
                        checkFixedBottom = 0;
                        checkFixedTop = 0;
                        checkStatic = 0;
                    }

                    if (currentScrollPos - getOffsetTop + space <= 0) {
                        styleSidebarOnScroll('static', 'auto', 'auto', 'auto');

                        checkScrollBtContainer = 0;
                        checkFixedTop = 0;
                        checkFixedBottom = 0;
                        checkAbsolute = 0;
                        checkStatic = 1;
                    }
                } else {
                    if (checkStatic === 1) {
                        if (currentScrollPos >= getScrollToBtElement && currentScrollPos < getScrollToBtContainer) {
                            styleSidebarOnScroll('fixed', 'auto', '0', '370px');

                            checkFixedBottom = 1;
                        }
                    }

                    if (checkFixedTop === 1) {
                        topWhenFixedTop = currentScrollPos - getOffsetTop + space;
                        styleSidebarOnScroll('absolute', topWhenFixedTop, 'auto', 'auto');

                        checkFixedTop = 0;
                        checkStatic = 0;
                        checkAbsolute = 1;
                    }

                    if (checkAbsolute === 1) {
                        if (currentScrollPos > topWhenFixedTop + getOffsetTop + getHiddenFixed + space) {
                            styleSidebarOnScroll('fixed', 'auto', '0', '370px');

                            checkAbsolute = 0;
                            checkFixedBottom = 1;
                            checkFixedTop = 0;
                        }
                    }

                    if (currentScrollPos >= getScrollToBtContainer) {
                        let topWhenBottomContainer = heightContainer - heightElement - 80;
                        styleSidebarOnScroll('absolute', topWhenBottomContainer, 'auto', 'auto');

                        checkScrollBtContainer = 1;
                        checkFixedBottom = 0;
                        checkFixedTop = 0;
                    }
                }
            }

            prevScrollPos = currentScrollPos;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScrollStyleFixed);
    }, []);

    return (
        <div className="relative w-full lg:w-1/3 lg:pl-6 lg:pb-20 mt-8 lg:mt-0" ref={refContainer}>
            <div className="mb-8" style={style} ref={refElement}>
                <div className="p-4 shadow-around rounded bg-color_01">
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

                <div className="mt-8 p-4 shadow-around rounded bg-color_01">
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