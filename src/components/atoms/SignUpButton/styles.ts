import styled from "styled-components";

interface ISize {
    width: string;
    height: string;
    canClick: boolean;
}

export const Button = styled.button<ISize>`
    text-align: center;
    vertical-align: middle;

    background-color: #0095f6;

    outline: 0;

    border: 1px solid transparent;
    border-radius: 4px;

    color: ${({ theme }) => theme.colors.background};
    font-weight: 600;

    width: ${({ width }) => width};
    height: ${({ height }) => height};

    box-sizing: border-box;

    cursor: pointer;
    opacity: ${({ canClick }) => (canClick ? null : 0.3)};
`;
