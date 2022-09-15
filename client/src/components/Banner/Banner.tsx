import SearchForm from "../search/SearchForm";

const Banner = () => {
    return (
        <section className="pt-[52px]">
            <div className="bg-banner bg-cover bg-no-repeat bg-center min-h-[450px] flex flex-row justify-center">
                <SearchForm />
            </div>
        </section>
    );
}

export default Banner;