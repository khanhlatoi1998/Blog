import db from "../../config.js";

const collection = db.collection('blog');

export const getCategory = async (req, res, next) => {
    try {
        const category = req.params.category;
        const query = req.query;

        const a = collection.find(
            query.p === 'all' && query.c === 'all'
                ? {}
                : { listPost: { $elemMatch: { $or: [{ province: query.p }, { category: query.c }, { province: 'all' }, { category: 'all' }] } } }
        ).toArray(async (err, result) => {
            if (!err) {
                const listPost = [];
                console.log(query)
                result.map((item) => {
                    item.listPost.map(post => {
                        if (query.p === 'all' && query.c !== 'all') {
                            if (post.category === query.c) {
                                listPost.push(post);
                            }
                        }
                        if (query.p === 'all' && query.c === 'all') {
                            listPost.push(post)
                        } else {
                            if (query.c === 'all') {
                                if (post.province === query.p) {
                                    listPost.push(post);
                                }
                            } else {
                                if (post.category === query.c && post.province === query.p) {
                                    listPost.push(post);
                                }
                            }
                        }
                    })
                });
                console.log(listPost)
                res.json(listPost);
                res.status(200);
            } else {
                console.log(err);
            }
        });
    } catch (error) {

    }
};