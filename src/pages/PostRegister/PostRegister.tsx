import React, { useEffect, useState } from "react";
import { PostForm } from "components/organisms";
import useAxios from "axios-hooks";
import { StandardTemplate } from "components/templates";
import { Container } from "./styles";

const PostRegister: React.FC = () => {
    const [images, setImages] = useState<File[]>([]);
    const [canClick, setCanClick] = useState<boolean>(false);
    const [content, setContent] = useState<string>("");

    const [, sendImage] = useAxios(
        {
            url: "https://api.imgur.com/3/image",
            headers: {
                Authorization: "Client-ID ee5d6b38da314d1",
            },
            method: "post",
        },
        { manual: true },
    );

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const onClick = async () => {
        if (!images.length) {
            alert("이미지가 없습니다.");
            return;
        }
        const formData = new FormData();
        formData.append("image", images[0]);
        const {
            data: {
                data: { deletehash, link },
            },
        } = await sendImage({ data: formData });
        console.log(deletehash, link);
    };

    useEffect(() => {
        if (content) setCanClick(true);
        else setCanClick(false);
    }, [content]);

    useEffect(() => {
        console.log(images);
    }, [images]);

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
