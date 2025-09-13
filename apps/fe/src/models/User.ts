type User = {
	_id: string;
	name: string;
	email: string;
	avatarUrl: string;
	isVerified: boolean;
	createdAt: Date;
	updatedAt: Date;
};

const mapUser = (data: any): User => {
	return {
		_id: data._id?.toString() || data._id,
		name: data.name,
		email: data.email,
		avatarUrl: data.avatarUrl || '',
		isVerified: data.isVerified || false,
		createdAt: data.createdAt,
		updatedAt: data.updatedAt,
	};
};

export type { User };
export { mapUser };
