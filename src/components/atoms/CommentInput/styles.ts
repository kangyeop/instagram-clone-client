import styled from "styled-components";

export const InputBox = styled.input`
    width: 85%;

    outline: none;
    border: 0;
    font-size: 14px;

    box-sizing: border-box;

    ::placeholder {
        color: ${({ theme }) => theme.colors.lightText};
    }
`;
