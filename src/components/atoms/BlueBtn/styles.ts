import styled from "styled-components";

interface IBlueBtn {
    width: string;
    height: string;
}

export const BBtn = styled.button<IBlueBtn>`
    border: 0px solid black;
    display: flex;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    color: rgba(var(--i1d, 38, 38, 38), 1);
    margin: auto;
    z-index: 1;
`;
