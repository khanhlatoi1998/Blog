import db from "../../config.js";

const collection = db.collection('blog');

export const getAllPost = async (req, res, next) => {
    try {
        // const insertPost = collection.insertOne({content: req.body.data});

        const findResult = collection.find({}).toArray((err, result) => {
            res.send(result);
        });

    } catch (error) {
        
    }
};