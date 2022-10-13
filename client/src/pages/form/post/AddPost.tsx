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

interface Post {
    conscious: string;
    category: string;
    title: string;
    content: any;
    banner: string;
    like: number;
    share: number;
}

const initialValues: Post = {
    conscious: '',
    category: '',
    title: '',
    content: '',
    banner: '',
    like: 0,
    share: 0
}

const AddPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [post, setPost] = useState<any>([]);
    const refImage = useRef<any>(null);

    const auth = useSelector((state: any) => state.auth);
    const checkLogin = useSelector((state: any) => state.checkLogin);

    const handleChange = (value: any) => {
    };

    const addPost = (values: any) => {
        let id = uuid();
        let date = new Date();
        let createDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        let updateDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

        if (checkLogin.auth === true) {
            postApi.createPost({
                ...auth,
                post: { ...values, id: id, createDate: createDate, updateDate: updateDate }
            });
            // navigate(`/w/get/${id}`);
        } else {
            dispatch(showModal('showLogin'));
        }

        const file: any = document.querySelector('#file');
        const a: any = file.files[0];

        const name = uuid();

        const storageRef = ref(storage, `/files/${name}`) // path save in firebase
        const uploadTask = uploadBytesResumable(storageRef, a);

        uploadString(storageRef, 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/CABEIAMgBZAMBIgACEQEDEQH/xAAzAAACAwEBAAAAAAAAAAAAAAAAAwECBAUGAQEBAQEBAQEBAAAAAAAAAAAAAQIDBAUGB//aAAwDAQACEAMQAAAA0jD9T/O1jYFw0FDJFDYpcNEUNgXDoFDRFDSlQ0FDQUNBQ2BYwFTebFDAWaG51knp1zvnV6FLMJtizFGsucxuJQac+6htqRGq81indEYTbFYjRW5SOhFDQUNsZ5fAgcCY1ul5x0pl5s9luenBn0ujHTyMerRZ5pnoc1zzLa6WUnQ/G+VXuJXmN1Mqm3Ru83txjjn28pZlvd8lbS03dlbY6yUqNhdiKuky12FmI6F45zNqmsietCcierS45sd12evE6ve3+X3cTb2NPl+jzX7Z5ennp61Tic/1Ofr5/Hp9arv4/GJ9VzPR4ue/TmsejJl1y6yePXfLYYTfHdNpz2gJWIsJUkKxcqskxLlvzvVr5+jj6ug42eb3FdjePpx16c56KVsjPSra3zuZgzqSBZCqTEK1LKVk6cL4YT38ebFpv6PFzEb8nby4lbE9vPmGjGwazl6lT0N3Pv52O7SzjR3Wy8HT3bc+3Btvpc89fXXrPIZoTvjt1chnPt6B/C2cPZ3Hc3T5/b05i3D1QSLSGCZ6aq6yqaLuWpVn3ybnzq7eVy0p6cdK0K1ztmvXr58efSnv5lDS42NieHr1Mzs599LcEZ30q8wNua+k56+nGscxjFb5xndFwi2m1J3Zn8+vX6Pn9fm9/eZ52nLv6OOA1e5PJnO+qvBRdaUo3xZz4zd/GiE19Hi1RmitRnmVya01mq2m+axgnRt0GeT6PPnfGd86ei44zOrRc6nKQ3ZNOd1R0b56cg7SbnFn2ZNc8YxHbzMFgyKFkkFMvnM3UZhdMIBqopc0o03zSNEUNBQ0FQ4FDBOqt1fP7qWkG6sBnfVvyn467a57TTIpSx7MUmlaYS2dyN886XV6eZQ2bFzeVraZmqlyWs2gGJqaYyhpjOI+qr1asytS8C4vVmoCbodPP05412lwx0bLzJ6ky823SiXnzvgwmwMdd1awL6NdY58dCtxhNkGQ01szjyxEtbCXNdjrhX1qy8k6k3PLnq2mua/ZM2henJF5ymsNVN7MZpNYfFo596lhKxcsXDQUMKXDAXDRFDQUNBQ0sSOgUNBQ2BbYvNTNjOpmpKyyoleZ6mhK66zasTrNYvNi7WkqWJXDjn2SNBQ0FDYFw0RQyRQ0FQ0FDBFjSkjQUNBQ2BcNEXaxLWLgsuIsZFLGAoaUoaChoihobBkcfUsYChpShpIqHAkaUoaCZbAoaWKGgmWiJGgobCrGiKGQLGgobAoYUsaC4YIsYQsYChoaQMdgAAAAAAACAAAAAAFIAAEAFICSYAALAAIAAKAEIAAAAP/EACEQAAICAgMBAQEBAQAAAAAAAAESAgMEEQAFExQQFSAw/9oACAEBAAECANa0qqqqpiqqulVVXS6VVXSqq615inwNHl5oqiKqutKqqqqqqqrrSqqqutKq60sa66xWYyCoajSKI4yqqqqqqqqqqqiqqqulTz8vE1GpK6RUICKWRWMY0VdZT1Uev0qxqFMcY4vzDEljmrzVVEUjUa0QVQwx1P8AHj1FXTx6rG6mfTy6afTz6n451eYrqql1p6gdbDGxY8leiRhERrEdaVDScY4hxfkGN8wplTKnzjKXI00dfj9bjdfV1eNgTwxhHBysGzBn188G7FrEbK8+WdLs49rkZsuwUREVjL0MjL0FsbN81GsUTx/CGJZhyw68KPWYnW0dbTg1YorESNGE67MU4VuDl9d8M6LIWQsMubI0P+GvyJrjWKh4Y3XxxjgDAo6s4+PiCuEQNa1rh4eEWSunOOROfJCyEqzExXWta1/jQEYx5Gym3GnTbXIEcBHFHBzbM29mdlkrr7siyNk4fJZjzMwYkKIiuVCKnnDGHVjrpdZ8k4CULMTJpyKcgXxtr5AGOlIIP4JwjIWSM5CyJjHluRZdI3cIXVdVNFdB60dZHrI9bXizjK8dgOwtvnZK36PrqzIZAnjzj/o8JnfPLOZdlyvlbK0zaZ4RbBRHVIHIS9Y3i85tmfPKPCBECcZRXzqhRyqymcb/AF9vc2tufJ1mu2ORy2QO+b0eTlMqI6jyNnobPY2RMcaGB8U8SVJJ551UmkQgarI5Zy/tHYR7D6hk/Wc85tmXbk2TmAWb0FhkQuhEUimOHLF+YYMsWmo5EsuNsRPHlgHAjh1411JgzM5kSJCcbvb09DI8mZ8VdKq6VRGNYJyfoF2jjyoni/KK65QEazCyNspct5ve973+bZmeUzxVVdKqqupS5qMazGyJ4RxSIzF0r5WS5MW8AVRWKRjijy81QVDHOGcA9b/NPWfzv5/w/F8Zxjj/ADEKvNsLoZf1exslNnd3tkea0ogiIutKYELrm2jzQCEcP6eH8I1ocBAA/N7PJSkFVVVVVQIwjRZjmk1CnxGNHGhi+aiBhPGnjmn5xjfIMMYvzilRZ9H0/Scr6PY3mbMTw8I1oxWEIcjMjwGP8wp8k5LkweCQtcj09DYzb/FVVVUVVVdLpV1qEQAI82J736SuOQbCSNCIiqqulVdKqqul1rWtKulVVHBzX5vbbPD+60B+a0uta0q60qrrSqq6VVVV0PzZO961rWl1rWtKqqqqqqqqqqqqq6VV0q6XWtKq6VVVVVVUxVVVdKqrpVVVVFVV1rWlVVVVVVVVVVVVXSrpVVVVVVVXWtKq6VVVVVVVVXWlXX/LWta1rS60qrpVVVVVVVXWlRFVV//EADkQAAIBAQcCAggDBwUAAAAAAAABAhEDECExQVFhEiAicQQwMkJSgZGhU2KCIzNAkrHB0RNDRJPh/9oACAEBAAM/AEIV3N3F/Bx2q7js49bwPYk9CQ0hjKaXcGHYhHHe+3i7g4ODi7g4uQuxXYCriRWhTS5XYGxuhtZP6HF3BwcXcXcCufbx28X8X8DehLYadKDWg9hyTbRTJFDAZjQ4Eyo7VZpeZZ9NLSKcq5rAs4qij9xHBwVWo9iUtCiyqyXwkmdP/g65DWhwcHFz2K6FNLnsSbwjJ/I9Jn7NhaPyiz06X/GkvNpf1PTNYQ/7Y/5PS23+zjTdWkf8lu7JudnTbxImo4wbfmOWPSYKsc8StpXpwSOq0wiyMI+ziONUlgimg0/ZElkhWiWCIWiwdHuTWT6i0TyLSywlFrmg3GuqwEo1ZFOlyELYroilyELZCYmco2Q9ht0oeRGKyIvT7irhUlDKTRbaWk/qWzztJv8AUycnSr+pKdp7OGpSzl4cWVThQzbRCzjTpzIvGhDF9JHryF0uiOmDwxZ4vZKSeA4VaJRlyWkY1+5OCpJVISjWHhkTg6SSkiyylBf0ZGWNnOS4bLTqdHdwcXUWJte0hUxzIy1oRWquY3oWjp4XiSjKjQ5PUl1KNHV6UGpZYpjayHWlCcrNyUG0s2kVtK0yFF1caVRDpWBGDrQVBK5UKsU1RojJUIqXVSpZus0vkRnBuGEttxe9mtDwdNFTYXTSiHTAmuRskO5+oY7noNvNiQm8RNYqqIR/auNW8k9BJdbjjoyztMZQ+aLKNnJKziq4ZFipV6W/N1ErNqmlCzhJtREmJIVyFfiIRGK3FBYMjJuay1Ep0WRjXS5MxyuxudzGM47EbXJUMSlcSM7NJ7Cc6aEZLHcgnQjOIo5HWjpuwKCEIwMcyglqUeY+mnI2kNWbT1Y7S1LRJ+HLQtE34PkmNaUfKM7sbm2VWX2H09VB7DHTIb0JSksMPItJR6oqq4Jr2oPzJpdUVVEo1rFr5DgUZSWZ0+FsparEzVdSrdGUiknmJ6ioJi2ueQ6ZE1Uk2SURtdTHumUjiiJByq26EJvB0IQqpNeRZxl1JYkU6LEbrQbeLKSwp9CpW7rZZr2up1LCUemn3E00muByWVDehZrXEhAhGOGHkOyb8U3TQSfst+ZZTwlYKvJCa8NlD6FMrKz/AJTH91D6FGn/AKca+Q81CKYnSVFyKqayfI2kx9aTHTHuWxFEYYKOBhRCylUi4vYU/ZaoVWDqOmDoNvMdM8B5aX4trso6mA4sda1G1jJEMnJFnHnyE/3cX5stJyrWnCJSxY9ijuwvZSQk0mRcUkiMdVTZENyGjTI7ka0IrNipUwMCuNCKVWQz/uZpPASlSphmPf7lNSuohLVC3MMHfudOhlVComJEaC0HOVCctDpjV4vYnJ4qiFZx3eyJR0JIm9CTeQ28UdLPFgUGpV/uJDphIa1GtSLZFxqpr6lVgyUVmOu43g2VwqN1VRy1ZJSbGtSW5LUY1nmNvIfZxUbyiSlodCJPKOBN40+Y4nTKuBGzXs1ZJuuRObVWzqidegntQeSizx0pliRjFuUcSzo6Kj4Oh538nNzQxrUkspNEviZLce5XNiNmV7eLleyBZw2bIrBLAgvdTJOWEUjrwbZD4Sq8KG8aMdchpqmg3mqJHWVlQos0hpOlKkumn3HmzA4Kad7GMprc3lkN38C9Q6ZjuxxEpEElRoWpUwE8yHwoi1kkRs1SLKY4FXkNsroLGmRW/i5s5IatliviLDWNp9j0b8Ob/Uej/BL+Y9HejX6j0NqrtGv1HojytUvmWD9m3X1I6W0RaW0R/iRJfiRJL/ciOvtxPzoSzkRrmKg9zA4voNakq5jSo41+ZuiNK1E17RXVC3Kai3EJGDoN53K5vUfxJfMf4i+pHW1f0LNZ2kn8ix/P9Sy/OWe8iC1kQ3ZHRs8xklqye7LRrBstd2TepaaNlotSfxFpuyW7EY3K5jHU5HsxpZO5IVRCV3VdxdwcX8XcHVkiT9xjTrQoPYezG9B1yE9BrJkemkopljXFULNZSqWU9qkdCiKPEm9ET4G3jJIjrP7Fis5Nno6z/qeir3UejR9yJYxygvoWfwkH7q+xZr3UWesUWb92P2LKmUSzypEsn7sSzy6Yln8MSz2iWeyIbIjwR2Ii2FUVK0R06IXkRnDEg0xaka4MhqQ2I7CRUxY0SWpNZupUVciRPcm9SW5N6sk9WPdj3Y3v6/i/EwKDqMY7sCKzZBLMdckNvNjbxGcd7uZwcHHdxeuzg4ODi7Gt2F1Lmh7jWrXY+xCFscHBx6vg4ODg4OLuL+O6oxjGNjODjvd6F/BPu4OL1310OPV8HF3HZx38HF/HYthfwnAvV8XcXcHAheo47fP1HHquLkLtXZ5X8HBwcHF/Fy7GPs4OL//EAB4RAAICAwEBAQEAAAAAAAAAAAERAhIAAxMQBCAw/9oACAECAQECAH6222227My6Cd79G7XvZttmfQ7j9I+gbrGQ2mc9lmT67dLjZ1O6f0y3nYNkNw+iO4GOsaqv8nJCUr9LH8KMYxBiQcJO0bjvO64m5QlrlH1qMBAREQIlkkUGvBNjLTM9fHjyGsQhEBIAFnZc7OgyWCY2RIxYq1Qi2234Y0qBQRGAttv8Ntu1+l7Wta1myTK/ToZjKjLeNttvxsl+CIj+G3jbeNtv1uzbdm2222223jbb/q22D63/AP/EACERAAICAgICAwEAAAAAAAAAAAABAhEQUSAxITBAQWFg/9oACAECAQM/APjLKELnFdsjsiRRET6x9kRbJdIlxYxjLwiNGhjbGNd4TQpESN2LXpkuiRIfJ2UhLjREih34Jsl9osvm2PN9lHjheIxEXmy8MYxjR45MkNFkTQ0MfZfBeyxjHhL0fo9ktktj2PYxiEI/B6Hoeh65s3lvLQxCF8BfxX//xAAfEQACAwEBAQEAAwAAAAAAAAABEQIDEhMEABAUIDD/2gAIAQMBAQIAznOcrOUks5znIr4mvnjks45c8pCOcirgPLHwnxHy4FZ88aa6MCIiPm88xTyNHAeWnwV+QUmmzyy8VnlMZ3H09V/WIhKEBVx5iPzZM7JzkJxlHIjCg+YeWPl5mpQuhfCYHx+yZSslZKZnIyCiBLp2RqRArgK7f5Q9IvN0rLLDLezIjIp5ingfoDkaJg/P5iW9ErOc5yQhIWaMhMzkSM5EUm39nJH2efHiK8ZMTDnzxkRjWauPAVEaWPxJZznOc5QCb0ZfgHySykspJZSSzlZWc5ys5zlLOcrKzlJJf5JJJJJJL//EACQRAAICAQQBBAMAAAAAAAAAAAABAhFRECExQSADMEBhEjJg/9oACAEDAQM/APg2IWjHqxjXnJ8Ingngm1ZNEovcovYn0h9ohV0Q0oQhCYhFdDe9Dsm2it2RS3IpcERN3pKMtiUOGSRNqifsIg92QaIXwIXghJCbJSbK51s/JEiQl+x6S5IVsyuyuyy34xXJGuRMRtsNm/i+EepIlyUWMoSEhMREiJ8G/heiIEWU7JmRMiiNUU/Boft0JiEUXpvqsapdEcEMEH0RwRwLAhkiQ8iyRyLIsn2ffihdD0SKFgi9GMfwG9a/h//Z', 'data_url').then(() => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
            });
        });
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
        setBanner();
    }, []);

    const setBanner = () => {
        let HTML = "<p>khanh</p><p>ad</p><p>khanh</p><p>ad</p><p><img src='../Images/default-banner.jpg'/></p><p><img src='s'/></p>";
        const doc = new DOMParser().parseFromString(HTML, "text/html");
        const htmlSections: any = doc.querySelectorAll('body')[0];
        let firstImg = htmlSections.querySelectorAll('p > img')[0].src;
        console.log(firstImg);
        refImage.current.onload = () => {
            const thisImg = refImage.current;
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = thisImg.naturalWidth;
            canvas.height = thisImg.naturalHeight;


            ctx?.drawImage(thisImg, 0, 0);
            const dataURL = canvas.toDataURL('image/jpeg');
            console.log(dataURL);
        }
    };

    return (
        <section className="py-12 bg-color_14">
            <img ref={refImage} id="canvas" src="../Images/default-banner.jpg" alt="" />
            <img src="data:image/jpeg;base64,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" alt="" />
            <div className="container__responsive">
                <div className="lg:w-2/5 mx-auto px-4">
                    <h2 className="lg:text-3xl text-lg font-bold">Tạo bài viết</h2>
                    <p className="mt-4 text-md opacity-70">Nội dung bài viết phải không gây ảnh hưởng đến cá nhân hoặc tập thể khác</p>

                    <input
                        id="file"
                        type='file'
                        name="file"
                    />

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