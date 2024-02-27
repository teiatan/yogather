import styled from "styled-components";

export const MainHeading = styled.h1`
    color: #1E2735;
    font-family: "DM Sans 24pt";
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 115%; 
`

export const AccentText = styled.span`
    color: #A20061;
`

export const HeroContainerUi = styled.section`

    margin-top: 94px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    @media screen and (min-width: 553px) {
        gap: 70px;
    }

    @media screen and (min-width: 1200px) {
        gap: 20px;
        margin-top: 129px;
        flex-direction: row;
        justify-content: space-between;
    }
`

export const LeftPartContainerUI = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const ImageUI = styled.img`
    width: 100%;
    @media screen and (min-width: 553px) {
        width: 285px;
    }
`;

export const ImagesBlockUI = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;

    @media screen and (min-width: 553px) {
        flex-direction: row-reverse;
        gap: 22px;
    }

    @media screen and (min-width: 1200px) {

    }
`

export const SmallImagesBlockUI = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 553px) {
        
    }

    @media screen and (min-width: 1200px) {
        flex-direction: row;
        position: absolute;
        left: -674px;
        bottom: 0;
    }
`

export const OnlyDesktopUI = styled.span`
    @media screen and (max-width: 553px) {
        display: none;
    }
`