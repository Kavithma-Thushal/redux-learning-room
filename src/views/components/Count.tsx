import {useSelector, useDispatch} from "react-redux";
import type {RootState, AppDispatch} from "../../store";
import {increment, decrement} from "../../store/counterSlice";

export default function Count() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div
                className="bg-white/20 backdrop-blur-lg rounded-3xl p-12 flex flex-col items-center border border-white/30">
                <h1 className="text-7xl font-extrabold mb-10 text-yellow-300 transition-transform duration-300">{count}</h1>
                <div className="flex gap-8">
                    <button onClick={() => dispatch(decrement())}
                            className="px-8 py-4 bg-red-500 text-white text-3xl font-bold rounded-2xl hover:bg-red-600 hover:scale-110 transform transition duration-300 active:scale-95">-
                    </button>
                    <button onClick={() => dispatch(increment())}
                            className="px-8 py-4 bg-green-500 text-white text-3xl font-bold rounded-2xl hover:bg-green-600 hover:scale-110 transform transition duration-300 active:scale-95">+
                    </button>
                </div>
            </div>
        </div>
    );
}