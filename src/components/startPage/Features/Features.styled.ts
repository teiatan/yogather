import styled from "styled-components";

export const FeatureContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #1E2735;
    font-family: "DM Sans 24pt";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
    text-align: center;
`

export const MainHeadingUI = styled.h2`
    color: var(--Text-Text-brand, #A20061);
    font-family: "DM Sans 24pt";
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const MainAccentHeadingUI = styled.h2`
    color: var(--Text-Text-primary, #1E2735);
    text-align: center;
    font-family: "DM Sans 24pt";
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    margin-top: 24px;
    line-height: 120%;
`

export const HeadingUI = styled.h3`
    color: var(--Text-Text-primary, #1E2735);
    font-family: "DM Sans 24pt";
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    text-align: center;
`

export const AccentHeadingUI = styled.span`
    color: var(--Text-Text-brand, #A20061);
    text-align: center;
    font-family: "DM Sans 24pt";
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
`

export const FeatureCOntainerUI = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;

    @media screen and (min-width: 1200px) {
        &:nth-child(2) {
            position: relative;
            top: 287px;
        }
    }
`

export const FeatureTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const FeaturesTop = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 70px;
    margin-bottom: 117px;

    @media screen and (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
        position: relative;
        margin-bottom: 359px;
    }
`

export const FeaturesBottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 70px;
    }
`