import { useState, useEffect, useRef } from 'react';

import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';
import { Formik, FastField, Form } from 'formik';
import * as yup from 'yup';
import storage from '../../../config/firebase/firebase';
import { ref, getDownloadURL, uploadBytesResumable, uploadString } from "firebase/storage";

import postApi from '../../../api/postApi';
import InputFiled from '../custom-fields/inputFields';
import SelectField from '../custom-fields/SelectField';
import { CATEGORY_OPTION, CONSCIOUS_OPTION } from '../../../common/Option';
import { useDispatch, useSelector } from 'react-redux';
import EditorFields from '../custom-fields/edittorFields';
import { showModal } from '../../../config/store/sliderPopup';
import { async } from '@firebase/util';

interface Post {
    conscious: string;
    category: string;
    title: string;
    content: any;
    banner: string;
    like: number;
    share: number;
}

const AddPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [post, setPost] = useState<any>([]);
    const getAuth = useSelector((state: any) => state.auth);
    const [initialValues, setInitialValues] = useState<Post>({
        conscious: '',
        category: '',
        title: '',
        content: '',
        banner: 'https://firebasestorage.googleapis.com/v0/b/blog-image-3779d.appspot.com/o/Image%2Fdefault-banner%2Fdefault-banner.jpg?alt=media&token=abc3e029-918e-4f3c-8ead-d930a45d37a1',
        like: 0,
        share: 0
    });

    const refImage = useRef<any>(null);

    const auth = useSelector((state: any) => state.auth);
    const checkLogin = useSelector((state: any) => state.checkLogin);

    const handleChange = (value: any) => {
    };

    const addPost = async (values: Post) => {
        let id = uuid();
        let date = new Date();
        let createDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        let updateDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

        await setBanner(values);

        if (checkLogin.auth === true) {
            postApi.createPost({
                ...auth,
                post: { ...values, id: id, createDate: createDate, updateDate: updateDate }
            });
            // navigate(`/w/get/${id}`);
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

    const setBanner = async (values: Post) => {
        let HTML = values.content;
        const doc = new DOMParser().parseFromString(HTML, "text/html");
        const htmlSections: any = doc.querySelectorAll('body')[0];
        let listImg = htmlSections.querySelectorAll('p > img');


        if (listImg.length > 0) {
            let firstImg = htmlSections.querySelectorAll('p > img')[0]?.src;
            setInitialValues({ ...values, banner: firstImg ? firstImg : values.banner });

            const handlePost = async () => {
                const newPost = Array.from(htmlSections.childNodes).map((el: any, index) => {
                    let imgEl: any = el.getElementsByTagName('img')[0];
                    if (imgEl) {
                        const name = uuid();
                        const storageRef = ref(storage, `Image/${auth.username}/${name}`) // path save in firebase
                        uploadString(storageRef, imgEl.src, 'data_url').then((snapshot: any) => {
                            getDownloadURL(snapshot.ref).then((url) => {
                                imgEl.src = url;
                            });
                        });

                        let stringEl = el.outerHTML;
                    }
                    return el;
                });

                return Promise.all(newPost);
            }

            const imgEl = document.getElementById('img');
            const divEl: any = document.getElementById('div');

            console.log(divEl.outerHTML)

            handlePost()
                .then((result) => {
                    console.log(result);
                    let newContent = "";

                    // divEl.append(result[0]);

                    // console.log(divEl.outerHTML);


                    result.map(el => {
                        let stringEl = el.getElementsByTagName('img')[0]?.outerHTML;
                        console.log('el', el)
                        console.log('stringEl', stringEl);
                    })
                }, (err) => { console.log(err) })

            // console.log(newContent);
        }
    };

    return (
        <section className="py-12 bg-color_14">
            <div id="div">
                <img id="img" src="https://firebasestorage.googleapis.com/v0/b/blog-image-3779d.appspot.com/o/Image%2Fkhanh123%2Fe25d8e6-4e3b-bf8a-3714-aa7a3cd504f?alt=media&token=8cbaddd0-6a4f-4301-b43d-0b54aaf2a26d" alt="" />
            </div>
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
                            // console.log(values);

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