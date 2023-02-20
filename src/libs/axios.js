import axios from 'axios'
import { useAuthStore } from '../store/auth';

const authApi= axios.create({
    baseURL: 'http://localhost/api/v1',
    withCredentials:true
})

authApi.interceptors.request.use(config => {
    const token=useAuthStore.getState().token
    config.headers={
        Authorization: `${token}`
    }
    return config
})

export default authApi