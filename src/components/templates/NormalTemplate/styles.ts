import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.grayBackground};

    display: flex;
    justify-content: center;

    overflow: hidden;

    box-sizing: border-box;

    padding: 6% 0;

    animation: ${fadeIn} 0.5s linear;
`;
