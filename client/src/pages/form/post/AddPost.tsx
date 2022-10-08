import { useState, useEffect } from 'react';

import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';
import { Formik, FastField, Form } from 'formik';
import * as yup from 'yup';


import postApi from '../../../api/postApi';
import InputFiled from '../custom-fields/inputFields';
import SelectField from '../custom-fields/SelectField';
import { CATEGORY_OPTION, CONSCIOUS_OPTION } from '../../../common/Option';
import { useDispatch, useSelector } from 'react-redux';
import EditorFields from '../custom-fields/edittorFields';
import { updateAuth } from '../../../config/store/sliderAuth';
import { showModal } from '../../../config/store/sliderPopup';

interface Post {
    conscious: string;
    category: string;
    title: string;
    content: any;
    like: number;
    share: number;
}

const initialValues: Post = {
    conscious: '',
    category: '',
    title: '',
    content: '',
    like: 0,
    share: 0
}

const AddPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, setState] = useState<any>();
    const [post, setPost] = useState<any>([]);
    const auth = useSelector((state: any) => state.auth);
    const checkLogin = useSelector((state: any) => state.checkLogin);


    const handleChange = (value: any) => {
        setState(value);
    };

    const addPost = (values: any) => {
        let id = uuid();
        let date = 'date';
    
        if (checkLogin.auth === true) {
            postApi.createPost({ 
                ...auth, 
                post: { ...values, id: id, createDate: date }
            });
            navigate(`/w/get/${id}`);
        } else {
            dispatch(showModal('showLogin'));
        }
    };

    const validationSchema = yup.object().shape({
        title: yup.string(), //.required('vui lòng nhập tiêu đề').min(3, 'tiêu đề ít nhất 5 ký tự'),
        conscious: yup.string(), //.required('vui lòng nhập tỉnh thành'),
        category: yup.string(), //.required('vui lòng nhập thể loại'),
        content: yup.string() //.required('vui lòng nhập nội dung').min(3, 'nội dung ít nhất 30 ký tự'),
    });

    useEffect(() => {
        postApi.getAll().then((data) => {
            setPost(data);
        })

    }, []);

    return (
        <section className="py-12 bg-color_14">
            <div className="container__responsive">
                <div className="lg:w-2/5 mx-auto px-4">
                    <h2 className="lg:text-3xl text-lg font-bold">Tạo bài viết</h2>
                    <p className="mt-4 text-md opacity-70">Nội dung bài viết phải không gây ảnh hưởng đến cá nhân hoặc tập thể khác</p>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={addPost}
                    >
                        {formikProps => {
                            const { values, errors, touched, isSubmitting } = formikProps;
                            console.log(values);

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
                                        className="bg-white w-full rounded-md px-4 py-2"

                                        placeholder="Tiêu đề"
                                        component={InputFiled}
                                    />

                                    <div className='mt-4'>
                                        <FastField
                                            name="content"
                                            label=""
                                            type="text"
                                            className=""

                                            placeholder="Nội dung"
                                            component={EditorFields}
                                        />
                                    </div>

                                    <div className="mt-8 flex justify-end items-center gap-4 mr-4">
                                        <div>
                                            <div className="inline-block overflow-hidden bg-white rounded-md">
                                                <button type="button" className="font-medium py-2 px-6">Huỷ</button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bg-color_fb text-white rounded-md inline-block overflow-hidden">
                                                <button type="submit" className="font-medium py-2 px-4 ">Đăng bài</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="post__description" dangerouslySetInnerHTML={{ __html: state?.value }} />
                                    {/* {
                                        post?.map((item: any, index: any) => {
                                            return (
                                                <div key={index}>
                                                    <div className="post__description" dangerouslySetInnerHTML={{ __html: item?.content }} />
                                                </div>
                                            )
                                        })
                                    } */}
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