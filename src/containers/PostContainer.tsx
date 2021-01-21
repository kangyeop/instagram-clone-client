import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { PostCard } from "components/organisms";
import { requestPost } from "store/post/actions";
import { RootState } from "store/rootReducer";

interface IMatchProps {
    id: string;
}

interface IProps {
    canClick: boolean;
    // eslint-disable-next-line no-unused-vars
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    moreOnClick: () => void;
}

const PostContainer: React.FC<IProps & RouteComponentProps<IMatchProps>> = ({
    canClick,
    onChange,
    moreOnClick,
    match,
}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPost({ id: parseFloat(match.params.id) }));
    }, []);

    const handleClickLike = () => {
        // dispatch like
    };
    const { id, imageUrls, content, isLiked, loading } = useSelector(
        (state: RootState) => state.postReducer,
    );

    return (
        <PostCard
            loading={loading}
            images={imageUrls}
            isLike={isLiked}
            content={content}
            canClick={canClick}
            handleClickLike={handleClickLike}
            onChange={onChange}
            moreOnClick={moreOnClick}
        />
    );
};

export default withRouter(PostContainer);
