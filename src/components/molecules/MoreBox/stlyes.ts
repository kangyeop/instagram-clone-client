import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background};

    border-radius: 15px;
    border-color: ${({ theme }) => theme.colors.background};
`;
