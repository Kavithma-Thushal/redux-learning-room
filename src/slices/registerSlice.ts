import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface RegisterState {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const initialState: RegisterState = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
};

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setField: (state, action: PayloadAction<{ field: string; value: string }>) => {
            const {field, value} = action.payload;
            (state as any)[field] = value;
        },
        resetForm: () => initialState,
    },
});

export const {setField, resetForm} = registerSlice.actions;
export default registerSlice.reducer;