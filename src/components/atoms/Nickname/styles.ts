import styled from "styled-components";
import { Link } from "react-router-dom";

interface IText {
    size: string;
}

export const NicknameText = styled(Link)<IText>`
    font-size: ${({ size }) => size};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.boldText};
    font-weight: 600;

    :hover {
        text-decoration: underline;
    }
`;
