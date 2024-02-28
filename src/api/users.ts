/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Answers } from "../utils";

// const baseUrl = "https://yogather-backend.vercel.app/";
const baseUrl = "https://yogather-backend.onrender.com/";
const mockapiUrl = "https://65df9647ff5e305f32a29a13.mockapi.io/users"; // url for first 100 users
// const mockapiUrl = "https://65df9647ff5e305f32a29a13.mockapi.io/users"; // url for next 100 users
const mockapiTestUrl = "https://64a0823fed3c41bdd7a75666.mockapi.io/users";

export interface User {
    _id?: any;
    direction?: string;
    id?:string;
    answers?: Answers;
    userKey?: string
}


// register users while 1 entrance from gadgets
export const createUser = (data:User):Promise<{data:User}> => {
    return axios.post(baseUrl, data)
}

export const createUserCopy = (data:User):Promise<{data:User}> => {
    return axios.post(mockapiUrl, data)
}


// two requests for updating
export const updateUserData = (id:string|number, data:User) => {
    axios.put(`${baseUrl}${id}`, data)
}

export const updateUserCopyData = (id:string|number, data:User) => {
    axios.put(`${mockapiUrl}/${id}`, data)
}


// for statistics page
export const getData = ():Promise<{data:User}> => {
    return axios.get("https://yogather-backend.onrender.com/")
}

export const getMockapiTestData = ():Promise<{data:User}> => {
    return axios.get(mockapiTestUrl)
}

export const getMockapi1Data = ():Promise<{data:User}> => {
    return axios.get("https://65df9647ff5e305f32a29a13.mockapi.io/users")
}

export const getMockapi2Data = ():Promise<{data:User}> => {
    return axios.get("https://65df9647ff5e305f32a29a13.mockapi.io/users")
}