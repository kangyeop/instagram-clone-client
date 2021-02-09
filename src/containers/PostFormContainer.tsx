import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostForm } from "components/organisms";
import { useHistory } from "react-router-dom";
import {
    setContent,
    setImageUrls,
    requestRegister,
    resetState,
} from "store/postform/actions";
import { RootState } from "store/rootReducer";
import { IImgurData } from "types/types";

const PostFormContainer: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { imageUrls, canClick, id } = useSelector(
        (state: RootState) => state.postFormReducer,
    );

    // const { imageUrls, canClick, id } = useSelector(
    //     (state: RootState) => state.postFormReducer,
    // );

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setContent({ content: e.currentTarget.value }));
    };

    const onClick = () => {
        dispatch(requestRegister());
    };

    const setImages = (images: IImgurData[]) => {
        dispatch(setImageUrls({ imageUrls: images }));
    };

    useEffect(() => {
        if (id > 0) {
            history.push(`/postpage/${id}`);
        }
    }, [id]);

    useEffect(() => {
        return () => {
            dispatch(resetState());
        };
    }, []);

    return (
        <PostForm
            onChange={onChange}
            onClick={onClick}
            images={imageUrls}
            setImages={setImages}
            canClick={canClick}
        />
    );
};

export default PostFormContainer;
