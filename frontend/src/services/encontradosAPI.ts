import axios from 'axios';
import { TOKEN_KEY } from '../store/auth/token.service';

const api = axios.create({
	baseURL: 'http://localhost:3333/api'
});

api.interceptors.request.use(async (config: any) => {
    const token = await localStorage.getItem(TOKEN_KEY);
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api

