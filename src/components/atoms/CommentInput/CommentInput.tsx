/* eslint-disable no-unused-vars */
import React, { forwardRef } from "react";
import { InputBox } from "./styles";

interface IProps {
    style?: React.CSSProperties;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress(e: React.KeyboardEvent<Element>): void;
}

const CommentInput: React.ForwardRefRenderFunction<HTMLInputElement, IProps> = (
    { style, onChange, placeholder, onKeyPress },
    ref,
) => {
    return (
        <InputBox
            ref={ref}
            style={style}
            onKeyPress={(e: React.KeyboardEvent<Element>) => onKeyPress(e)}
            onChange={(e) => onChange(e)}
            placeholder={placeholder}
        />
    );
};

export default forwardRef(CommentInput);
