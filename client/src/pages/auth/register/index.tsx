import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from "../../../config/store/slider";


const Register: React.FC = (props) => {
    const dispath = useDispatch();
    
    const clickClosePopup = () => {
        dispath(showModal('closePopup'));
    };

    const clickShowPoppup = (e : string) => {
        dispath(showModal(e));
    };

    return (
        <div className="p-6 bg-login text-color_01 sm:w-500 w-[94%] mx-auto rounded-lg">
            <div className="text-right">
                <span className="cursor-pointer p-2" onClick={() => clickClosePopup()}>
                    <AiOutlineClose className="text-2xl mr-0 ml-auto inline" />
                </span>
            </div>
            <form action="">
                <div className="px-14">
                    <p className="text-center text-2xl">ĐĂNG KÝ</p>

                    <div className="mt-12">
                        <label htmlFor="">TÀI KHOẢN</label>
                        <input className="w-full px-4 py-1 bg-transparent border-b border-solid border-color_06" type="text" name="username" />
                    </div>
                    <div className="mt-8">
                        <label htmlFor="passwork">MẬT KHẨU</label>
                        <input className="w-full px-4 py-1 bg-transparent border-b border-solid border-color_06" type="text" name="passwork" />
                    </div>

                    <button className="w-full mt-8 py-4 bg-color_01 text-color_02 hover:bg-color_04">REGISTER</button>

                    <div onClick={() => clickShowPoppup('showLogin')} className="mt-8 py-4 text-center cursor-pointer border border-solid border-transparent hover:border-color_06">ĐĂNG NHẬP</div>
                </div>

            </form>
        </div>
    );
}

export default Register;