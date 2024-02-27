import styled from "styled-components";
import { white } from "../../utils/colors";

interface StyledDivProps {
    bgColor: string;
  }

export const InsideContainerUI = styled.div`

    width: 100%;
    padding: 0 16px;

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