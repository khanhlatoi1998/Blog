import { createSlice } from "@reduxjs/toolkit";
import { ValuePost } from "../../common/Type";

const initialState: ValuePost = {
    id: '',
    nickname: '',
    conscious: '',
    category: '',
    title: '',
    content: '',
    banner: 'https://firebasestorage.googleapis.com/v0/b/blog-image-3779d.appspot.com/o/Image%2Fdefault-banner%2Fdefault-banner.jpg?alt=media&token=abc3e029-918e-4f3c-8ead-d930a45d37a1',
    like: 100,
    share: 2,
    view: 200,
};

const reducerPost = createSlice({
    name: 'showModalPopup',
    initialState: initialState,
    reducers: {
        changeValuePost: (state, action: any) => {
            return state = action?.payload;
        },

        clearValue: (state) => {
            return state = initialState;
        }
    },
});

const { reducer, actions } = reducerPost;
export const { changeValuePost, clearValue } = actions;
export default reducer;
