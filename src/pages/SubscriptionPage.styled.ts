import styled from "styled-components";
import logoWithText from "../images/Logo-with-text.svg";

export const SubscriptionContainerUI = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 10px;
    background-color: #CF1A86;
`

export const InsideContainerUI = styled.div`
    width: calc(100vw - 20px);
    height: calc(100vh - 20px);
    border-radius: 10px;
    background-color: white;
    padding: 15px;
    overflow-x: hidden;
    overflow-y: scroll;
`
export const Logo = styled.button`
    border: none;
    height: 62px;
    background-size: cover;
    cursor: pointer;
    width: 232px;
    background: url('${logoWithText}') no-repeat center center;
`;

export const PlansContainerUI = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const OnePlanUI = styled.div`
    border: 1px solid #A20061;
    border-radius: 15px;
    padding: 45px 20px;
    min-height: 400px;
    text-align: center;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &:nth-child(2) {
        background-color: #e20c8c;
        color: white;
        min-height: 450px;
        font-size: 120%;

        & button {
            background-color: white;
        }
    }

    @media screen and (max-width: 830px) {
        width: 100%;
        min-height: 300px;
        min-width: auto;

        & button {
            height: auto;
            min-height: 48px;
        }

        &:nth-child(2) {
        min-height: 350px;
        font-size: 120%;
        width: 100%;
        & button {
            width: fit-content;
            padding: 16px 32px;
        }
    }

    @media screen and (max-width: 620px) {
        padding: 20px 5px;
    }
    
    }
    @media screen and (max-width: 500px) {
        min-height: auto;
        max-height: 250px;
        &:nth-child(2) {
        min-height: auto;
        max-height: 270px;
    }
    }
`
export const MonthAmount = styled.h2`
    font-family: "DM Sans 24pt";
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 115%; 
    @media screen and (max-width: 620px) {
        font-size: 30px;
    }

    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
`
export const PricePerDay = styled.h2`
    font-family: "DM Sans 24pt";
    font-size: 60px;
    font-style: normal;
    font-weight: 600;
    line-height: 115%; 
    margin-top: 80px;
    @media screen and (max-width: 620px) {
        font-size: 40px;
        margin-top: 40px;
    }

    @media screen and (max-width: 500px) {
        font-size: 35px;
        margin-top: 25px;
    }
`
export const PerDayText = styled.div`
    margin-bottom: 40px;

    @media screen and (max-width: 620px) {
        margin-bottom: 30px;
    }

    @media screen and (max-width: 500px) {
        font-size: 12px;
        margin-top: -10px;
        margin-bottom: 15px;
    }
`

export const AccentTextUI = styled.span`
    color: #A20061;
`
export const PricePerPeriodUI = styled.div`
    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`
export const OldPriceUI = styled.div`
    text-decoration: line-through;
    margin-top: 50px;
    display: none;
`

export const DescriptionTextUI = styled.h1`
    color: #1E2735;
    font-family: "DM Sans 24pt";
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 115%; 
    text-align: center;
    margin-bottom: 70px;
    margin-top: 20px;
`
export const OnlyDesktopUI = styled.span`
    @media screen and (max-width: 620px) {
        display: none;
    }
`
export const NotSmallestUI = styled.span`
    @media screen and (max-width: 500px) {
        display: none;
    }
`