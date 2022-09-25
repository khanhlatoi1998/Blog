import ReactPaginate from "react-paginate";
import TopPostCategory from "./TopPostCategory";

const ListTopPostCategory = () => {
    return (
        <section>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-1 mt-8">
                <TopPostCategory />
                <TopPostCategory />
                <TopPostCategory />
            </div>
        </section>
    );
}

export default ListTopPostCategory;