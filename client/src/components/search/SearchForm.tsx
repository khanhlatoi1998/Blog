import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = () => {
    return (
        <div className="w-full">
            <div className="bg-transparent">
                <form action="" className="sm:max-w-[50%] max-w-[70%] rounded mx-auto flex flex-row justify-between items-center mt-12 bg-color_01  px-3 shadow-input">
                    <input
                        type="text"
                        name="search"
                        className="px-4 py-3 w-full"
                        placeholder="Tìm bài viết..."
                    />
                    <AiOutlineSearch style={{ fontSize: "18px" }} />
                </form>
            </div>
        </div>
    )
};

export default SearchForm;