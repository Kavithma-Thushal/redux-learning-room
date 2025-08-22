import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import type {RootState} from "../../config/store.ts";
import {incrementTick} from "../../slices/watchSlice";

export default function Watch() {
    const [time, setTime] = useState(new Date());
    const tick = useSelector((state: RootState) => state.watch.tick);
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
            dispatch(incrementTick());
        }, 1000);
        return () => clearInterval(interval);
    }, [dispatch]);

    const formatTime = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {/* Digital Clock */}
            <div className="px-10 py-6 rounded-2xl bg-white/30 backdrop-blur-lg border-2 border-white/30 shadow-lg">
                <p className="text-6xl font-mono text-white tracking-widest">
                    {formatTime(time)}
                </p>
            </div>

            {/* Redux Tick Counter */}
            <p className="text-xl text-white font-mono">
                ⏱ Redux Tick: {tick}
            </p>
        </div>
    );
}