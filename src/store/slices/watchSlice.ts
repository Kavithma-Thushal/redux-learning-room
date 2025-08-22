import {createSlice} from "@reduxjs/toolkit";

interface WatchState {
    tick: number;
}

const initialState: WatchState = {
    tick: 0,
};

const watchSlice = createSlice({
    name: "watch",
    initialState,
    reducers: {
        incrementTick: (state) => {
            state.tick += 1;
        },
    },
});

export const {incrementTick} = watchSlice.actions;
export default watchSlice.reducer;