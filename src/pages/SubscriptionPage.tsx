import { Link, useNavigate } from "react-router-dom"
import { ButtonUI as HeaderButton } from "../components/Header/Header.styled"
import { ButtonUI } from "../components/universal/Button.styled"
import { AccentTextUI, DescriptionTextUI, InsideContainerUI, Logo, MonthAmount, NotSmallestUI, OldPriceUI, OnePlanUI, OnlyDesktopUI, PerDayText, PlansContainerUI, PricePerDay, PricePerPeriodUI, SubscriptionContainerUI } from "./SubscriptionPage.styled"
import { getUserAnswers, updateUserAnswers } from "../utils"

export const SubscriptionPage = () => {
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

    const navigate = useNavigate();
    return (<SubscriptionContainerUI>
        <InsideContainerUI>
            <Link to="/"><Logo /></Link>

            <DescriptionTextUI>Get <AccentTextUI>unlimited</AccentTextUI> access for <AccentTextUI>personalized</AccentTextUI> trainings</DescriptionTextUI>

            <PlansContainerUI>
                <OnePlanUI onClick={()=>{increaseClicks("1monthSubscription");navigate("/email")}}>
                    <MonthAmount>1</MonthAmount>
                    month plan 
                    <PricePerPeriodUI>$24.99</PricePerPeriodUI> 
                    <OldPriceUI>$2.00</OldPriceUI> 
                    <PricePerDay>$0.83</PricePerDay>
                    <PerDayText>per day</PerDayText>
                    <NotSmallestUI><ButtonUI>Get <OnlyDesktopUI>plan</OnlyDesktopUI></ButtonUI></NotSmallestUI>
                </OnePlanUI>

                <OnePlanUI onClick={()=>{increaseClicks("3monthSubscription");navigate("/email")}}>
                    <MonthAmount>3</MonthAmount>
                    month plan
                    <PricePerPeriodUI>$44.99</PricePerPeriodUI>
                    <OldPriceUI>$1.62</OldPriceUI>
                    <PricePerDay>$0.49</PricePerDay>
                    <PerDayText>per day</PerDayText>
                    <NotSmallestUI><HeaderButton>Get <OnlyDesktopUI>plan</OnlyDesktopUI></HeaderButton></NotSmallestUI>
                </OnePlanUI>

                <OnePlanUI onClick={()=>{increaseClicks("12monthSubscription");navigate("/email")}}>
                    <MonthAmount>12</MonthAmount>
                    month plan
                    <PricePerPeriodUI>$84.99</PricePerPeriodUI>
                    <OldPriceUI>$1.62</OldPriceUI>
                    <PricePerDay>$0.23</PricePerDay>
                    <PerDayText>per day</PerDayText>
                    <NotSmallestUI><ButtonUI>Get <OnlyDesktopUI>plan</OnlyDesktopUI></ButtonUI></NotSmallestUI>
                </OnePlanUI>

            </PlansContainerUI>

        </InsideContainerUI>
    </SubscriptionContainerUI>)
}