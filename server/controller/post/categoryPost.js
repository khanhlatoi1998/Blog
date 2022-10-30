import db from "../../config.js";

const collection = db.collection('blog');

export const getCategory = async (req, res, next) => {
    try {
        const category = req.params.category
        console.log(req.params.category);

        if (category === 'tinh') {
            const a = collection.find({ listPost: { $elemMatch: { province: category } } }).toArray(async (err, result) => {
                console.log(result)
                if (!err) {
                    const listPost = [];
    
                    result.map((item_1) => {
                        item_1.listPost.map(item_2 => {
                            if (item_2.category === category) {
                                listPost.push(item_2);
                            }
                        })
                    });
    
                    res.json(listPost);
                    res.status(200);
                } else {
                    console.log(err);
                }
            });
        } else  {
            const a = collection.find({ listPost: { $elemMatch: { category: category } } }).toArray(async (err, result) => {
                if (!err) {
                    const listPost = [];
    
                    result.map((item_1) => {
                        item_1.listPost.map(item_2 => {
                            if (item_2.category === category) {
                                listPost.push(item_2);
                            }
                        })
                    });
    
                    res.json(listPost);
                    res.status(200);
                } else {
                    console.log(err);
                }
            });
        }

    } catch (error) {

    }
};