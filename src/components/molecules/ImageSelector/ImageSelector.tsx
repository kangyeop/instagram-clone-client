import React, { useRef, useEffect } from "react";
import { FontAwesome } from "components/atoms";
import { Container, ImageInput } from "./styles";

interface IProps {
    setImages: any;
}

const ImageSelector: React.FC<IProps> = ({ setImages }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    });

    return (
        <Container
            onClick={() => {
                inputRef.current?.click();
            }}>
            <ImageInput
                ref={inputRef}
                type="file"
                accept="image/jpg,impge/png,image/jpeg,image/gif"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setImages(...[e.target.value]);
                }}
            />
            <FontAwesome code="'\f067'" fontSize="50px" lineHeight="54px" />
        </Container>
    );
};

export default ImageSelector;
