import db from "../../config.js";

const collection = db.collection('blog');

export const deletePost = async (req, res, next) => {
    try {
        const data = req.body.data;
        console.log(data.id);
        console.log(data.username);
        const addPost = collection.updateOne(
            { username: data.username },
            {
                $pull: { 'listPost': { id: data.id } }
            }
        )
        res.send('delete success');
        res.status(200);
    } catch (error) {

    }
};