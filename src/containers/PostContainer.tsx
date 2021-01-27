import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "components/organisms";
import { requestPost } from "store/post/actions";
import { RootState } from "store/rootReducer";

interface IProps {
    id: string;
    canClick: boolean;
    // eslint-disable-next-line no-unused-vars
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    moreOnClick: () => void;
}

const PostContainer: React.FC<IProps> = ({ canClick, onChange, moreOnClick, id }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPost({ id: parseFloat(id) }));
    }, []);

    const handleClickLike = () => {
        // dispatch like
    };

    const { imageUrls, content, isLiked, nickname, profileImageUrl, loading } = useSelector(
        (state: RootState) => state.postReducer,
    );

    return (
        <PostCard
            loading={loading}
            images={imageUrls}
            isLike={isLiked}
            content={content}
            canClick={canClick}
            nickname={nickname}
            profileImageUrl={profileImageUrl}
            handleClickLike={handleClickLike}
            onChange={onChange}
            moreOnClick={moreOnClick}
        />
    );
};

export default PostContainer;
