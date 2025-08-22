import Count from "../components/Count";
import Watch from "../components/Watch";

export default function Dashboard() {
    return (
        <div className="grid grid-cols-2 min-h-screen p-8">

            <h1 className="col-span-2 text-center text-6xl font-bold text-white">Dashboard</h1>

            {/* Left Side */}
            <div className="flex items-center justify-center mb-24">
                <Watch/>
            </div>

            {/* Right Side */}
            <div className="flex items-center justify-center mb-24">
                <Count/>
            </div>
        </div>
    );
}