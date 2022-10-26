import { createSlice } from "@reduxjs/toolkit";
import { ValuePost } from "../../common/Type";

const initialState: Array<ValuePost> = [];


const reducerDataListPost = createSlice({
    name: 'lisPostData',
    initialState: initialState,
    reducers: {
        getAllDataListPost: (state, action) => {
            return state = action?.payload;
        },
    }
});

const { reducer, actions } = reducerDataListPost;
export const { getAllDataListPost } = actions;
export default reducer;
