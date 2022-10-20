import postApi from "../../api/postApi";


import { useEffect } from "react";
import ListAccommodation from "../accommodation/ListAccommodation";
import ListBlogShare from "../blog-share/ListBlogShare";
import ListEat from "../Eat/ListEat";
import ListEntertainment from "../entertainment/ListEntertainment";
import ListFavoriteLocation from "../favorite-location/ListFavoriteLocation";
import ListHandBook from "../handbook/ListHandBook";
import Info from "../info/Info";
import TopView from "../topview/TopView";
import { RegisterType, ValuePost } from "../../common/Type";
import { number } from "yup";

const Home = () => {

    useEffect(() => {
        console.log('date');
        postApi.getAll()
            .then((data: any) => {
                const listConscious: Array<any> = [];
                // const listConscious = data.filter((item: RegisterType, index: number) => {
                //     return true;
                // });
                // console.log(listConscious);
                data.map((item: RegisterType, index: number) => {
                    // console.log(item.listPost);
                    item.listPost.map((post: ValuePost) => {
                        listConscious.push(post);
                    });
                });

                console.log(listConscious);
            }).catch((err) => {})
    }, []);

    return (
        <section>
            <Info />
            <ListFavoriteLocation />
            <TopView />
            <ListHandBook />
            <ListEntertainment />
            <ListEat />
            <ListAccommodation />
            <ListBlogShare />
        </section>
    );
};

export default Home;