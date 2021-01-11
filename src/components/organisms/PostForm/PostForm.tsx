import React from "react";
import { BorderCard, TextInput, SubmitButton } from "components/atoms";
import { ImageSelector, PostHeader } from "components/molecules";
import { ImageContainer, ContentContainer, SubmitContainer } from "./styles";

interface IProps {
    // eslint-disable-next-line no-unused-vars
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onClick: () => void;
    canClick: boolean;
    setImages: any;
    images: string[];
}

const PostForm: React.FC<IProps> = ({ onChange, onClick, canClick, setImages, images }) => {
    return (
        <BorderCard>
            <ImageContainer>
                <ImageSelector setImages={setImages} images={images} />
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
