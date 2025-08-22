import {useState} from "react";
import RegisterController from "../../controllers/RegisterController.ts";

export default function Register() {
    const {form, register, handleChange} = RegisterController();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const openEye = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neonBlue" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        </svg>
    );

    const closeEye = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neonBlue" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.943-9.543-7a9.964 9.964 0 012.277-3.766m2.224-2.224A9.958 9.958 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.957 9.957 0 01-1.518 3.18M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18"/>
        </svg>
    );

    return (
        <div
            className="flex items-center justify-center min-h-screen p-8">
            <div
                className="bg-white/30 backdrop-blur-lg shadow-lg rounded-3xl p-12 w-[550px] border border-white/30 flex flex-col items-center">
                <h2 className="text-6xl font-bold mb-10">REGISTER</h2>
                <form onSubmit={register} className="w-full space-y-6">

                    <input
                        name="name"
                        placeholder="Name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/30 rounded-lg px-6 py-3 shadow-inner focus:outline-none focus:ring-4 focus:border-transparent transition placeholder-black"
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/30 rounded-lg px-6 py-3 shadow-inner focus:outline-none focus:ring-4 focus:border-transparent transition placeholder-black"
                    />

                    <div className="relative">
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                            value={form.password}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/30 rounded-lg px-6 py-3 shadow-inner focus:outline-none focus:ring-4 focus:border-transparent transition placeholder-black"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                            tabIndex={-1}
                            aria-label={showPassword ? "Hide password" : "Show password"}>
                            {showPassword ? closeEye : openEye}
                        </button>
                    </div>

                    <div className="relative">
                        <input
                            name="password_confirmation"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            required
                            value={form.password_confirmation || ""}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/30 rounded-lg px-6 py-3 shadow-inner focus:outline-none focus:ring-4 focus:border-transparent transition placeholder-black"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                            tabIndex={-1}
                            aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}>
                            {showConfirmPassword ? closeEye : openEye}
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <button type="submit"
                                className="bg-blue-400 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition duration-300 px-10 mt-5">REGISTER
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
