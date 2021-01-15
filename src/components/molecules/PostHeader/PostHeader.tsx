import React from "react";
import { Profile, Nickname } from "components/atoms";
import { Container, ProfileContainer, MoreIcon } from "./styles";

interface IProps {
    height: string;
    moreOnClick: () => void;
}

const PostHeader: React.FC<IProps> = ({ height, moreOnClick }) => {
    return (
        <Container height={height}>
            <ProfileContainer>
                <Profile size="32px" />
                <Nickname text="kangyeop" size="14px" style={{ marginLeft: "14px" }} />
            </ProfileContainer>
            <MoreIcon size="16px" onClick={moreOnClick} />
        </Container>
    );
};

export default PostHeader;
