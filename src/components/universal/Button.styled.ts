import styled from "styled-components";

export const ButtonUI = styled.button`
    height: 48px;
    padding: 16px 32px;
    border: none;
    border-radius: 28px;
    background: #CF1A86;
    width: fit-content;
    color: #FEFEFE;
    text-align: center;
    font-family: "DM Sans 24pt";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;

    &:disabled {
        background-color: transparent;
        border: 1px solid #CF1A86;
        color: black;
    }
`