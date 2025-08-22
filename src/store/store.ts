import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../store/slices/counterSlice";
import watchReducer from "../store/slices/watchSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        watch: watchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;