import { CSSProperties, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';

import { Form, Formik, FastField } from 'formik';
import * as yup from 'yup';
import BeatLoader from "react-spinners/BeatLoader";


import { showModal } from "../../../../config/store/sliderPopup";
import { checkLogin } from "../../../../config/store/sliderCheckLogin";
import InputFiled from "../../custom-fields/inputFields";
import authApi from '../../../../api/authApi';


interface Register {
    username: number | string;
    password: number | string;
    passwordConfirmation: number | string;
};

interface Message {
    auth: boolean;
    message: string;
}

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "blue",
    textAlign: 'center'
};

const initialValues: Register = {
    username: '',
    password: '',
    passwordConfirmation: ''
};

const Register: React.FC = (props) => {
    const dispath = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const check = useSelector((state: any) => state.checkLogin);

    console.log(check);

    const [message, setMessage] = useState<Message>({
        auth: false,
        message: ''
    });

    const clickClosePopup = () => {
        dispath(showModal('closePopup'));
    };

    const clickShowPoppup = (e: string) => {
        dispath(showModal(e));
    };

    const validationSchema = yup.object().shape({
        username: yup.string().required('vui lòng nhập tài khoản').min(6, 'nhập ít nhất 6 ký tự'),
        password: yup.string().required('vui lòng nhập mật khẩu').min(6, 'nhập ít nhất 6 ký tự'),
        passwordConfirmation: yup.string().required('vui lòng xác nhận mật khẩu').oneOf([yup.ref('password'), null], 'xác nhận mật khẩu không đúng'),
    });

    const submitRegister = async (values: Register) => {
        setLoading(true);

        authApi.register(values).then((res: any) => {
            setLoading(false);
            setMessage(res);
            if (res.auth === true) {
                dispath(showModal('closePopup'));
                dispath(checkLogin(true));
            }
        }).catch((err) => { console.log(err); })
    };

    return (
        <div className="p-6 bg-login text-color_01 sm:w-500 w-[94%] mx-auto rounded-lg">
            <div className="text-right">
                <span className="cursor-pointer p-2" onClick={() => clickClosePopup()}>
                    <AiOutlineClose className="text-2xl mr-0 ml-auto inline" />
                </span>
            </div>

            <div className="px-14">
                <p className="text-center lg:text-2xl text-lg">ĐĂNG KÝ</p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submitRegister}
                >
                    {formikProps => {
                        const { values, errors, touched, isSubmitting } = formikProps;
                        // console.log(values);

                        return (
                            <Form className="mt-10">
                                <FastField
                                    name="username"
                                    label="TÀI KHOẢN"
                                    placeholder=""
                                    component={InputFiled}
                                />
                                <FastField
                                    name="password"
                                    label="MẬT KHẨU"
                                    type="password"
                                    placeholder=""
                                    component={InputFiled}
                                />
                                <FastField
                                    name="passwordConfirmation"
                                    label="XÁC NHẬN MẬT KHẨU"
                                    type="password"
                                    placeholder=""
                                    component={InputFiled}
                                />

                                <p className={`min-h-[20px] text-sm text-[#ff7600] ${message ? 'opacity-100' : 'opacity-100'}`}>{message?.message}</p>

                                <BeatLoader color="red" cssOverride={override} loading={loading} size={20} />

                                <div className="bg-color_01  mt-2">
                                    <button id="button" type="submit" className="w-full py-4 bg-color_01 text-color_02 hover:bg-color_04">REGISTER</button>
                                </div>

                                <div onClick={() => clickShowPoppup('showLogin')} className="mt-8 py-4 text-center cursor-pointer border border-solid border-transparent hover:border-color_06">ĐĂNG NHẬP</div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    );
}

export default Register;