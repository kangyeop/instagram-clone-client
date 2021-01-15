import styled from "styled-components";

interface IBlueBtn {
    width: string;
    height: string;
}

export const BBtn = styled.button<IBlueBtn>`
    border: 0px solid black;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    color: white;
    background-color: #fff;
    text-align: center;
    margin: auto;
    z-index: 1;
    display: flex;
    justify-content: center;
`;
