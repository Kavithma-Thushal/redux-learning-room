import axios from "axios";
import {BASE_URL} from "../config/api.ts";

export interface RegisterForm {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export const register = async (form: RegisterForm) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, form);
        return response.data.message;
    } catch (error: any) {
        throw error.response.data.error;
    }
};