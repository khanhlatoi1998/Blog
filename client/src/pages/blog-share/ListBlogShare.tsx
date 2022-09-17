import BlogShare from "./BlogShare";

const ListBlogShare = () => {
    return (
        <section className="py-6">
            <div className="container__responsive lg:px-12 px-4">
                <div className="heading__block">
                    <h1 className="heading__main">BLOG CHIA SẼ</h1>
                </div>
                <div className="flex flex-row">
                    <div className="lg:w-2/3 pt-8">
                        <BlogShare />
                        <BlogShare />
                        <BlogShare />
                        <BlogShare />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListBlogShare;