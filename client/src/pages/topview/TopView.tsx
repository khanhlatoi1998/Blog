const TopView = () => {
    return (
        <section className="py-10 mt-4">
            <div className="container__responsive lg:px-12 px-6">
                <div className="heading__block">
                    <h1 className="heading__main">TOP 5 BÀI VIẾT XEM NHIỀU NHẤT TRONG THÁNG </h1>
                </div>
                <div className="pt-12">
                    <div className="columns-3 gap-6 h-400">
                        <div className="h-full relative cursor-pointer">
                            <div className="bg-color_08 absolute left-0 top-0 right-0 bottom-0 flex flex-column items-center justify-center">
                                <p className="text-color_01 text-2xl font-bold">HEllo</p>
                            </div>
                            <picture>
                                <img className="h-full w-full object-cover" src="./Images/favorite/dat-lat.jpg" alt="" />
                            </picture>
                        </div>
                        <div className="h-full relative cursor-pointer">
                            <div className="bg-color_08 absolute left-0 top-0 right-0 bottom-0 flex flex-column items-center justify-center">
                                <p className="text-color_01 text-2xl font-bold">HEllo</p>
                            </div>
                            <picture>
                                <img className="h-full w-full object-cover" src="./Images/favorite/dat-lat.jpg" alt="" />
                            </picture>
                        </div>
                        <div className="h-full relative cursor-pointer">
                            <div className="bg-color_08 absolute left-0 top-0 right-0 bottom-0 flex flex-column items-center justify-center">
                                <p className="text-color_01 text-2xl font-bold">HEllo</p>
                            </div>
                            <picture>
                                <img className="h-full w-full object-cover" src="./Images/favorite/dat-lat.jpg" alt="" />
                            </picture>
                        </div>
                    </div>
                    <div className="columns-2 gap-6 h-[250px] mt-6">
                        <div className="h-full relative cursor-pointer">
                            <div className="bg-color_08 absolute left-0 top-0 right-0 bottom-0 flex flex-column items-center justify-center">
                                <p className="text-color_01 text-2xl font-bold">HEllo</p>
                            </div>
                            <picture>
                                <img className="h-full w-full object-cover" src="./Images/favorite/dat-lat.jpg" alt="" />
                            </picture>
                        </div>
                        <div className="h-full relative cursor-pointer">
                            <div className="bg-color_08 absolute left-0 top-0 right-0 bottom-0 flex flex-column items-center justify-center">
                                <p className="text-color_01 text-2xl font-bold">HEllo</p>
                            </div>
                            <picture>
                                <img className="h-full w-full object-cover" src="./Images/favorite/dat-lat.jpg" alt="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopView;