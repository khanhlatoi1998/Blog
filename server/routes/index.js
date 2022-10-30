import express from "express";
import { createPost } from "../controller/post/createPost.js";
import { getAllPost } from "../controller/post/getAllPost.js";
import { register } from "../controller/auth/register.js";
import { login } from "../controller/auth/login.js";
import { getPost } from "../controller/post/getPost.js";
import { updatePost } from "../controller/post/updatePost.js";
import { deletePost } from "../controller/post/deletePost.js";
import { getCategory } from "../controller/post/categoryPost.js";


const router = express.Router();

router.post('/register', register);
router.post('/login', login);


router.post('/post/create', createPost);
router.put('/post/update', updatePost);
router.post('/post/delete/:id', deletePost);
router.get('/post/get/:id', getPost);
router.get('/post/getAllPost', getAllPost);

router.get('/category/:category', getCategory);

export default router;