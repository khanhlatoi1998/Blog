import db from "../../config.js";

const collection = db.collection('blog');

export const register = async (req, res, next) => {
    try {
        let data = req.body.data;

        const findAuth = collection.find({ username: data.username }).toArray((err, result) => {
            if (result <= 0) {
                // delete data['passwordConfirmation'];

                const insertAuth = collection.insertOne(data);
                res.json({
                    auth: true,
                    message: 'đăng ký thành công'
                });
                res.status(200);
            } else {
                res.json({
                    auth: false,
                    message: 'tài khoản đã tồn tại'
                });
                res.status(200);
            }
        });

        const findAuth1 = collection.find({}).toArray((err, result) => {
            console.log(result);
        });

    } catch (error) {

    }
};