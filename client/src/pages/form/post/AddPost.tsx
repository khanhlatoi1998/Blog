import { useState, useRef, useMemo } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

import EditorToolbar, { modules, formats } from "./EditorToolbar";


const AddPost = () => {
    const [state, setState] = useState<any>({ value: null });
    const navigate = useNavigate();


    const handleChange = (value: any) => {
        setState({ value });
      };

    //   console.log(state);

    const onSubmit = (e: any) => {
        e.preventDefault();
        navigate('/detail/w?getpost=1');
    };  

    return (
        <section className="py-12 bg-color_14">
            <div className="container__responsive">
                <div className="lg:w-2/5 mx-auto px-4">
                    <h2 className="lg:text-3xl text-lg font-bold">Tạo bài viết</h2>
                    <p className="mt-4 text-md opacity-70">Nội dung bài viết phải không gây ảnh hưởng đến cá nhân hoặc tập thể khác</p>
                    <form action="" onSubmit={onSubmit} className="mt-8 flex flex-col">
                        <input className="bg-white w-full rounded-md px-4 py-2" type="text" name="" id="" placeholder="Tiêu đề" />

                        <div className='mt-4'>
                            <EditorToolbar />
                            <ReactQuill
                                theme="snow"
                                value={state.value}
                                onChange={handleChange}
                                modules={modules}
                                formats={formats}
                                className="bg-white" />
                        </div>

                        <div className="mt-8 text-right">
                            <button className="font-medium py-2 px-6 bg-white rounded-md">Huỷ</button>
                            <button className="font-medium bg-color_fb text-white mr-4 ml-2 py-2 px-4 rounded-md">Đăng bài</button>
                        </div>

                        <div className="post__description" dangerouslySetInnerHTML={{ __html: state?.value}}  />
                        {state?.value}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddPost;