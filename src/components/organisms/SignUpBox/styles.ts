import styled from "styled-components";

export const Container = styled.div`
    height: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 10px;
`;

export const ImageContainer = styled.div`
    width: 150px;
    height: 150px;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.border};

    margin-bottom: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    margin-top: 40px;
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;

    border-radius: 50%;
    object-fit: cover;
`;
