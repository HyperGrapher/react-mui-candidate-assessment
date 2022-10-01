import axios, { AxiosResponse } from "axios";

const authAxios = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL, 
});

export default authAxios;

export const responseBody = (response: AxiosResponse) => response.data;
