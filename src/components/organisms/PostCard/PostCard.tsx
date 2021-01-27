import React, { createRef } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { BorderCard, Indicator } from "components/atoms";
import {
    ImageSlider,
    PostHeader,
    PostContent,
    CommentIcon,
    CommentForm,
    LikeString,
    Comment,
} from "components/molecules";
import { theme } from "styles";
import {
    ImageContainer,
    ContentContainer,
    CommentFormContainer,
    IconContainer,
    RightContainer,
    CircleContainer,
    MiddleContainer,
} from "./styles";

interface IProps {
    images: string[];
    isLike: boolean;
    canClick: boolean;
    content: string;
    nickname: string;
    profileImageUrl: string;
    loading: boolean;
    // eslint-disable-next-line no-unused-vars
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClickLike: () => void;
    moreOnClick: () => void;
}

const PostCard: React.FC<IProps> = ({
    images,
    isLike,
    canClick,
    content,
    nickname,
    profileImageUrl,
    loading,
    onChange,
    handleClickLike,
    moreOnClick,
}) => {
    const inputRef = createRef<HTMLInputElement>();

    // const text = ["asdfasdfasdfafsdasdfasdfasdfasdfasdfadfasdf", "Asdf", "asdf", "asdf"];
    const text: string[] = [];

    const handleClickComment = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleClickCommentLike = (index: number) => {};

    const handleMoreComment = () => {};
    const handleCommentClick = () => {};

    if (loading) {
        return (
            <MiddleContainer>
                <Indicator type="spin" size="80px" color={theme.colors.lightText} />
            </MiddleContainer>
        );
    }
    return (
        <BorderCard>
            <ImageContainer>
                <ImageSlider width="598px" height="598px" images={images} />
            </ImageContainer>
            <RightContainer>
                <PostHeader
                    height="72px"
                    nickname={nickname}
                    profileImageUrl={profileImageUrl}
                    moreOnClick={moreOnClick}
                />
                <ContentContainer>
                    <PostContent
                        nickname={nickname}
                        profileImageUrl={profileImageUrl}
                        content={content}
                    />
                    <CircleContainer onClick={handleMoreComment}>
                        <BsPlusCircle size="24px" />
                    </CircleContainer>
                    {text.map((data, index) => (
                        <Comment
                            key={data + String(index)}
                            text={data}
                            isLike={false}
                            handleClickCommentLike={() => {
                                handleClickCommentLike(index);
                            }}
                        />
                    ))}
                </ContentContainer>
                <IconContainer>
                    <CommentIcon
                        isLike={isLike}
                        handleClickComment={handleClickComment}
                        handleClickLike={handleClickLike}
                    />
                    <LikeString />
                </IconContainer>
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

export default PostCard;
