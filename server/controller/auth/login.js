import db from "../../config.js";

const collection = db.collection('blog');

export const login = async (req, res, next) => {
    try {
        let data = req.body.data;
        console.log(data);

        const findAuth = collection.find({ username: data.username, password: data.password}).toArray((err, result) => {
            if (result.length > 0) {
                res.json({
                    nickname: result[0].nickname,
                    listPost: result[0].listPost,
                    permission: result[0].permission,
                    auth: true,
                    message: 'đăng nhập thành công'
                });
            } else {
                res.json({
                    auth: false,
                    message: 'tài khoản hoặc mật khẩu không đúng'
                });
                res.status(200);
            }
        });

    } catch (error) {
        
    }
};