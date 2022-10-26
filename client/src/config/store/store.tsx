import { configureStore } from "@reduxjs/toolkit";
import reducerShowModalPopup from "./sliderPopup";
import  reducerCheckLogin  from "./sliderCheckLogin";
import reducerAuth from "./sliderAuth";
import reducerPost from "./sliderPost";
import reducerDataListPost from "./sliderDataListPost";

const rootReducer = {
    showModal: reducerShowModalPopup,
    checkLogin: reducerCheckLogin,
    auth: reducerAuth,
    post: reducerPost,
    dataListPost: reducerDataListPost
};

const store = configureStore({
    reducer: rootReducer
});

export default store;