import { configureStore } from "@reduxjs/toolkit";
import reducerShowModalPopup from "./sliderPopup";
import  reducerCheckLogin  from "./sliderCheckLogin";
import reducerAuth from "./sliderAuth";
import reducerPost from "./sliderPost";

const rootReducer = {
    showModal: reducerShowModalPopup,
    checkLogin: reducerCheckLogin,
    auth: reducerAuth,
    post: reducerPost
};

const store = configureStore({
    reducer: rootReducer
});

export default store;