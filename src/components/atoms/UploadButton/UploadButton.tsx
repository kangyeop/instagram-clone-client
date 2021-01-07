import React, { useRef } from "react";
import { FiPlus } from "react-icons/fi";
import { ImageButton, ImageInput } from "./styles";

interface IProps {
    style?: React.CSSProperties;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadButton: React.FC<IProps> = ({ onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <ImageButton
            onClick={() => {
                inputRef.current?.click();
            }}>
            <ImageInput
                ref={inputRef}
                type="file"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChange(e);
                }}
            />
            <FiPlus size="50px" color="#8e8e8e" />
        </ImageButton>
    );
};

export default UploadButton;
