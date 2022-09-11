import { createSlice } from "@reduxjs/toolkit";
import { ModalPopup } from "../../common/Type";

const initialStateModalPopup: ModalPopup = {
    status: '',
}


const showModalPopup = createSlice({
    name: 'showModalPopup',
    initialState: initialStateModalPopup,
    reducers: {
        showModal: (state, action: any) => {
            switch (action?.payload) {
                case 'showLogin':
                case 'showRegister':
                case 'showForgotPassword':
                case 'closePopup':
                    return { status: action?.payload };
            }
        }
    },

});

const { reducer, actions } = showModalPopup;
export const { showModal } = actions;
export const reducerShowModalPopup = reducer;

