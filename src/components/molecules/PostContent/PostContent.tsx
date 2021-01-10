import React from "react";
import { Profile, Nickname, TimeText } from "components/atoms";
import { Container, ContentText } from "./styles";

interface IProps {
    isFeed?: boolean;
}

const PostContent: React.FC<IProps> = ({ isFeed }) => {
    const text = `TIEB 소프트터치 터틀넥 가디건의 마지막 3차 (입고 소식을 전합니다.
    \n니트는 제가 가장 깊히 알고 있는 분야이다보니 아무래도 신경이 더욱 쓰이지만, 그만큼 개인적인 애착의 마음도 큽니다. 때문에 이 제품엔 좀처럼 제게 없는 완벽주의적인 집착과 창작에 대한 순수한 기쁨이 모두 담겨 있습니다.`;
    return (
        <Container>
            {isFeed ? null : <Profile size="32px" />}
            <ContentText isFeed={isFeed}>
                <Nickname text="mong_nyang_cartoon" size="14px" /> {text}
                <br />
                <TimeText size="12px" text="1시간 전" />
            </ContentText>
        </Container>
    );
};

export default PostContent;
