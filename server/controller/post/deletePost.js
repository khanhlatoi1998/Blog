import db from "../../config.js";

const collection = db.collection('blog');

export const deletePost = async (req, res, next) => {
    try {
        const data = req.body.data;
        const params = req.params.id;
        console.log(req.params.id);
        const addPost = collection.updateOne(
            {username: data.username},
            {
                $push: {'listPost': {name: '2'}}
            }
        )
        res.send(params);
        res.status(200);
    } catch (error) {

    }
};