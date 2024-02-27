import styled from "styled-components";
import logo from "../../images/Logo.svg";
import logoWithText from "../../images/Logo-with-text.svg";
import { white } from "../../utils/colors";

interface StyledDivProps {
    bgColor: string;
  }

export const HeaderUI = styled.header`
    width: 100%;
    padding: 0 16px;
    border-bottom: 1px solid #CDCFD2;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 600px) {
        padding: 0 26px;
        width: 600px;
    }

    @media screen and (min-width: 1200px) {
        padding: 0 120px;
        width: 1200px;
    }
`
export const OutsideContainerUI = styled.div<StyledDivProps>`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 22;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({bgColor}) => bgColor ? bgColor : white};
    color: var(--Text-Text-primary, #1E2735);
    font-family: "DM Sans 24pt";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
`

export const Logo = styled.button`
    border: none;
    height: 62px;
    width: 68px;
    background: url('${logo}') no-repeat center center;
    background-size: cover;
    cursor: pointer;

    @media screen and (min-width: 1200px) {
        width: 232px;
        background: url('${logoWithText}') no-repeat center center;
    }

`;

export const ButtonUI = styled.button`
    border-radius: 28px;
    border: 1px solid #CF1A86;
    color: var(--Text-Text-primary, #1E2735);
    text-align: center;
    font-family: "DM Sans 24pt";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 160px;
    height: 48px;
    background-color: inherit;
`;

export const LinksUI = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;

    & a {
        text-decoration: none;
    }

    @media screen and (max-width: 440px) {
        display: none;
    }
`