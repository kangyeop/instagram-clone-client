import styled from "styled-components";

interface IText {
    size: string;
}

export const NicknameText = styled.p<IText>`
    font-size: ${({ size }) => size};
    color: #262626;
    font-weight: 600;
`;
