/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Answers } from "../utils";

// const baseUrl = "https://64a0823fed3c41bdd7a75666.mockapi.io/users";
const baseUrl = "https://yogather-backend.vercel.app/";

export interface User {
    _id?: any;
    direction?: string;
    id?:string;
    answers?: Answers;
}

export const createUser = (data:User):Promise<{data:User}> => {
    return axios.post(baseUrl, data)
}

export const updateUserData = (id:string|number, data:User) => {
    axios.put(`${baseUrl}${id}`, data)
}