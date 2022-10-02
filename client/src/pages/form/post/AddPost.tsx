import { useState, useRef, useMemo, useEffect } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

import EditorToolbar, { modules, formats } from "./EditorToolbar";

import postApi from '../../../api/postApi';



const AddPost = () => {
    const [state, setState] = useState<any>();
    const [post, setPost] = useState<any>([]);
    const navigate = useNavigate();


    const handleChange = (value: any) => {
        setState(value);
      };


    const addPost = (e: any) => {
        e.preventDefault();
        let id = uuid();

        console.log('addpost');

        postApi.createPost(state);
        // postApi.getAll();

        // navigate(`/detail/w?getpost=${id}`);
    };  

    useEffect(() => {
        postApi.getAll().then((data) => {
            setPost(data);
            console.log(data);
        })
        
    }, []);

    return (
        <section className="py-12 bg-color_14">
            <div className="container__responsive">
                <div className="lg:w-2/5 mx-auto px-4">
                    <h2 className="lg:text-3xl text-lg font-bold">Tạo bài viết</h2>
                    <p className="mt-4 text-md opacity-70">Nội dung bài viết phải không gây ảnh hưởng đến cá nhân hoặc tập thể khác</p>
                    <form action="" onSubmit={addPost} className="mt-8 flex flex-col">
                        <select className="bg-white w-full rounded-md px-4 py-2" name="" id="">
                            <option value="">Thể loại</option>
                        </select>

                        <input className="mt-4 bg-white w-full rounded-md px-4 py-2" type="text" name="" id="" placeholder="Tiêu đề" />

                        <div className='mt-4'>
                            <EditorToolbar />
                            <ReactQuill
                                theme="snow"
                                value={state}
                                onChange={handleChange}
                                modules={modules}
                                formats={formats}
                                placeholder="Nội dung"
                                className="bg-white" />
                        </div>

                        <div className="mt-8 text-right">
                            <button className="font-medium py-2 px-6 bg-white rounded-md">Huỷ</button>
                            <button className="font-medium bg-color_fb text-white mr-4 ml-2 py-2 px-4 rounded-md">Đăng bài</button>
                        </div>

                        <div className="post__description" dangerouslySetInnerHTML={{ __html: state?.value}}  />
                        {
                            post?.map((item: any, index: any) => {
                                return (
                                    <div key={index}>
                                        <div className="post__description" dangerouslySetInnerHTML={{ __html: item?.content}}  />
                                    </div>
                                )
                            })
                        }


                    </form>state
                </div>
            </div>
        </section>
    );
};

export default AddPost;