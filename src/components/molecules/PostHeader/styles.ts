import styled from "styled-components";
import { FiMoreHorizontal } from "react-icons/fi";

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
    justify-content: space-between;

    border-bottom: 0.5px solid #efefef;
`;

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const MoreIcon = styled(FiMoreHorizontal)`
    cursor: pointer;
`;
