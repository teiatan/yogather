import styled from "styled-components";

export const OboardingPageUI = styled.div`
    background-color: #F8F8F8;
    width: 100vw;
    height: calc(100vh - 68px);
    margin-top: 68px;
`
export const QuizBlockUI = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const AnswersContainerUI = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    margin-top: 36px;

    @media screen and (min-width: 1200px) {
        width:387px;
    }
`
export const AnswerTexUI = styled.h3`
    color: var(--Text-Text-primary, #1E2735);
    text-align: center;
    font-family: "DM Sans 24pt";
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin-top: 48px;
`

export const AnswerVariantUI = styled.div`
    /* padding: 20px 12px; */
    background-color: white;
    border-radius: 8px;
    background: #FEFEFE;
    display: flex;
    align-items: center;
`

export const ButtonsContainerUI = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 48px;
    @media screen and (min-width: 1200px) {
        width:387px;
    }
`
export const BackBtnUI = styled.div`
    width: 96px;
    height: 48px;
    display: flex;
    gap: 10px;
    align-items: center;
    color: var(--Text-Text-primary, #1E2735);
    text-align: center;
    font-family: "DM Sans 24pt";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
`

export const InputUI = styled.input`
    border-radius: 8px;
    border: 1px solid #E6E7E9;
    background: #FEFEFE;
    padding: 16px;

    &::placeholder {
        color: #696F79;
        font-family: "DM Sans 24pt";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 145%;
    }
`