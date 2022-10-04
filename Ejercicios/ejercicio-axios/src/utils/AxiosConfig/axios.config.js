import axios from "axios";

export const instanceDefault = axios.create({
    method: 'GET',
    baseURL: 'https://api.chucknorris.io/',
});