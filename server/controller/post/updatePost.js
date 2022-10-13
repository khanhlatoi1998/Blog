import db from "../../config.js";

const collection = db.collection('blog');

export const updatePost = async (req, res, next) => {
    try {
        const data = req.body.data;
        const post = data.post;
        console.log(data);
    
        const addPost = collection.updateOne(
            {username: data.username, 'listPost.id': post.id},
            {
                $set: {
                    'listPost.$.id': post.id,
                    'listPost.$.conscious': post.conscious,
                    'listPost.$.category': post.category,
                    'listPost.$.title': post.title,
                    'listPost.$.content': post.content,
                    'listPost.$.like': post.like,
                    'listPost.$.share': post.share,
                    'listPost.$.createDate': post.createDate,
                    'listPost.$.updateDate': post.updateDate
                }
            }
        );
        res.status(200);
    } catch (error) {
        
    }
};