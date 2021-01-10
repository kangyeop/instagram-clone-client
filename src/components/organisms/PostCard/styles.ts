import styled from "styled-components";
import { BsPlusCircle } from "react-icons/bs";

export const ImageContainer = styled.div`
    display: flex;

    width: 598px;
    height: 598px;

    border-right: 1px solid #efefef;
`;

export const RightContainer = styled.div`
    display: flex;

    flex-direction: column;

    width: 335px;
    height: 598px;

    position: relative;
`;

export const ContentContainer = styled.div`
    padding: 16px;

    width: 100%;
    height: 100%;

    margin-bottom: 155px;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    overflow: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const CircleContainer = styled.div`
    padding: 12px 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;

    box-sizing: border-box;

    position: absolute;

    margin-top: 1px;
    padding: 4px 16px;

    bottom: 0;

    width: 100%;
    height: 150px;

    border-top: 0.5px solid #efefef;
`;

export const CommentFormContainer = styled.div`
    display: flex;

    box-sizing: border-box;

    position: absolute;

    margin-top: 1px;
    padding: 0px 16px;

    bottom: 0;

    width: 100%;

    border-top: 1px solid #efefef;
`;
