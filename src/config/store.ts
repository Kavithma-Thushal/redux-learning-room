import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice.ts";
import watchReducer from "../slices/watchSlice.ts";
import registerReducer from "../slices/registerSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        watch: watchReducer,
        register: registerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;