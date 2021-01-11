import React, { useEffect, useState } from "react";
import { PostForm } from "components/organisms";
import useAxios from "axios-hooks";
import { StandardTemplate } from "components/templates";
import { Container } from "./styles";

const PostRegister: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);
    const [canClick, setCanClick] = useState<boolean>(false);
    const [content, setContent] = useState<string>("");

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const onClick = async () => {};

    useEffect(() => {
        if (content) setCanClick(true);
        else setCanClick(false);
    }, [content]);

    return (
        <StandardTemplate>
            <Container>
                <PostForm
                    onChange={onChange}
                    onClick={onClick}
                    images={images}
                    setImages={setImages}
                    canClick={canClick}
                />
            </Container>
        </StandardTemplate>
    );
};

export default PostRegister;
