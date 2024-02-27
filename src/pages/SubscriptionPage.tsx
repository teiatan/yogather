import { Link } from "react-router-dom"
import { ButtonUI as HeaderButton } from "../components/Header/Header.styled"
import { ButtonUI } from "../components/universal/Button.styled"
import { AccentTextUI, DescriptionTextUI, InsideContainerUI, Logo, MonthAmount, NotSmallestUI, OldPriceUI, OnePlanUI, OnlyDesktopUI, PerDayText, PlansContainerUI, PricePerDay, PricePerPeriodUI, SubscriptionContainerUI } from "./SubscriptionPage.styled"

export const SubscriptionPage = () => {
    return (<SubscriptionContainerUI>
        <InsideContainerUI>
            <Link to="/"><Logo /></Link>

            <DescriptionTextUI>Get <AccentTextUI>unlimited</AccentTextUI> access for <AccentTextUI>personalized</AccentTextUI> trainings</DescriptionTextUI>

            <PlansContainerUI>
                <OnePlanUI>
                    <MonthAmount>1</MonthAmount>
                    month plan 
                    <PricePerPeriodUI>$24.99</PricePerPeriodUI> 
                    <OldPriceUI>$2.00</OldPriceUI> 
                    <PricePerDay>$0.83</PricePerDay>
                    <PerDayText>per day</PerDayText>
                    <NotSmallestUI><ButtonUI>Get <OnlyDesktopUI>plan</OnlyDesktopUI></ButtonUI></NotSmallestUI>
                </OnePlanUI>

                <OnePlanUI>
                    <MonthAmount>3</MonthAmount>
                    month plan
                    <PricePerPeriodUI>$44.99</PricePerPeriodUI>
                    <OldPriceUI>$1.62</OldPriceUI>
                    <PricePerDay>$0.49</PricePerDay>
                    <PerDayText>per day</PerDayText>
                    <NotSmallestUI><HeaderButton>Get <OnlyDesktopUI>plan</OnlyDesktopUI></HeaderButton></NotSmallestUI>
                </OnePlanUI>

                <OnePlanUI>
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