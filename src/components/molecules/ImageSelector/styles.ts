import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

interface IContainer {
    loading: number;
}

export const Container = styled.div<IContainer>`
    width: 600px;
    height: ${({ loading }) => (loading ? "600px" : "200px")};

    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UploadContainer = styled.div`
    width: 100%;
    height: 100%;

    padding: 0;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    box-sizing: border-box;

    flex-wrap: wrap;
    padding: 1px;
`;

export const ListContainer = styled.div`
    width: 198px;
    height: 198px;

    border: 1px solid #efefef;
    box-sizing: border-box;

    position: relative;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CloseIcon = styled(AiFillCloseCircle)`
    position: absolute;
    top: 5px;
    right: 5px;

    cursor: pointer;
`;
