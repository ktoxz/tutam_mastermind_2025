import { User } from '@/models';
import { createContext } from 'react';

export interface AuthContextType {
	user: User | null;
	loading: boolean;
	getMe: () => Promise<void>;
	logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
	user: null,
	loading: true,
	getMe: async () => {},
	logout: async () => {},
});

export default AuthContext;
