const TopView = () => {
    return (
        <section className="py-10 sm:mt-4">
            <div className="container__responsive lg:px-12 px-4">
                <div className="heading__block">
                    <h1 className="heading__main">TOP 5 BÀI VIẾT XEM NHIỀU NHẤT TRONG THÁNG </h1>
                </div>
                <div className="pt-12">
                    <div className="grid sm:grid-cols-3 gap-6">
                        <div className="relative sm:pt-[100%] pt-[35%]">
                            <div className="absolute w-full h-full top-0 left-0 cursor-pointer">
                                <div className="bg-color_08 absolute left-0 top-0 right-0 bottom-0 flex flex-column items-center justify-center">
                                    <p className="text-color_01 text-2xl font-bold">HEllo</p>
                                </div>
                                <picture>
                                    <img className="h-full w-full object-cover" src="./Images/favorite/dat-lat.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div className="relative sm:pt-[100%] pt-[35%]">
                            <div className="absolute w-full h-full top-0 left-0 cursor-pointer">
                                <div className="bg-color_08 absolute left-0 top-0 right-0 bottom-0 flex flex-column items-center justify-center">
                                    <p className="text-color_01 text-2xl font-bold">HEllo</p>
                                </div>
                                <picture>
                                    <img className="h-full w-full object-cover" src="./Images/favorite/dat-lat.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div className="relative sm:pt-[100%] pt-[35%]">
                            <div className="absolute w-full h-full top-0 left-0 cursor-pointer">
                                <div className="bg-color_08 absolute left-0 top-0 right-0 bottom-0 flex flex-column items-center justify-center">
                                    <p className="text-color_01 text-2xl font-bold">HEllo</p>
                                </div>
                                <picture>
                                    <img className="h-full w-full object-cover" src="./Images/favorite/dat-lat.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6 mt-6">
                        <div className="relative pt-[35%]">
                            <div className="absolute top-0 left-0 w-full h-full cursor-pointer">
                                <div className="bg-color_08 absolute left-0 top-0 right-0 bottom-0 flex flex-column items-center justify-center">
                                    <p className="text-color_01 text-2xl font-bold">HEllo</p>
                                </div>
                                <picture>
                                    <img className="h-full w-full object-cover" src="./Images/favorite/dat-lat.jpg" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div className="relative pt-[35%]">
                            <div className="absolute top-0 left-0 w-full h-full cursor-pointer">
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
            </div>
        </section>
    );
};

export default TopView;