import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "components/organisms";
import { requestPost } from "store/post/actions";
import { RootState } from "store/rootReducer";

interface IProps {
    id: string;
}

const PostContainer: React.FC<IProps> = ({ id }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPost({ id: parseFloat(id) }));
    }, []);

    const handleClickLike = () => {
        // dispatch like
    };

    const moreOnClick = () => {};

    const successComment = () => {
        dispatch(requestPost({ id: parseFloat(id) }));
    };

    const {
        imageUrls,
        content,
        isLiked,
        loading,
        createdBy: { nickname, profileImageUrl },
        comments,
    } = useSelector((state: RootState) => state.postReducer);

    return (
        <PostCard
            id={parseFloat(id)}
            loading={loading}
            images={imageUrls}
            isLike={isLiked}
            content={content}
            nickname={nickname}
            profileImageUrl={profileImageUrl}
            comments={comments}
            handleClickLike={handleClickLike}
            moreOnClick={moreOnClick}
            successComment={successComment}
        />
    );
};

export default PostContainer;
