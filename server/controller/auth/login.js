import db from "../../config.js";

const collection = db.collection('blog');

export const login = async (req, res, next) => {
    try {
        let data = req.body.data;

        const findAuth = collection.find(data).toArray((err, result) => {
            if (result.length > 0) {
                res.json({
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
        console.log(data);

    } catch (error) {
        
    }
};