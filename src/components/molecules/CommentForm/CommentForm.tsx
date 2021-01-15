import React, { forwardRef } from "react";
import { CommentInput, SubmitButton } from "components/atoms";
import { Container } from "./styles";

interface IProps {
    canClick: boolean;
    // eslint-disable-next-line no-unused-vars
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

const CommentForm: React.ForwardRefRenderFunction<HTMLInputElement, IProps> = (
    { canClick, onChange, onClick },
    ref,
) => {
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
