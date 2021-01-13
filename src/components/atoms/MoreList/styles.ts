import styled from "styled-components";

interface IList {
    isLast?: boolean;
}

export const List = styled.button<IList>`
    width: 400px;
    height: 48px;
    box-sizing: border-box;

    outline: 0;

    border: 0;
    background-color: transparent;

    border-bottom: ${({ isLast }) => (isLast ? null : "1px solid #dbdbdb")};

    font-size: 14px;
    font-weight: 400;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    outline: 0;
`;
