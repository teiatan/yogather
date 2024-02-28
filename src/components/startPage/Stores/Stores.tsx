import { Link } from "react-router-dom"
import { SectionContainer } from "../../pageLayoutComponents/SectionContainer"
import { AccentText } from "../Hero/Hero.styled"
import { AppleStoreBtnUI, GooglePlayBtnUI, HeadingUI, MainHeading, StoreBtnContainerUI, StoresContainerUI } from "./Stores.styled"

export const Stores = ({increaseClicks}:{increaseClicks:(place:string)=>void}) => {
    return(<SectionContainer>
        <StoresContainerUI>
            <MainHeading>Practice <AccentText>yoga </AccentText>together with <AccentText>yogather</AccentText></MainHeading>
            <HeadingUI>Join now</HeadingUI>
            <StoreBtnContainerUI>
                <Link to="/quiz"><AppleStoreBtnUI onClick={()=>increaseClicks("appleStore")}/></Link>
                <Link to="/quiz"><GooglePlayBtnUI onClick={()=>increaseClicks("googlePlay")}/></Link>
            </StoreBtnContainerUI>
        </StoresContainerUI>
    </SectionContainer>)
}