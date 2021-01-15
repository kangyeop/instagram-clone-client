import styled from "styled-components";

interface IGrayBox {
    width: string;
    height: string;
}

export const Box = styled.div<IGrayBox>`
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-radius: 1px;
    margin: 0 0 10px;
    align-content: center;
    padding: 10px 0;
    display: block;
    box-align: center;
    background-color: #fff;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;
