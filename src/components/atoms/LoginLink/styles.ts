import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.button`
    border: 0px solid black;
    width: 100%;

    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 30px 0;
`;

export const LinkBtn = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.boldText};

    font-size: 20px;
    font-weight: 600;
`;

export const Image = styled.img`
    height: 30px;
    width: 30px;
`;
