import styled from "styled-components";
import AppleStoreImg from '../images/App Store.svg';
import GooglePlayImg from '../images/Google Play.svg';

export const HeroUI = styled.div`
    margin: auto;
    width: 100%;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const FeaturesUI = styled.div`
    margin: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    background-color: black;
    color: white;
    gap: 20px;
    padding: 10px 0;
`
export const ContactsUI = styled.div`
    margin: auto;
    width: 680px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 550px;
    flex-direction: column;
`
export const MainTitleUI = styled.h1`
    font-size: 70px;
`
export const MainMotto = styled.h2`
    font-size: 50px;
`

export const SingleFeatureUI = styled.div`
    width: 210px;
    height: 510px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const StoreBtnContainerUI = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const AppleStoreBtnUI = styled.button`
    border: none;
    width: 540px;
    height: 156px;
    background: url('${AppleStoreImg}') no-repeat center center;
    background-size: cover;
`
export const GooglePlayBtnUI = styled.button`
    border: none;
    width: 540px;
    height: 156px;
    background: url('${GooglePlayImg}') no-repeat center center;
    background-size: cover;
`