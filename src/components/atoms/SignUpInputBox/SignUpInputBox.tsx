import React, { useState } from "react";
import { InputBox, InputDiv, PlaceHolder } from "./styles";

interface IProps {
    placeholder: string;
    setValue: any;
}

const SignUpInputBox: React.FC<IProps> = ({ placeholder, setValue }) => {
    const [isClick, setIsClick] = useState(false);
    return (
        <InputDiv>
            <PlaceHolder isClick={isClick}>{placeholder}</PlaceHolder>
            <InputBox
                isClick={isClick}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.value) {
                        setIsClick(true);
                    } else {
                        setIsClick(false);
                    }
                    setValue(e.target.value);
                }}
            />
        </InputDiv>
    );
};

export default SignUpInputBox;
