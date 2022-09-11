import { configureStore } from "@reduxjs/toolkit";
import { reducerShowModalPopup } from "./slider";


const rootReducer = {
    showModal: reducerShowModalPopup,  
};

const store = configureStore({
    reducer: rootReducer
});

export default store;