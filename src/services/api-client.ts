import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '33b542e667534bf3a0583758d11cee9c',
    }
    })