import styled from "styled-components";

interface IContainer {
    height: string;
}

export const Container = styled.div<IContainer>`
    padding: 16px;

    width: 100%;
    height: ${({ height }) => height};

    box-sizing: border-box;

    display: flex;
    align-items: center;

    border-bottom: 0.5px solid #efefef;
`;
