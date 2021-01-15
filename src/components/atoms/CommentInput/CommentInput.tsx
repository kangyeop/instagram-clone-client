import React, { forwardRef } from "react";
import { InputBox } from "./styles";

interface IProps {
    style?: React.CSSProperties;
    placeholder: string;
    // eslint-disable-next-line no-unused-vars
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommentInput: React.ForwardRefRenderFunction<HTMLInputElement, IProps> = (
    { style, onChange, placeholder },
    ref,
) => {
    return (
        <InputBox
            ref={ref}
            style={style}
            onChange={(e) => onChange(e)}
            placeholder={placeholder}
        />
    );
};

export default forwardRef(CommentInput);
