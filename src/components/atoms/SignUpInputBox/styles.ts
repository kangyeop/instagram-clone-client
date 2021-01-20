import styled from "styled-components";

interface IAnimate {
    isClick: boolean;
}

export const InputDiv = styled.div`
    background-color: ${({ theme }) => theme.colors.grayBackground};

    width: 258px;
    height: 36px;

    box-sizing: border-box;

    border: 1px solid #dbdbdb;
    border-radius: 3px;

    display: flex;
    align-items: center;

    position: relative;

    margin-bottom: 6px;
`;

export const PlaceHolder = styled.span<IAnimate>`
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 12px;
    line-height: 36px;

    height: 36px;

    position: absolute;
    left: 8px;

    overflow: hidden;
    pointer-events: none;
    text-overflow: ellipsis;

    transform-origin: left;

    transition: transform 0.1s;

    transform: ${({ isClick }) => (isClick ? "scale(0.83333) translateY(-10px)" : null)};
`;

export const InputBox = styled.input<IAnimate>`
    width: 90%;
    height: ${({ isClick }) => (isClick ? null : "80%")};

    background-color: ${({ theme }) => theme.colors.grayBackground};

    padding-left: 8px;

    border: 0;

    color: ${({ theme }) => theme.colors.boldText};

    margin: 0;
    outline: 0;

    font-size: ${({ isClick }) => (isClick ? "14px" : "12px")};
    padding: ${({ isClick }) => (isClick ? "14px 0 2px 8px !important" : null)};
`;
