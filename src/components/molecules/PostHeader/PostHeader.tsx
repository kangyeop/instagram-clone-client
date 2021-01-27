import React from "react";
import { Profile, Nickname } from "components/atoms";
import { Container, ProfileContainer, MoreIcon } from "./styles";

interface IProps {
    height: string;
    nickname: string;
    profileImageUrl: string;
    moreOnClick: () => void;
}

const PostHeader: React.FC<IProps> = ({
    height,
    nickname,
    profileImageUrl,
    moreOnClick,
}) => {
    return (
        <Container height={height}>
            <ProfileContainer>
                <Profile source={profileImageUrl} size="32px" />
                <Nickname text={nickname} size="14px" style={{ marginLeft: "14px" }} />
            </ProfileContainer>
            <MoreIcon size="16px" onClick={moreOnClick} />
        </Container>
    );
};

export default PostHeader;
