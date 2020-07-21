import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5D6nbgBESLvA5ZurxmmBY8EKOwzLZyPKP8_T4ICYEMs'
    }
});