const TopPostCategory = () => {
    return (
        <div className="pt-[58%] relative cursor-pointer shadow-sm">
            <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0">
                <div className="bg-text text-color_01 absolute left-0 top-0 right-0 bottom-0 flex flex-col p-4 text-sm gap-2 justify-end">
                    <div className="">
                        <p className="bg-color_18 px-1 inline-block">Name</p>
                    </div>
                    <div className="font-bold">Tổng hợp những homestay đẹp giá rẻ ở Việt Nam</div>
                    <div className="opacity-80"><span>Name Name</span> - <span>14 thang 4 2020</span></div>
                </div>
                <picture>
                    <img className="h-full w-full object-cover" src="../Images/favorite/dat-lat.jpg" alt="" />
                </picture>
            </div>
        </div>
    );
};

export default TopPostCategory;