import axios from "axios";

const baseUrl = "https://64a0823fed3c41bdd7a75666.mockapi.io/users";

export interface User {
    direction?: string;
    id?:string;
}

export const createUser = (data:User):Promise<{data:User}> => {
    return axios.post(baseUrl, data)
}

export const updateUserData = (id:string, data:User) => {
    axios.post(`${baseUrl}:${id}`, data)
}