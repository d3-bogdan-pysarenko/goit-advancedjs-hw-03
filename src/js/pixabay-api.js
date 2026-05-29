import axios from 'axios';

const API_KEY = '42438077-634a4b32cfcaa96ebaa8c4719';
const API_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
    const response = await axios.get(API_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    });
    return response.data;
}
