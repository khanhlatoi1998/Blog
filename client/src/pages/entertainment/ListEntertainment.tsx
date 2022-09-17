import Entertainment from "./Entertainment";


const ListEntertainment = () => {
    return (
        <section className="pt-12">
            <div className="container__responsive lg:px-12 px-4">
                <div className="heading__block">
                    <h1 className="heading__main">ĐỊA ĐIỂM VUI CHƠI</h1>
                </div>
                <div className="py-12 grid sm:grid-cols-3 grid-cols-2 gap-x-8 lg:gap-y-14 gap-y-8">
                    <Entertainment />
                    <Entertainment />
                    <Entertainment />
                    <Entertainment />
                    <Entertainment />
                    <Entertainment />
                </div>
            </div>
        </section>
    );
};


export default ListEntertainment;