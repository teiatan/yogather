import { updateUserData } from "./api/users";

export interface Answers {
    clicks?: {
        gogglePlay?: number;
        appleStore?: number;
    }
}

export const getUserAnswers = () => {
    let data;
    const locaStorageAnswers = localStorage.getItem('answers');
    if(typeof locaStorageAnswers === 'string') {data = JSON.parse(locaStorageAnswers)}
    return data
}

export const updateUserAnswers = (data: Answers) => {
    const newData = JSON.stringify(data)
    localStorage.setItem('answers', newData)
    const id = localStorage.getItem("id");
    if(id) updateUserData(id, {answers: data})
}

export const increaseClicks = (place:string) => {
    const prevAnswers = getUserAnswers()
    const prevAmount = (prevAnswers && prevAnswers?.clicks && prevAnswers?.clicks[place]) ? prevAnswers?.clicks[place] : 0
    const newAnswers = {
        ...prevAnswers,
        clicks: {
            ...prevAnswers?.clicks,
            [place]: prevAmount + 1
        }
    }
    updateUserAnswers(newAnswers)   
}