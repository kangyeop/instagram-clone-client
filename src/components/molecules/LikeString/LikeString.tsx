import React from "react";
import { Nickname, TimeText } from "components/atoms";
import { Container, ContentText, BoldText } from "./styles";

interface IProps {
    // height: string;
}

const LikeString: React.FC<IProps> = () => {
    return (
        <Container>
            <ContentText>
                <Nickname text="mong_nyang_cartoon" size="14px" />님
                <BoldText> 여러명</BoldText>이 좋아합니다
            </ContentText>
            <TimeText size="10px" text="1시간 전" style={{ lineHeight: "19px" }} />
        </Container>
    );
};

export default LikeString;
