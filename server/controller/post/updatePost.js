import db from "../../config.js";

const collection = db.collection('blog');

export const updatePost = async (req, res, next) => {
    try {
        const data = req.body.data;
        console.log(data);
    } catch (error) {
        
    }
};