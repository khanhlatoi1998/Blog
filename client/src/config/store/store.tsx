import { configureStore } from "@reduxjs/toolkit";
import reducerShowModalPopup from "./sliderPopup";
import  reducerCheckLogin  from "./sliderCheckLogin";
import reducerAuth from "./sliderAuth";


const rootReducer = {
    showModal: reducerShowModalPopup,
    checkLogin: reducerCheckLogin,
    auth: reducerAuth
};

const store = configureStore({
    reducer: rootReducer
});

export default store;