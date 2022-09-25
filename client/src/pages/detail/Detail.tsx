import { useParams } from "react-router-dom";
import Content from "../../components/content/content";
import Sidebar from "../../components/sidebar";


const Detail = () => {

    const { detail } = useParams();

    console.log(detail)

    return (
        <section className="lg:pt-8 lg:pb-12 bg-color_14">
            <div className="container__responsive lg:px-12">
                <div className="flex flex-row  flex-wrap">
                    <Content />

                    <Sidebar />
                </div>
            </div>
        </section>
    );
};

export default Detail;
