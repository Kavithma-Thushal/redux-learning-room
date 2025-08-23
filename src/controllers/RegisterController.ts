import axios from "axios";
import {BASE_URL} from "../api/api.ts";
import {useNavigate} from "react-router-dom";
import {successNotification, errorNotification} from "../util/alert.ts";
import {useSelector, useDispatch} from "react-redux";
import type {RootState, AppDispatch} from "../store/store.ts";
import {setField, resetForm} from "../store/slices/registerSlice.ts";

export default function RegisterController() {
    const form = useSelector((state: RootState) => state.register);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setField({field: e.target.name as keyof typeof form, value: e.target.value}));
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
            const response = await axios.post(`${BASE_URL}/register`, form);
            successNotification(response.data.message);
            dispatch(resetForm());
            navigate("/dashboard");
        } catch (error: any) {
            errorNotification(Object.values(error.response.data.error));
        }
    };

    return {
        form,
        handleChange,
        handleRegister
    };
}