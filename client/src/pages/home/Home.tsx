import postApi from "../../api/postApi";

import { useEffect, useState } from "react";
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
    const [stateListConsious, setStateListConsious] = useState<Array<ValuePost>>([]);
    const [stateListTopView, setStateListTopView] = useState<Array<ValuePost>>([]);
    const [stateListHandBook, setStateListHandBook] = useState<Array<ValuePost>>([]);

    const handleListConsious = (listPost: Array<ValuePost>) => {
        const listConsious: Array<ValuePost> = [];
        const maxItemConsious = 6;

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

        const sortListConsious = listConsious.sort((a: ValuePost, b: ValuePost) => {
            return b.like - a.like;
        }).slice(0, maxItemConsious);

        setStateListConsious(sortListConsious);
    };

    const handleTopView = (listPost: Array<ValuePost>) => {
        const sortListPost = listPost.sort((a: ValuePost, b: ValuePost) => {
            return b.like - a.like;
        });
        setStateListTopView(sortListPost);
    };

    const handleHandBook = (listPost: Array<ValuePost>) => {
        const listHandBook = listPost.filter(o => o.category === 'CẨM NANG')
        setStateListHandBook(listHandBook);
    };

    useEffect(() => {
        postApi.getAll()
            .then(async (data: any) => {
                const listPost: Array<ValuePost> = [];

                await data.map((item: RegisterType, index: number) => {
                    item.listPost.map((post: ValuePost) => {
                        listPost.push(post);
                    });
                });

                handleListConsious(listPost);
                handleTopView(listPost);
                handleHandBook(listPost);

            }).catch((err) => { })
    }, []);

    return (
        <section>
            <Info />
            <ListFavoriteLocation stateListConsious={stateListConsious} />
            <TopView stateListTopView={stateListTopView}/>
            <ListHandBook stateListHandBook={stateListHandBook}/>
            <ListEntertainment />
            <ListEat />
            <ListAccommodation />
            <ListBlogShare />
        </section>
    );
};

export default Home;