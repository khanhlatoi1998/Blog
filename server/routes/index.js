import express from "express";
import { createPost } from "../controller/post/createPost.js";
import { getAllPost } from "../controller/post/getAllPost.js";
import { register } from "../controller/auth/register.js";
import { login } from "../controller/auth/login.js";


const router = express.Router();

router.post('/register', register);
router.post('/login', login);


router.post('/post', createPost);
router.get('/getAllPost', getAllPost);

export default router;