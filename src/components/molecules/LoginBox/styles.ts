import styled from "styled-components";

interface IContainer {
    height: string;
}

export const Container = styled.div<IContainer>`
    display: auto;
    margin: ${({ height }) => height} 0 0 0;
`;
