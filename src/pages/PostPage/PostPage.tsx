import React from "react";
import { PostContainer } from "containers";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { StandardTemplate } from "components/templates";
import { Container } from "./styles";

interface IMatch {
    id: string;
}

const PostPage: React.FC<RouteComponentProps<IMatch>> = ({ match }) => {
    const { id } = match.params;

    return (
        <StandardTemplate>
            <Container>
                <PostContainer id={id} />
            </Container>
        </StandardTemplate>
    );
};

export default withRouter(PostPage);
