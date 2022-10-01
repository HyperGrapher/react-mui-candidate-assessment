import { BehaviorSubject } from "rxjs";
import apiService from "./api.service";
import { ILoginForm } from "./../interfaces/auth.interface";

const tokenSubject = new BehaviorSubject(JSON.parse(localStorage.getItem("token")!));

export const authService = {
	login,
	logout,
	token$: tokenSubject.asObservable(),
	get tokenValue() {
		return tokenSubject.value;
	},
};

async function login(credentials: ILoginForm) {
	try {
		const response = await apiService.login(credentials);
		localStorage.setItem("token", JSON.stringify(response.token));
		// Causes global state update in the App component
		tokenSubject.next(response.token);
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}

// Clean up and navigate
function logout() {
	localStorage.clear();
	tokenSubject.next(null);
}
