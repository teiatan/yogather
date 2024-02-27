import { getUserAnswers, updateUserAnswers } from "../utils";
import { Features } from "../components/startPage/Features/Features";
import { Hero } from "../components/startPage/Hero/Hero";
import { Stores } from "../components/startPage/Stores/Stores";
import { Header } from "../components/Header/Header";

export const StartPage = () => {
    const increaseClicks = (place:string) => {
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
    return (<>
        <Header />
        <Hero />
        <Features />
        <Stores increaseClicks={increaseClicks}/>
    </>)
}