import { IUser } from "interfaces/auth.interface";
import { ILoginForm } from "./../interfaces/auth.interface";
import api, { responseBody } from "config/axios.config";
import requestHeader from "utils/request_header";

const requests = {
	get: (url: string, header: Object) => api.get(url, header).then(responseBody),
	post: (url: string, body: any, header: Object) => api.post(url, body, header).then(responseBody),
};

const apiService = {
	login: (creds: ILoginForm): Promise<{ token: string }> => requests.post(`/api/auth/login`, creds, requestHeader()),
	getUser: (): Promise<IUser> => requests.get(`/api/auth/user`, requestHeader()),
};

export default apiService;
