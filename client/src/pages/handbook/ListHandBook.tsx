import HandBook from "./HandBook";


const ListHandBook = () => {
    return (
        <section className="py-6">
            <div className="container__responsive lg:px-12 px-6">
                <div className="heading__block">
                    <h1 className="heading__main">CẨM NANG DU LỊCH</h1>
                </div>
                <div className="flex flex-row">
                    <div className="w-2/3 pt-8">
                        <HandBook />
                        <HandBook />
                        <HandBook />
                        <HandBook />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListHandBook;