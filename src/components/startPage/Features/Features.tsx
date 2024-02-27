import { SectionContainer } from "../../pageLayoutComponents/SectionContainer"
import FeatureImg1 from "../../../images/feature1.png"
import FeatureImg2 from "../../../images/feature2.png"
import FeatureImg3 from "../../../images/feauture3.png"
import FeatureImg4 from "../../../images/feauture4.png"
import FeatureImg5 from "../../../images/feauture5.png"
import FeatureImg6 from "../../../images/feauture6.png"
import { AccentHeadingUI, FeatureCOntainerUI, FeatureContainer, FeatureTextContainer, FeaturesBottom, FeaturesTop, HeadingUI, MainAccentHeadingUI, MainHeadingUI } from "./Features.styled"

export const Features = () => {
    return (<SectionContainer bgColor="#F8F8F8" styles={{paddingTop: "72px", marginTop: "140px"}}>
        <FeatureContainer>
            <MainHeadingUI>Features of Yogather</MainHeadingUI> 
            <MainAccentHeadingUI>Integrate an effective workout and balance in several ways:</MainAccentHeadingUI>

            <FeaturesTop>
                <FeatureCOntainerUI>
                    <img src={FeatureImg1} width="285px"/>
                    <FeatureTextContainer>
                        <HeadingUI><AccentHeadingUI>Workout</AccentHeadingUI> reminders and <AccentHeadingUI>notifications</AccentHeadingUI></HeadingUI>
                        Set up notifications so you exercise regularly. Personalize reminders for upcoming sessions, events, or tasks for your convenience.
                    </FeatureTextContainer>
                </FeatureCOntainerUI>
                <FeatureCOntainerUI>
                    <img src={FeatureImg2} width="285px"/>
                    <FeatureTextContainer>
                        <HeadingUI>Animated pose<br/> library suitable,<br /> for everybody</HeadingUI>
                        A comprehensive library of yoga poses with detailed instructions. Explore different poses, learn proper alignment, and practice safely.
                    </FeatureTextContainer>
                </FeatureCOntainerUI>
                <FeatureCOntainerUI>
                    <img src={FeatureImg3} width="285px"/>
                    <FeatureTextContainer>
                        <HeadingUI><AccentHeadingUI>Track</AccentHeadingUI> you progress and <AccentHeadingUI>share</AccentHeadingUI> results</HeadingUI>
                        Track your yoga practice, set goals and connect to other users. Share experiences or offer support to one another! 
                    </FeatureTextContainer>
                </FeatureCOntainerUI>
            </FeaturesTop>

            <MainHeadingUI>Personal programs</MainHeadingUI> 
            <MainAccentHeadingUI>Get a professional instructor, tailored to your needs and goals.</MainAccentHeadingUI>  
            <div style={{margin:"40px 0 84px 0"}}>Whether you're seeking to build strength, enhance flexibility, or find inner peace, our expert instructors are here to support you every step of the way. Elevate your practice with Yogather.</div>

            <FeaturesBottom>
                <img src={FeatureImg4} width="285px"/>
                <img src={FeatureImg5} width="285px"/>
                <img src={FeatureImg6} width="285px"/>
            </FeaturesBottom>

        </FeatureContainer>
    </SectionContainer>)
}