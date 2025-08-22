import {useSelector, useDispatch} from "react-redux";
import type {RootState, AppDispatch} from "../config/store.ts";
import {setField, resetForm} from "../slices/registerSlice.ts";
import {useNavigate} from "react-router-dom";
import {register, type RegisterForm} from "../service/RegisterService.ts";
import {successNotification, errorNotification} from "../util/alert.ts";

export default function RegisterController() {
    const form = useSelector((state: RootState) => state.register);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setField({field: e.target.name as keyof RegisterForm, value: e.target.value}));
    };

    const validateForm = () => {
        if (form.name.length < 4) {
            errorNotification("The name field must be at least 4 characters.");
            return false;
        }
        if (form.password.length < 6) {
            errorNotification("The password field must be at least 6 characters.");
            return false;
        }
        if (form.password_confirmation !== form.password) {
            errorNotification("The password confirmation does not match.");
            return false;
        }
        return true;
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;
        try {
            const response = await register(form as RegisterForm);
            successNotification(response);
            dispatch(resetForm());
            navigate("/dashboard");
        } catch (error: any) {
            errorNotification(Object.values(error));
        }
    };

    return {
        form,
        handleRegister,
        handleChange,
        validateForm
    };
}