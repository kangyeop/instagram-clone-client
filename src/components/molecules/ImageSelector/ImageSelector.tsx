import React, { useState } from "react";
import { UploadButton } from "components/atoms";
import { Container, Image, ListContainer, CloseIcon } from "./styles";

interface IProps {
    setImages: any;
    images: File[];
}

const ImageSelector: React.FC<IProps> = ({ setImages, images }) => {
    const [previewImages, setPreviewImages] = useState<string[]>([]);

    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            setImages([...images, e.target.files[0]]);
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
        <Container>
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
        </Container>
    );
};

export default ImageSelector;
