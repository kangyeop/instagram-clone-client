import React from "react";
import { Profile, Nickname } from "components/atoms";
import { Container } from "./styles";

const PostHeader: React.FC = () => {
    return (
        <Container>
            <Profile size="32px" />
            <Nickname text="kangyeop" size="14px" style={{ marginLeft: "14px" }} />
        </Container>
    );
};

export default PostHeader;
