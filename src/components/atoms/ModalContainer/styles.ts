import styled from "styled-components";

export const Background = styled.div`
    background-color: rgba(0, 0, 0, 0.5);

    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Modal = styled.div`
    position: fixed;

    top: 50%;
    left: 50%;
    z-index: 3;

    transform: translateX(-50%) translateY(-50%);
`;
