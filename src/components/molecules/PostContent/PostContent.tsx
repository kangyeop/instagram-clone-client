import React from "react";
import { Profile, Nickname, TimeText } from "components/atoms";
import { Container, ContentText } from "./styles";

interface IProps {
    isFeed?: boolean;
    content: string;
}

const PostContent: React.FC<IProps> = ({ isFeed, content }) => {
    return (
        <Container>
            {isFeed ? null : <Profile size="32px" />}
            <ContentText isFeed={isFeed}>
                <Nickname text="mong_nyang_cartoon" size="14px" /> {content}
                <br />
                {isFeed ? null : <TimeText size="12px" text="1시간 전" />}
            </ContentText>
        </Container>
    );
};

export default PostContent;
