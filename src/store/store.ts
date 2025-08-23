import {configureStore} from "@reduxjs/toolkit";
import countReducer from "./slices/countSlice.ts";
import watchReducer from "./slices/watchSlice.ts";
import registerReducer from "./slices/registerSlice.ts";

export const store = configureStore({
    reducer: {
        count: countReducer,
        watch: watchReducer,
        register: registerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;