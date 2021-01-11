import React, { useState } from "react";
import { UploadButton, Indicator } from "components/atoms";
import useAxios from "axios-hooks";
import { Container, UploadContainer, Image, ListContainer, CloseIcon } from "./styles";

interface IProps {
    setImages: any;
    images: string[];
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

    const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
            return;
        }
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64 = reader.result;

            if (base64) {
                setPreviewImages([...previewImages, base64.toString()]);
            }
        };
        if (e.target.files?.length) {
            reader.readAsDataURL(e.target.files[0]);

            const imageFile = e.target.files[0];

            const formData = new FormData();
            formData.append("image", imageFile);

            setLoading(1);

            const {
                data: {
                    data: { deletehash, link },
                },
            } = await sendImage({ data: formData });

            setImages([...images, link]);

            setLoading(0);
        }

        e.target.value = "";
    };

    const RemoveIcon = (index: number) => {
        setPreviewImages(
            previewImages
                .slice(0, index)
                .concat(previewImages.slice(index + 1, previewImages.length)),
        );
        setImages(images.slice(0, index).concat(images.slice(index + 1, images.length)));
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
                                        RemoveIcon(index);
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
