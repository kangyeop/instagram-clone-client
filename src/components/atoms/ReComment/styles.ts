import styled from "styled-components";

interface IText {
    size: string;
}

export const Text = styled.div<IText>`
    font-size: ${({ size }) => size};
    color: #8e8e8e;
    font-weight: 600;
    cursor: pointer;
`;
