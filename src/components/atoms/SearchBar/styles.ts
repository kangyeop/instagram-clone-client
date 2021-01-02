import styled from "styled-components";

interface ICode {
    code: string;
    isRight?: boolean;
}

export const Container = styled.div`
    width: 205px;
    height: 20px;

    background-color: #fafafa;

    border: solid 1px #dbdbdb;
    border-radius: 3px;

    padding: 3px 0px 3px 10px;
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

export const Icon = styled.span<ICode>`
    ::before {
        margin-right: ${({ isRight }) => (isRight ? "0px" : "6px")};

        font-size: 14px;
        line-height: 18px;

        color: #8e8e8e;
        content: ${({ code }) => code};
    }
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
