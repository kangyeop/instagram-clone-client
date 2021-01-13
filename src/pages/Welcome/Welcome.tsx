import React, { useState, useEffect } from "react";
import { FeedPostCard, PostCard } from "components/organisms";
import { StandardTemplate } from "components/templates";
import { ModalContainer } from "components/atoms";
import { Container } from "./styles";

const Welcome: React.FC = () => {
    const [images, setImages] = useState<string[]>([
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
        "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
        "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
        "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
    ]);
    const [canClick, setCanClick] = useState<boolean>(false);
    const [isLike, setIsLike] = useState<boolean>(false);
    const [comment, setComment] = useState<string>("");
    const [isShow, setIsShow] = useState<boolean>(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    const handleClickLike = () => {
        setIsLike(!isLike);
    };

    useEffect(() => {
        if (comment) setCanClick(true);
        else setCanClick(false);
    }, [comment]);

    return (
        <StandardTemplate>
            <Container>
                <FeedPostCard
                    images={images}
                    isLike={isLike}
                    canClick={canClick}
                    handleClickLike={handleClickLike}
                    onChange={(e) => onChange(e)}
                />
                <FeedPostCard
                    images={images}
                    isLike={isLike}
                    canClick={canClick}
                    handleClickLike={handleClickLike}
                    onChange={(e) => onChange(e)}
                />
            </Container>
            <ModalContainer isShow={isShow} setIsShow={setIsShow}>
                <PostCard
                    content="asdf"
                    images={images}
                    isLike={isLike}
                    canClick={canClick}
                    handleClickLike={handleClickLike}
                    onChange={(e) => onChange(e)}
                />
            </ModalContainer>
        </StandardTemplate>
    );
};

export default Welcome;
