import { createContext } from 'react';
import type { AuthContextData } from './AuthContextProvider';

export interface AuthContextType {
	user: AuthContextData | null;
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
