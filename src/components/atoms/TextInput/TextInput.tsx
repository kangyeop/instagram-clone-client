import React from "react";
import { TextArea } from "./styles";

interface IProps {
    style?: React.CSSProperties;
    placeholder?: string;
    // eslint-disable-next-line no-unused-vars
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextInput: React.FC<IProps> = ({ style, onChange, placeholder }) => {
    return (
        <TextArea style={style} onChange={(e) => onChange(e)} placeholder={placeholder} />
    );
};

export default TextInput;
