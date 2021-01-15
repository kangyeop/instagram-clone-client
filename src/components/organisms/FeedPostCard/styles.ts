import styled from "styled-components";

export const ImageContainer = styled.div`
    display: flex;

    width: 614px;
    height: 614px;

    border-right: 1px solid #efefef;
`;

export const RightContainer = styled.div`
    display: flex;

    flex-direction: column;

    width: 614px;

    position: relative;
`;

export const ContentContainer = styled.div`
    padding: 0px 16px;
    margin-bottom: 10px;

    width: 100%;
    height: 100%;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    overflow: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;

    box-sizing: border-box;

    margin-top: 1px;
    padding: 4px 16px;

    bottom: 0;

    width: 100%;

    border-top: 0.5px solid #efefef;
`;

export const CommentFormContainer = styled.div`
    display: flex;

    box-sizing: border-box;

    margin-top: 1px;
    padding: 0px 16px;

    bottom: 0;

    width: 100%;

    border-top: 1px solid #efefef;
`;
