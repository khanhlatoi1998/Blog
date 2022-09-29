import ReactPaginate from "react-paginate";
import BlogShare from "./BlogShare";

const ListBlogShare = () => {
    return (
        <section className="pt-12 sm:pb-6">
            <div className="container__responsive lg:px-12 px-4">
                <div className="heading__block">
                    <h1 className="heading__main">BLOG CHIA SẼ</h1>
                </div>
                <div className="flex flex-row">
                    <div className="lg:w-2/3 py-8">
                        <div>
                            <BlogShare />
                            <BlogShare />
                            <BlogShare />
                            <BlogShare />
                        </div>
                        <div>
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">"
                                previousLabel="<"
                                className="flex lg:justify-center justify-end  gap-1 mx-auto text-sm mt-2"
                                pageLinkClassName="px-2 py-[2px] rounded-sm"
                                activeLinkClassName="bg-color_04 text-color_01"
                                previousLinkClassName="px-2 py-1"
                                nextLinkClassName="px-2 py-1"
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={2}
                                pageCount={40}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListBlogShare;