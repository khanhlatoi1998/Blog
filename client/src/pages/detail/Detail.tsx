import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Content from "../../components/content/content";
import Sidebar from "../../components/sidebar";
import postApi from "../../api/postApi";


const Detail = () => {
    const [searchParams] = useSearchParams();
    const [post, setPost] = useState<any>({});
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        
        postApi.getId(id)
            .then((data) => {
                setPost(data);
            }).catch((err) => console.log(err))
    }, []);

    return (
        <section className="lg:pt-8 lg:pb-12 bg-color_14">
            <div className="container__responsive lg:px-12">
                <div className="flex flex-row  flex-wrap">
                    <Content post={post} />

                    <Sidebar />
                </div>
            </div>
        </section>
    );
};

export default Detail;
