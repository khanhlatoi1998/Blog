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
import { changeValuePost } from '../../../config/store/sliderPost';
import { ValuePost } from '../../../common/Type';

const AddPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [post, setPost] = useState<any>([]);
    const initialValuePost = useSelector((state: any) => state.post);
    const auth = useSelector((state: any) => state.auth);
    const checkLogin = useSelector((state: any) => state.checkLogin);
    console.log(initialValuePost);

    const addPost = async (values: ValuePost) => {
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

    const setBanner = async (values: ValuePost) => {
        let HTML = values.content;
        const doc = new DOMParser().parseFromString(HTML, "text/html");
        const htmlSections: any = doc.querySelectorAll('body')[0];
        let listImg = htmlSections.querySelectorAll('p > img');

        if (listImg.length > 0) {
            let firstImg = htmlSections.querySelectorAll('p > img')[0]?.src;
            dispatch(changeValuePost({ ...values, banner: firstImg ? firstImg : values.banner }));

            const handlePost = async () => {
                const newPost: any = Array.from(htmlSections.childNodes).map(async (el: any, index) => {
                    let imgEl: any = el.getElementsByTagName('img');
                    if (imgEl.length > 0) {
                        const name = uuid();
                        const storageRef = ref(storage, `Image/${auth.username}/${name}`) // path save in firebase
                        let stringEl = await uploadString(storageRef, imgEl[0].src, 'data_url').then(async (snapshot: any) => {
                            await getDownloadURL(snapshot.ref).then((url) => {
                                imgEl[0].src = url;
                            });
                            return el.outerHTML;
                        });
                        return stringEl;
                    } else {
                        let stringEl = el.outerHTML;
                        return stringEl;
                    }
                });

                return Promise.all(newPost);
            }

            handlePost()
                .then((result) => {
                    console.log('re', result);
                    let newContent = "";

                    // divEl.append(result[0]);

                    result.map(el => {
                        newContent += el;
                    })

                    console.log(newContent);
                }, (err) => { console.log(err) })
        }
    };

    return (
        <section className="py-12 bg-color_14">
            <div className="container__responsive">
                <div className="lg:w-2/5 mx-auto px-4">
                    <h2 className="lg:text-3xl text-lg font-bold">Tạo bài viết</h2>
                    <p className="mt-4 text-md opacity-70">Nội dung bài viết phải không gây ảnh hưởng đến cá nhân hoặc tập thể khác</p>

                    <Formik
                        initialValues={initialValuePost}
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