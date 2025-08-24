type User = {
	_id: string;
	name: string;
	email: string;
	password: string;
	avatarUrl: string;
	isVerified: boolean;
	otp?: string;
	otpExpires?: Date;
	resetPasswordToken?: string;
	resetPasswordExpires?: Date;
	createdAt: Date;
	updatedAt: Date;
};

const mapUser = (data: any): User => {
	return {
		_id: data._id?.toString() || data._id,
		name: data.name,
		email: data.email,
		password: data.password,
		avatarUrl: data.avatarUrl || '',
		isVerified: data.isVerified || false,
		otp: data.otp,
		otpExpires: data.otpExpires,
		resetPasswordToken: data.resetPasswordToken,
		resetPasswordExpires: data.resetPasswordExpires,
		createdAt: data.createdAt,
		updatedAt: data.updatedAt,
	};
};

export type { User };
export { mapUser };
