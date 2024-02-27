import styled from "styled-components";
import AppleStoreImg from '../../../images/App Store.svg';
import GooglePlayImg from '../../../images/Google Play.svg';

export const MainHeading = styled.h1`
    color: #1E2735;
    font-family: "DM Sans 24pt";
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 115%; 
    text-align: center;
`

export const HeadingUI = styled.h2`
    color: #1E2735;
    text-align: center;
    font-family: "DM Sans 24pt";
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    padding: 64px 0 24px 0;
`

export const StoreBtnContainerUI = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex-direction: column;
    
    @media screen and (min-width: 600px) {
        flex-direction: row;
    }
`;   

    export const AppleStoreBtnUI = styled.button`
    border: none;
    border-radius: 10px;
    width: 175px;
    height: 52px;
    background: url('${AppleStoreImg}') no-repeat center center;
    background-size: cover;
    cursor: pointer;
`;

export const GooglePlayBtnUI = styled.button`
    border: none;
    border-radius: 10px;
    width: 175px;
    height: 52px;
    background: url('${GooglePlayImg}') no-repeat center center;
    background-size: cover;
    cursor: pointer;
`;

export const StoresContainerUI = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    padding: 72px 20px;
    background: #F8F8F8;
    margin-top: 88px;
    border-radius: 10px;
    margin-bottom: 65px;
`;