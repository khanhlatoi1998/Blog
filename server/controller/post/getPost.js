import db from "../../config.js";

const collection = db.collection('blog');

export const getPost = async (req, res, next) => {
    try {
        console.log(req.params.id);


        const a = collection.find({'id': {
            $exists: true, id : {$eq: 'req.params.id'}
        }}).toArray((err, result) => {
            console.log(result);
        });


    } catch (error) {
        
    }
};