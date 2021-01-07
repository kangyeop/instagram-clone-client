import React from "react";
import { BorderCard, TextInput, SubmitButton } from "components/atoms";
import { ImageSelector, PostHeader } from "components/molecules";
import { ImageContainer, ContentContainer, SubmitContainer } from "./styles";

interface IProps {
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onClick: () => void;
    canClick: boolean;
    setImages: any;
}

const PostForm: React.FC<IProps> = ({ onChange, onClick, canClick, setImages }) => {
    return (
        <BorderCard>
            <ImageContainer>
                <ImageSelector setImages={setImages} />
            </ImageContainer>
            <ContentContainer>
                <PostHeader height="72px" />
                <TextInput
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        return onChange(e);
                    }}
                    placeholder="문구 입력"
                />
                <SubmitContainer>
                    <SubmitButton onClick={onClick} canClick={canClick}>
                        게시
                    </SubmitButton>
                </SubmitContainer>
            </ContentContainer>
        </BorderCard>
    );
};

export default PostForm;
