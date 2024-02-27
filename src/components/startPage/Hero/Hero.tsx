import { SectionContainer } from "../../pageLayoutComponents/SectionContainer";
import { AccentText, HeroContainerUi, ImageUI, ImagesBlockUI, LeftPartContainerUI, MainHeading, OnlyDesktopUI, SmallImagesBlockUI } from "./Hero.styled";
import HeroImg from '../../../images/hero-big-phone.png';
import HeroImgS1 from '../../../images/hero-small-1.png';
import HeroImgS2 from '../../../images/hero-small-2.png';
import { Button } from "../../universal/Button";

export const Hero = () => {
    return(<SectionContainer>
        <HeroContainerUi>
            <LeftPartContainerUI>
                <MainHeading>
                    Personalized <AccentText>yoga</AccentText> training and <OnlyDesktopUI>supportive</OnlyDesktopUI> community <AccentText>in phone</AccentText>
                </MainHeading> 
                Connect with like-minded individuals, share experiences, and stay motivated on your wellness journey—
                <Button text="Get a program"/>
            </LeftPartContainerUI>
            <ImagesBlockUI>
                <ImageUI src={HeroImg}/>
                <SmallImagesBlockUI>
                    <img src={HeroImgS1} width="244px"/>
                    <img src={HeroImgS2} width="244px"/>
                </SmallImagesBlockUI>
            </ImagesBlockUI>
        </HeroContainerUi>
    </SectionContainer>)
}