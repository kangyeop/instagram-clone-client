import React, { useEffect, useState } from "react";
import { PostForm } from "components/organisms";
import { useAxios } from "api/axios";
import { IImgurData } from "types/types";
import { StandardTemplate } from "components/templates";
import { Container } from "./styles";

const PostRegister: React.FC = () => {
    const [images, setImages] = useState<IImgurData[]>([]);
    const [canClick, setCanClick] = useState<boolean>(false);
    const [content, setContent] = useState<string>("");

    const [, submitContent] = useAxios(
        { url: "/api/v1/articles", method: "post" },
        { manual: true },
    );

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const onClick = async () => {
        const imageUrls = images.map((imgurData) => {
            return imgurData.link;
        });
        const res = await submitContent({ data: { content, imageUrls } });
        console.log(res);
    };

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
