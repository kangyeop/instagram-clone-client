import styled from "styled-components";
import { Link } from "react-router-dom";

interface IText {
    size: string;
}

export const NicknameText = styled(Link)<IText>`
    font-size: ${({ size }) => size};
    text-decoration: none;
    color: #262626;
    font-weight: 600;

    :hover {
        text-decoration: underline;
    }
`;
