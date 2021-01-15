import styled from "styled-components";
import { Link } from "react-router-dom";

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
    align-items: baseline;
`;

export const LinkBtn = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
`;
