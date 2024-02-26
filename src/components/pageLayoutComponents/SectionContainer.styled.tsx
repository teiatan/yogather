import styled from "styled-components";
import { white } from "../../utils/colors";

interface StyledDivProps {
    bgColor: string;
  }

export const InsideContainerUI = styled.div`

    width: 100%;
    padding: 0 26px;

    @media screen and (min-width: 553px) {
        width: 553px;
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
`