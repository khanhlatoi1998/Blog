const HandBook = () => {
    return (
        <div className="flex py-4">
            <div className="w-[250px] h-[130px] h-full relative cursor-pointer">
                <div className="absolute left-0 top-0 right-0 bottom-0 flex flex-column items-center justify-center">
                    <p className="text-color_01 text-2xl font-bold">HEllo</p>
                </div>
                <picture>
                    <img className="h-full w-full object-cover" src="./Images/favorite/dat-lat.jpg" alt="" />
                </picture>
            </div>
            <div className="flex-1 flex flex-col justify-center">
                <div className="pl-6">
                    <h3 className="font-bold text-xl pb-1">Top 10 Quán ăn ngon ở Nha Trang đã sưu tầm rất lâu rồi</h3>
                    <p className="mt-2 overflow-hidden line-clamp-2">Top 10 Quán ăn ngon ở Nha Trang đã sưu tầm rất lâu rồi Top 10 Quán ăn ngon ở Nha Trang đã sưu tầm rất lâu rồi Top 10 Quán ăn ngon ở Nha Trang đã sưu tầm rất lâu rồi Top 10 Quán ăn ngon ở Nha Trang đã sưu tầm rất lâu rồi</p>
                </div>
            </div>
        </div>
    );
};

export default HandBook;