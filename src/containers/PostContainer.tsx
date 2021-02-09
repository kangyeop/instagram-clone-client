import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "components/organisms";
import {
    requestPost,
    requestComment,
    successComment as setComment,
} from "store/post/actions";
import { RootState } from "store/rootReducer";
import { IComment } from "types/types";

interface IProps {
    id: string;
}

const PostContainer: React.FC<IProps> = ({ id }) => {
    const [page, setPage] = useState<number>(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPost({ id: parseFloat(id) }));
        dispatch(requestComment({ id: parseFloat(id), page, size: 10 }));
    }, []);

    useEffect(() => {
        return () => {
            const reset: IComment[] = [];
            dispatch(setComment({ comments: reset }));
        };
    });

    const handleClickLike = () => {
        // dispatch like
    };

    const moreOnClick = () => {};

    const handleMoreComment = () => {
        dispatch(requestComment({ id: parseFloat(id), page: page + 1, size: 10 }));
        setPage(page + 1);
    };

    const successComment = () => {
        dispatch(requestComment({ id: parseFloat(id), page: 0, size: 10 }));
        setPage(0);
    };

    const {
        imageUrls,
        content,
        isLiked,
        loading,
        createdBy: { nickname, profileImageUrl },
        comments,
        isMore,
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
            isMore={isMore}
            handleClickLike={handleClickLike}
            moreOnClick={moreOnClick}
            handleMoreComment={handleMoreComment}
            successComment={successComment}
        />
    );
};

export default PostContainer;
