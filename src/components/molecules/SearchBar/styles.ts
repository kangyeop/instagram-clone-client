import styled from "styled-components";

export const Container = styled.div`
    width: 215px;
    height: 28px;

    background-color: #fafafa;

    border: solid 1px #dbdbdb;
    border-radius: 3px;

    padding: 3px 10px 3px 10px;

    box-sizing: border-box;
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TextContainer = styled.div`
    width: 100%;
    margin-right: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 300;

    text-align: center;
    vertical-align: center;
`;

export const InputBox = styled.input`
    background-color: #fafafa;
    width: 77%;

    border: 0;

    font-size: 14px;
    line-height: 18px;
    color: #262626;

    outline: 0;
    overflow: hidden;

    ::placeholder {
        font-weight: 300;
        color: #8e8e8e;
    }
`;

export const Text = styled.div`
    overflow: hidden;
    text-align: center;
    font-size: 14px;
    line-height: 18px;
    color: #8e8e8e;
`;
