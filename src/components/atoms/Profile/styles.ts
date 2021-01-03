import styled from "styled-components";

interface IProfile {
    size: string;
}

export const Image = styled.img<IProfile>`
    border-radius: 50%;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
`;
