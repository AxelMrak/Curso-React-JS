import { instanceDefault } from "../utils/AxiosConfig/axios.config";

export const APIRequest = async () => {
    const response = await instanceDefault.get('/jokes/random');
    return response.data;
};