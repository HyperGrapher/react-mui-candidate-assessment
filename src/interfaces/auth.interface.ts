export interface ILoginForm {
	email: string;
	password: string;
}

export interface IUser {
	pk: number;
	email: string;
	first_name: string;
	last_name: string;
	user_type: number;
}
