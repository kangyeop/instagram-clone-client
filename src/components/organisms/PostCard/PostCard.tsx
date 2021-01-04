import React from "react";
import { PostHeader } from "components/molecules";
import { Container } from "./styles";

// interface IProps {}

const PostCard: React.FC = () => {
    return (
        <Container>
            <PostHeader />
        </Container>
    );
};

export default PostCard;
