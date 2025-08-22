import Count from "../components/Count";
import Watch from "../components/Watch";

export default function Home() {
    return (
        <div className="grid grid-cols-2 min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8">
            {/* Left Side */}
            <div className="flex items-center justify-center">
                <Watch/>
            </div>

            {/* Right Side */}
            <div className="flex items-center justify-center">
                <Count/>
            </div>
        </div>
    );
}