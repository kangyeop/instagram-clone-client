import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Body = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
`;
