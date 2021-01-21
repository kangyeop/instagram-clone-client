import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.grayBackground};

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-x: hidden;
`;

export const Body = styled.div`
    width: 935px;
    max-height: 90vh;

    background-color: ${({ theme }) => theme.colors.grayBackground};
    padding-top: 36px;
`;
