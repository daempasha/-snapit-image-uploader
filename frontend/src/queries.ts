import axios from "axios";
import { API_URL } from "./constants";

export const instance = axios.create(
    {
        baseURL: API_URL
    }
)

export const postImage = (formData: FormData) => instance.post(`/api/upload-file`, formData, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})