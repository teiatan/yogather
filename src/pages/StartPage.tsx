// import { Link } from "react-router-dom"
// import { AppleStoreBtnUI, ContactsUI, FeaturesUI, GooglePlayBtnUI, HeroUI, MainMotto, MainTitleUI, SingleFeatureUI, StoreBtnContainerUI } from "./StartPage.styled"
// import featureImg from "../images/feauture.jpg";
// import { Button } from "antd";
// import { getUserAnswers, updateUserAnswers } from "../utils";
import { Hero } from "../components/startPage/Hero/Hero";
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
    // const increaseClicks = (place:string) => {
    //     const prevAnswers = getUserAnswers()
    //     const prevAmount = (prevAnswers && prevAnswers?.clicks && prevAnswers?.clicks[place]) ? prevAnswers?.clicks[place] : 0
    //     const newAnswers = {
    //         ...prevAnswers,
    //         clicks: {
    //             ...prevAnswers?.clicks,
    //             [place]: prevAmount + 1
    //         }
    //     }
    //     updateUserAnswers(newAnswers)   
    // }
    return (<>
        {/* <HeroUI>
            <MainTitleUI>Yogather</MainTitleUI>
            <MainMotto>gather for yoga</MainMotto> 
            wherever you are, whenever you want
            <Button type="primary"><Link to="/onboarding">start</Link></Button>
        </HeroUI> */}
        <Hero />
        {/* <FeaturesUI>
            {features.map(el => <SingleFeatureUI key={el.text}>
                {el.text}
                <img src={el.img} alt={el.text} width="210px"/>
            </SingleFeatureUI>)}
        </FeaturesUI>
        <ContactsUI>
            <MainMotto>Practice yoga together with yogather</MainMotto>
            join now
            <StoreBtnContainerUI>
                <AppleStoreBtnUI onClick={()=>increaseClicks("appleStore")}/>
                <GooglePlayBtnUI onClick={()=>increaseClicks("googlePlay")}/>
            </StoreBtnContainerUI>
            
        </ContactsUI> */}
    </>)
}