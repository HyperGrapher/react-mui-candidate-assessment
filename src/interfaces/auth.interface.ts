export interface ILoginForm {
	email: string;
	password: string;
}

interface IUserType {
	pk: number;
	email: string;
	first_name: string;
	last_name: string;
	user_type: number;
}
export type IUser = IUserType | undefined;
