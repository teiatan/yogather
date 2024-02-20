import { Link } from "react-router-dom"
import { AppleStoreBtnUI, ContactsUI, FeaturesUI, GooglePlayBtnUI, HeroUI, MainMotto, MainTitleUI, StoreBtnContainerUI } from "./StartPage.styled"

export const StartPage = () => {
    return (<>
        <HeroUI>
            <MainTitleUI>Yogather</MainTitleUI>
            <MainMotto>gather for yoga</MainMotto> 
            wherever you are, whenever you want
            <button><Link to="/onboarding">start</Link></button>
        </HeroUI>
        <FeaturesUI>
            Features
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