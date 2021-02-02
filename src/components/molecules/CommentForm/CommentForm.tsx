import React, { forwardRef, useState } from "react";
import { CommentInput, SubmitButton } from "components/atoms";
import { axios } from "api";
import { Container } from "./styles";

interface IProps {
    id: number;
}

const CommentForm: React.ForwardRefRenderFunction<HTMLInputElement, IProps> = (
    { id },
    ref,
) => {
    const [comment, setComment] = useState<string>("");
    const [canClick, setCanClick] = useState<boolean>(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
        if (e.target.value) setCanClick(true);
        else setCanClick(false);
    };

    const onClick = async () => {
        const res = await axios({
            method: "post",
            url: `/api/v1/articles/${id}/comments`,
            data: {
                content: comment,
            },
        });

        console.log(res);
    };

    return (
        <Container>
            <CommentInput
                ref={ref}
                onChange={(e) => onChange(e)}
                placeholder="댓글 달기..."
            />
            <SubmitButton canClick={canClick} onClick={onClick}>
                게시
            </SubmitButton>
        </Container>
    );
};

export default forwardRef(CommentForm);
