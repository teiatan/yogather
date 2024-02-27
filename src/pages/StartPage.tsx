// import { Link } from "react-router-dom"
// import { AppleStoreBtnUI, ContactsUI, FeaturesUI, GooglePlayBtnUI, HeroUI, MainMotto, MainTitleUI, SingleFeatureUI, StoreBtnContainerUI } from "./StartPage.styled"
// import featureImg from "../images/feauture.jpg";
// import { Button } from "antd";
import { getUserAnswers, updateUserAnswers } from "../utils";
import { Features } from "../components/startPage/Features/Features";
import { Hero } from "../components/startPage/Hero/Hero";
import { Stores } from "../components/startPage/Stores/Stores";
// const features = [
//     {
//         text: "effective yoga workout",
//         img: featureImg
//     },
//     {
//         text: "all yoga benefits in one app",
//         img: featureImg
//     },
//     {
//         text: "track you progress and share results",
//         img: featureImg
//     },
//     {
//         text: "personal programs",
//         img: featureImg
//     }
// ]

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
        <Hero />
        <Features />
        <Stores increaseClicks={increaseClicks}/>
    </>)
}