import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

export const Container = styled.div`
    width: 600px;
    height: 200px;

    padding: 0;

    position: relative;

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
`;

export const CloseIcon = styled(AiFillCloseCircle)`
    position: absolute;
    top: 5px;
    right: 5px;
`;
