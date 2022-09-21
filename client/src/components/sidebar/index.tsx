import ReactPaginate from "react-paginate";
import { useEffect, useRef, useState } from "react";

import { StyleSidebarType } from "../../common/Type";

const Sidebar = () => {
    const [scroll, setScroll] = useState<number>(0);
    const refContainer = useRef<any>();
    const refElement = useRef<any>();

    let style: Object = {
        position: 'static',
        top: 'auto',
        bottom: 'auto',
        width: 'auto'
    };

    let prevScrollPos: number = window.pageYOffset;

    let checkPrevScrollWhenFixed = 0;
    let checkScrollWhenAbsolute = 0;
    let getScrollPosWhenFixed = 0;
    

    const styleSideOnScroll = (position: string, getTopPos: number | string, bottom: string | number, width: any) => {
        let newStyle: StyleSidebarType = {
            position: position,
            top: getTopPos,
            bottom: bottom,
            width: width !== 'auto' ? (window.innerWidth >= 1280 ? width : '285px') : 'auto'
        };

        Object.assign(refElement.current.style, newStyle);
    }

    const onScrollStyleFixed = () => {
        if (window.innerWidth >= 1024) {
            const getOffsetTop: number = refContainer.current.offsetTop;
            const screenHeight: number = window.innerHeight;
            const heightElement: number = refElement.current.offsetHeight;
            const currentScrollPos: number = window.pageYOffset;

            let getInitialHidden: number = getOffsetTop - screenHeight;
            let getScrollToBottomElement: number = heightElement + getInitialHidden + 32; // 32px margin-bottom 
            let getFixedHidden: number = heightElement - screenHeight; // if result < 0 is not hidden 
            let getTopPos: number = currentScrollPos - getScrollToBottomElement;

            if (heightElement <= screenHeight) {

                let newStyle: StyleSidebarType = {
                    position: 'sticky',
                    top: `32px`,
                    bottom: 'auto',
                    width: 'auto'
                };

                Object.assign(refElement.current.style, newStyle);
            } else {
                if (prevScrollPos > currentScrollPos) {
                    if (checkPrevScrollWhenFixed === 0) {
                        let newStyle: StyleSidebarType = {
                            position: 'absolute',
                            top: `${getTopPos}px`,
                            bottom: 'auto',
                            width: 'auto'
                        };

                        Object.assign(refElement.current.style, newStyle);

                        getScrollPosWhenFixed = currentScrollPos;

                        checkPrevScrollWhenFixed = 1;
                    }

                    if (getScrollPosWhenFixed - currentScrollPos >= getFixedHidden + 32 + 32) { // 32px margin bottom 32px margin top
                        let newStyle: StyleSidebarType = {
                            position: 'fixed',
                            top: '32px',
                            bottom: 'auto',
                            width: window.innerWidth >= 1280 ? '370px' : '285px'
                        };

                        Object.assign(refElement.current.style, newStyle);
                    }
                } else {
                    if (checkPrevScrollWhenFixed === 0) {
                        if (currentScrollPos >= getScrollToBottomElement) {
                            let newStyle: StyleSidebarType = {
                                position: 'fixed',
                                top: 'auto',
                                bottom: '0',
                                width: window.innerWidth >= 1280 ? '370px' : '285px'
                            };

                            Object.assign(refElement.current.style, newStyle);

                            styleSideOnScroll('fixed', 'auto', 0, '370px');
                        }
                    } else {
                        console.log(33)
                    }
                }
            }



            prevScrollPos = currentScrollPos;

            // console.log('getInitialHidden', getInitialHidden);
            // console.log('getScrollToBottomElement', getScrollToBottomElement);


            // console.log('screenHeight: ', screenHeight)
            // console.log('getOffsetTop: ', getOffsetTop)
            // console.log('heightElement: ', heightElement)
            // console.log('currentScrollPos: ', currentScrollPos)
            // console.log('getTopPos: ', getTopPos)
            // console.log("###########")
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScrollStyleFixed);
    }, []);

    return (
        <div className="relative w-full lg:w-1/3 lg:pl-6 lg:pb-20 mt-8 lg:mt-0" ref={refContainer}>
            <div className="mb-8" style={style} ref={refElement}>
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