import db from "../../config.js";

const collection = db.collection('blog');

export const createPost = async (req, res, next) => {
    try {
        const data = req.body.data;
        console.log(data);
    
        const addPost = collection.updateOne(
            {username: data.username},
            {
                $push: {'listPost': data.post}
            }
        )
        res.send('success')
        res.status(200);
    } catch (error) {
        
    }
};