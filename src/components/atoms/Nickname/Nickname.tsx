import React from "react";
// import { Link } from "react-router-dom";
import { NicknameText } from "./styles";

interface IProps {
    style?: React.CSSProperties;
    text: string;
    size: string;
}

const Nickname: React.FC<IProps> = ({ style, size, text }) => {
    return (
        <NicknameText to={`/${text}`} style={style} size={size}>
            {text}
        </NicknameText>
    );
};

export default Nickname;
