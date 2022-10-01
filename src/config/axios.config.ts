import { authService } from "services/auth.service";
import axios, { AxiosResponse } from "axios";

const authAxios = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
});

authAxios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// Get the status code
		const status = error && error.response ? error.response.status : 0;

		// auto logout if 401 Unauthorized or 403 Forbidden response returned from api
		// For example in the Home page we call '/user' endpoint
		// if the response status code is 401 or 403 we log user out.
		if (status === 401 || status === 403) {
			authService.logout();
		}

		return Promise.reject(error);
	}
);

export default authAxios;

export const responseBody = (response: AxiosResponse) => response.data;
