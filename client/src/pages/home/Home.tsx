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


const Home = () => {

    useEffect(() => {
        console.log('date');
        postApi.getAll()
            .then(async (data: any) => {
                const listPost: Array<ValuePost> = [];
                const listConsious: Array<ValuePost> = [];

                await data.map((item: RegisterType, index: number) => {
                    item.listPost.map((post: ValuePost) => {
                        listPost.push(post);
                    });
                });

                const groupByConsious = Object.values(listPost.reduce((group: any, post: ValuePost) => {
                    const { conscious } = post;
                    group[conscious] = group[conscious] ?? [];
                    group[conscious].push(post);
                    return group;
                }, {}));
                
                groupByConsious.forEach((group: any) => {
                    let maxLike = Math.min(...group.map((o: ValuePost) => o.like));
                    let consioutHaveMaxLike = group.find((el: ValuePost) => el.like === maxLike);
                    listConsious.push(consioutHaveMaxLike);
                })
                
                console.log(listConsious);


            }).catch((err) => { })
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