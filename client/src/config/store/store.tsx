import { configureStore } from "@reduxjs/toolkit";
import reducerShowModalPopup from "./sliderPopup";
import  reducerCheckLogin  from "./sliderCheckLogin";


const rootReducer = {
    showModal: reducerShowModalPopup,
    checkLogin: reducerCheckLogin  
};

const store = configureStore({
    reducer: rootReducer
});

export default store;