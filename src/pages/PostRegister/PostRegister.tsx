import React, { useEffect, useState } from "react";
import { PostForm } from "components/organisms";
import { useAxios } from "api";
import { IImgurData } from "types/types";
import { StandardTemplate } from "components/templates";
import { Container } from "./styles";

const PostRegister: React.FC = () => {
    const [images, setImages] = useState<IImgurData[]>([]);
    const [canClick, setCanClick] = useState<boolean>(false);
    const [content, setContent] = useState<string>("");

    const [, submitContent] = useAxios(
        {
            url: "articles",
            method: "post",
        },
        { manual: true },
    );

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const onClick = async () => {
        const imageUrls = images.map((imgurData) => {
            return imgurData.link;
        });
        const { status, data } = await submitContent({ data: { content, imageUrls } });

        if (status === 201) {
            alert("성공하였습니다.");
        }
        console.log(data);
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
