import axios from 'axios';

const KEY = 'AIzaSyBWZjBl2j4DeN_INTkyJC0eDYmw0d7e8MM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});