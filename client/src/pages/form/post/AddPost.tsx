import { useState, useRef, useMemo, useEffect } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';
import { Formik, FastField, Form } from 'formik';
import * as yup from 'yup';


import EditorToolbar, { modules, formats } from "./EditorToolbar";
import postApi from '../../../api/postApi';
import InputFiled from '../custom-fields/inputFields';
import SelectField from '../custom-fields/SelectField';
import { CATEGORY_OPTION, CONSCIOUS_OPTION } from '../../../common/Option';

interface Post {
    conscious: string;
    category: string;
    title: string;
    content: any
}

const initialValues: Post = {
    conscious: '',
    category: '',
    title: '',
    content: ''
}

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

        postApi.createPost(state);
    };

    const validationSchema = yup.object().shape({
        title: yup.string().required('vui lòng nhập tiêu đề').min(3, 'tiêu đề ít nhất 5 ký tự'),
        conscious: yup.string().required('vui lòng nhập tỉnh thành'),
        category: yup.string().required('vui lòng nhập thể loại'),
    });

    useEffect(() => {
        postApi.getAll().then((data) => {
            setPost(data);
        })

    }, []);

    console.log(CONSCIOUS_OPTION)

    return (
        <section className="py-12 bg-color_14">
            <div className="container__responsive">
                <div className="lg:w-2/5 mx-auto px-4">
                    <h2 className="lg:text-3xl text-lg font-bold">Tạo bài viết</h2>
                    <p className="mt-4 text-md opacity-70">Nội dung bài viết phải không gây ảnh hưởng đến cá nhân hoặc tập thể khác</p>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={() => console.log(2)}
                    >
                        {formikProps => {
                            const { values, errors, touched, isSubmitting } = formikProps;
                            console.log(touched);

                            return (
                                <Form className="mt-10">
                                    <div className="flex gap-4">
                                        <FastField
                                            name="conscious"
                                            className="min-w-[150px]"

                                            defaultNameTouchSelect="3"
                                            label=""
                                            placeholder="Tỉnh"
                                            component={SelectField}
                                            options={CONSCIOUS_OPTION}
                                        />
                                        <FastField
                                            name="category"
                                            className="min-w-[150px]"

                                            defaultNameTouchSelect="5"
                                            label=""
                                            placeholder="Thể loại"
                                            component={SelectField}
                                            options={CATEGORY_OPTION}
                                        />
                                    </div>
                                    <FastField
                                        name="title"
                                        label=""
                                        type="text"
                                        className="mt-4 bg-white w-full rounded-md px-4 py-2"

                                        placeholder="Tiêu đề"
                                        component={InputFiled}
                                    />

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

                                    <div className="post__description" dangerouslySetInnerHTML={{ __html: state?.value }} />
                                    {
                                        post?.map((item: any, index: any) => {
                                            return (
                                                <div key={index}>
                                                    <div className="post__description" dangerouslySetInnerHTML={{ __html: item?.content }} />
                                                </div>
                                            )
                                        })
                                    }
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </section>
    );
};

export default AddPost;