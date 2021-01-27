import React, { useEffect, useState } from "react";
import { PostContainer } from "containers";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { StandardTemplate } from "components/templates";
import { Container } from "./styles";

interface IMatch {
    id: string;
}

const PostPage: React.FC<RouteComponentProps<IMatch>> = ({ match }) => {
    const [canClick, setCanClick] = useState<boolean>(false);
    const [comment, setComment] = useState<string>("");

    const { id } = match.params;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    useEffect(() => {
        if (comment) setCanClick(true);
        else setCanClick(false);
    }, [comment]);

    return (
        <StandardTemplate>
            <Container>
                <PostContainer
                    id={id}
                    canClick={canClick}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                    moreOnClick={() => {}}
                />
            </Container>
        </StandardTemplate>
    );
};

export default withRouter(PostPage);
