import { ILoginForm } from "./../interfaces/auth.interface";
import api, { responseBody } from "config/axios.config";
import requestHeader from "utils/request_header";

const requests = {
	post: (url: string, body: any, header: Object) => api.post(url, body, header).then(responseBody),
};

const apiService = {
	login: (credentials: ILoginForm) => requests.post(`/api/auth/login`, credentials, requestHeader()),
};

export default apiService;
