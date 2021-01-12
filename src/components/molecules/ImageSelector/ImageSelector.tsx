import React, { useState } from "react";
import { UploadButton, Indicator } from "components/atoms";
import { IImgurData } from "types/types";
import useAxios from "axios-hooks";
import { Container, UploadContainer, Image, ListContainer, CloseIcon } from "./styles";

interface IProps {
    setImages: any;
    images: IImgurData[];
}

const ImageSelector: React.FC<IProps> = ({ setImages, images }) => {
    const [previewImages, setPreviewImages] = useState<string[]>([]);
    const [loading, setLoading] = useState<number>(0);

    const [, sendImage] = useAxios(
        {
            url: process.env.REACT_APP_IMGUR_URL,
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`,
            },
            method: "post",
        },
        { manual: true },
    );

    const [, deleteImage] = useAxios(
        {
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`,
            },
            method: "post",
        },
        { manual: true },
    );

    const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
            return;
        }
        const reader = new FileReader();

        let fileBase64 = "";

        reader.onloadend = () => {
            const base64 = reader.result;

            if (base64) {
                fileBase64 = base64.toString();
            }
        };

        if (e.target.files?.length) {
            reader.readAsDataURL(e.target.files[0]);

            const imageFile = e.target.files[0];

            const formData = new FormData();
            formData.append("image", imageFile);

            setLoading(1);

            try {
                const {
                    data: {
                        data: { deletehash, link },
                    },
                } = await sendImage({ data: formData });

                const imgurData = {
                    deletehash,
                    link,
                };

                setImages([...images, imgurData]);
                setPreviewImages([...previewImages, fileBase64]);
            } catch {
                alert("이미지 업로드 중 오류가 발생하였습니다.");
            }
            setLoading(0);
        }

        e.target.value = "";
    };

    const removeIcon = async (index: number) => {
        setLoading(1);
        try {
            await deleteImage({
                url: process.env.REACT_APP_IMGUR_URL + images[index].deletehash,
            });

            setPreviewImages(
                previewImages
                    .slice(0, index)
                    .concat(previewImages.slice(index + 1, previewImages.length)),
            );
            setImages(images.slice(0, index).concat(images.slice(index + 1, images.length)));
        } catch {
            alert("이미지 삭제에 실패하였습니다.");
        }
        setLoading(0);
    };

    return (
        <Container loading={loading}>
            {loading ? (
                <Indicator size="40px" color="black" type="spokes" />
            ) : (
                <UploadContainer>
                    {previewImages.length < 9 ? (
                        <ListContainer>
                            <UploadButton onChange={handleChangeFile} />
                        </ListContainer>
                    ) : (
                        <></>
                    )}
                    {previewImages.length ? (
                        previewImages.map((image: string, index: number) => (
                            <ListContainer key={`upload-image-${index.toString()}`}>
                                <CloseIcon
                                    size="18px"
                                    onClick={() => {
                                        removeIcon(index);
                                    }}
                                />
                                <Image src={image} alt="Upload Image" />
                            </ListContainer>
                        ))
                    ) : (
                        <></>
                    )}
                </UploadContainer>
            )}
        </Container>
    );
};

export default ImageSelector;
