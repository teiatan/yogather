import { Link } from "react-router-dom"
import { AppleStoreBtnUI, ContactsUI, FeaturesUI, GooglePlayBtnUI, HeroUI, MainMotto, MainTitleUI, SingleFeatureUI, StoreBtnContainerUI } from "./StartPage.styled"
import featureImg from "../images/feauture.jpg";
const features = [
    {
        text: "effective yoga workout",
        img: featureImg
    },
    {
        text: "all yoga benefits in one app",
        img: featureImg
    },
    {
        text: "track you progress and share results",
        img: featureImg
    },
    {
        text: "personal programs",
        img: featureImg
    }
]

export const StartPage = () => {
    return (<>
        <HeroUI>
            <MainTitleUI>Yogather</MainTitleUI>
            <MainMotto>gather for yoga</MainMotto> 
            wherever you are, whenever you want
            <button><Link to="/onboarding">start</Link></button>
        </HeroUI>
        <FeaturesUI>
            {features.map(el => <SingleFeatureUI key={el.text}>
                {el.text}
                <img src={el.img} alt={el.text} width="210px"/>
            </SingleFeatureUI>)}
        </FeaturesUI>
        <ContactsUI>
            <MainMotto>Practice yoga together with yogather</MainMotto>
            join now
            <StoreBtnContainerUI>
                <AppleStoreBtnUI />
                <GooglePlayBtnUI />
            </StoreBtnContainerUI>
            
        </ContactsUI>
    </>)
}