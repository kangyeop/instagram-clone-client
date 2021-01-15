import styled from "styled-components";

interface IText {
    size: string;
}

export const Text = styled.div<IText>`
    font-size: ${({ size }) => size};
    color: ${({ theme }) => theme.colors.lightText};
    font-weight: 600;
    cursor: pointer;
`;
