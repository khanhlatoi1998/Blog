import db from "../../config.js";

const collection = db.collection('blog');

export const register = async (req, res, next) => {
    try {
        let data = req.body.data;

        const findAuth = collection.find({ username: data.username }).toArray((err, result) => {
            if (result.length <= 0) {
                const insertAuth = collection.insertOne(data);
                res.json({
                    nickname: data.nickname,
                    permission: data.permission,
                    auth: true,
                    message: 'đăng ký thành công',
                    listPost: data.listPost
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
    } catch (error) {

    }
};