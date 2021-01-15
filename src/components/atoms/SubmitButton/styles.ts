import styled from "styled-components";

interface IButton {
    canClick: boolean;
}

export const Button = styled.button<IButton>`
    cursor: pointer;

    outline: 0;

    border: 0;

    color: #0095f6;
    background-color: #ffffff;

    opacity: ${({ canClick }) => (canClick ? null : 0.3)};
`;
