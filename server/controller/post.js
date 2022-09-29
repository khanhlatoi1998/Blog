import db from "../config.js";

const collection = db.collection('blog');

export const getPost = async (req, res, next) => {
    try {
        const response = collection.find({});

        console.log(response);
        // console.log(response);
    } catch (error) {
        
    }
};