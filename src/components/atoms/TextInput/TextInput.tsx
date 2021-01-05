import React from "react";
import { TextArea } from "./styles";

interface IProps {
    style?: React.CSSProperties;
    placeholder?: string;
    onChange: () => void;
}

const TextInput: React.FC<IProps> = ({ style, onChange, placeholder }) => {
    return <TextArea style={style} onChange={onChange} placeholder={placeholder} />;
};

export default TextInput;
