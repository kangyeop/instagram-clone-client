import React, { useState } from "react";
import { UploadButton } from "components/atoms";
import { Container, Image, ListContainer, CloseIcon } from "./styles";

interface IProps {
    setImages: any;
}

const ImageSelector: React.FC<IProps> = ({ setImages }) => {
    const [images, setImgages] = useState<string[]>([]);

    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64 = reader.result;

            if (base64) {
                setImgages([...images, base64.toString()]);
            }
        };
        if (e.target.files?.length) {
            reader.readAsDataURL(e.target.files[0]);
            setImages(...[e.target.files[0]]);
        }
    };

    const RemoveIcon = (index: number) => {
        setImages(images.splice(index, 1));
    };

    return (
        <Container>
            {images.length < 9 ? (
                <ListContainer>
                    <UploadButton onChange={handleChangeFile} />
                </ListContainer>
            ) : (
                <></>
            )}
            {images.length ? (
                images.map((image: string, index: number) => (
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
