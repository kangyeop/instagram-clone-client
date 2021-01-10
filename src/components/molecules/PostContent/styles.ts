import styled from "styled-components";

interface IContentText {
    isFeed?: boolean;
}

export const Container = styled.div`
    display: flex;
`;

export const ContentText = styled.div<IContentText>`
    margin: 0;
    margin-left: ${({ isFeed }) => (isFeed ? undefined : "14px")};

    font-size: 14px;
    line-height: 22px;

    line-break: anywhere;
`;
