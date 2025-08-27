export class ApiService {
	protected backendApiUrl: string = process.env.BACKEND_API_URL || 'http://localhost:3000/api';
}
