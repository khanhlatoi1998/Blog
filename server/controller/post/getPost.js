import db from "../../config.js";

const collection = db.collection('blog');

export const getPost = async (req, res, next) => {
    try {
        console.log(req.params.id);

        const a = collection.find({ listPost: { $elemMatch: { id: req.params.id } } }).toArray(async (err, result) => {
            if (!err) {
                const post = await result[0]?.listPost.filter((p) => {
                    return p.id === req.params.id;
                });

                if (post?.length > 0) {
                    res.json(post[0]);
                    res.status(200);
                }
            } else {
                console.log(err);
            }
        });
        const b = collection.find({}).toArray((err, result) => {
            // console.log(result[1]);
        });


    } catch (error) {

    }
};