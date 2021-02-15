import React, { forwardRef, useState } from "react";
import { CommentInput, SubmitButton } from "components/atoms";
import { axios } from "api";
import { Container } from "./styles";

interface IProps {
    id: number;
    successComment: () => void;
}

const CommentForm: React.ForwardRefRenderFunction<HTMLInputElement, IProps> = (
    { id, successComment },
    ref,
) => {
    const [comment, setComment] = useState<string>("");
    const [canClick, setCanClick] = useState<boolean>(false);

    const onKeyUp = (e: React.KeyboardEvent<Element>) => {
        if (e.key === "Enter") {
            onClick();
        }
    };

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

        if (res.status === 201) {
            successComment();

            alert("댓글이 정상적으로 등록되었습니다.");
            setComment("");
        }
    };

    return (
        <Container>
            <CommentInput
                ref={ref}
                onKeyPress={onKeyUp}
                onChange={(e) => onChange(e)}
                placeholder="댓글 달기..."
                value={comment}
            />
            <SubmitButton canClick={canClick} onClick={onClick}>
                게시
            </SubmitButton>
        </Container>
    );
};

export default forwardRef(CommentForm);
