import styled from "styled-components";

interface ICode {
    code: string;
    isRight?: boolean;
}

export const FontIcon = styled.span<ICode>`
    ::before {
        font-size: 14px;
        line-height: 18px;

        color: #8e8e8e;
        content: ${({ code }) => code};
    }
`;
