import { authService } from "./../services/auth.service";

export default function requestHeader() {
	const token = authService.tokenValue;

	if (token) {
		return {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-type": "application/json",
			},
		};
	} else {
		return {
			headers: {
				"Content-type": "application/json",
			},
		};
	}
}
