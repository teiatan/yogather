import styled from "styled-components";

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
`
export const ContactsUI = styled.div`
    margin: auto;
    width: 680px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    flex-direction: column;
`
export const MainTitleUI = styled.h1`
    font-size: 70px;
`
export const MainMotto = styled.h2`
    font-size: 50px;
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
    background: url('../../public/App Store.svg') no-repeat center center;
    background-size: cover;
`
export const GooglePlayBtnUI = styled.button`
    border: none;
    width: 540px;
    height: 156px;
    background: url('../../public/Google Play.svg') no-repeat center center;
    background-size: cover;
`