import ReactPaginate from "react-paginate";
import Eat from "./Eat";



const ListEat = () => {
    return (
        <section className="pt-12">
            <div className="container__responsive lg:px-12 px-4">
                <div className="heading__block">
                    <h1 className="heading__main">ĐỊA ĐIỂM ĂN UỐNG</h1>
                </div>
                <div className="py-12 grid sm:grid-cols-2 grid-cols-1 gap-x-8 lg:gap-y-14 gap-y-8">
                    <Eat />
                    <Eat />
                    <Eat />
                    <Eat />
                </div>
                <div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        previousLabel="<"
                        className="flex justify-end gap-1 text-sm"
                        pageLinkClassName="px-2 py-[2px] rounded-sm"
                        activeLinkClassName="bg-color_04"
                        previousLinkClassName="px-2 py-1"
                        nextLinkClassName="px-2 py-1"
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={40}
                    />
                </div>
            </div>
        </section>
    );
};

export default ListEat;