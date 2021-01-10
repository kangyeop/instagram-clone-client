import React from "react";
import { Profile, Nickname } from "components/atoms";
import { Container } from "./styles";

interface IProps {
    height: string;
}

const PostHeader: React.FC<IProps> = ({ height }) => {
    return (
        <Container height={height}>
            <Profile size="32px" />
            <Nickname text="kangyeop" size="14px" style={{ marginLeft: "14px" }} />
        </Container>
    );
};

export default PostHeader;
