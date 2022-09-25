import ReactPaginate from "react-paginate";
import PostCategory from "./PostCategory";

const ListPostCategory = () => {
    return (
        <div className="w-full lg:w-2/3 ">
            <div className="flex flex-col gap-8">
                <PostCategory />
                <PostCategory />
                <PostCategory />
                <PostCategory />

                <div className="py-4 px-4 bg-color_01 lg:shadow-around shadow-md rounded">
                    <div>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            previousLabel="<"
                            className="flex lg:justify-start justify-center gap-1 text-sm"
                            pageLinkClassName="px-2 py-[2px] rounded-sm"
                            activeLinkClassName="bg-color_04"
                            previousLinkClassName="px-2 py-1"
                            nextLinkClassName="px-2 py-1"
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={40}
                        />
                    </div>
                    {/* <div className="text-sm">Trang 1 cua 7</div> */}
                </div>
            </div>

        </div>
    );
};

export default ListPostCategory;