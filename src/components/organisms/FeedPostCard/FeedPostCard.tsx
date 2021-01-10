import React, { createRef } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { BorderCard } from "components/atoms";
import {
    ImageSlider,
    PostHeader,
    PostContent,
    CommentIcon,
    CommentForm,
    LikeString,
    Comment,
} from "components/molecules";
import {
    ImageContainer,
    ContentContainer,
    CommentFormContainer,
    IconContainer,
    RightContainer,
    CircleContainer,
} from "./styles";

interface IProps {
    images: string[];
    isLike: boolean;
    canClick: boolean;
    // eslint-disable-next-line no-unused-vars
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClickLike: () => void;
    handleCommentClick: () => void;
    handleMoreComment: () => void;
}

const FeedPostCard: React.FC<IProps> = ({
    images,
    isLike,
    canClick,
    onChange,
    handleClickLike,
    handleCommentClick,
    handleMoreComment,
}) => {
    const inputRef = createRef<HTMLInputElement>();

    const text = ["asdfasdfasdfafsdasdfasdfasdfasdfasdfadfasdf", "Asdf", "asdf", "asdf"];

    const handleClickComment = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleClickCommentLike = (index: number) => {};

    return (
        <BorderCard style={{ flexDirection: "column" }}>
            <PostHeader height="72px" />
            <ImageContainer>
                <ImageSlider width="614px" height="614px" images={images} />
            </ImageContainer>
            <RightContainer>
                <IconContainer>
                    <CommentIcon
                        isLike={isLike}
                        handleClickComment={handleClickComment}
                        handleClickLike={handleClickLike}
                    />
                    <LikeString isFeed />
                </IconContainer>
                <ContentContainer>
                    <PostContent isFeed />
                </ContentContainer>

                <CommentFormContainer>
                    <CommentForm
                        ref={inputRef}
                        onChange={(e) => onChange(e)}
                        onClick={handleCommentClick}
                        canClick={canClick}
                    />
                </CommentFormContainer>
            </RightContainer>
        </BorderCard>
    );
};

export default FeedPostCard;
