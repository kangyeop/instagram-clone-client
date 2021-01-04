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
        // <Link to={`/${text}`} style={{ textDecoration: "none" }}>
        <NicknameText style={style} size={size}>
            {text}
        </NicknameText>
        // </Link>
    );
};

export default Nickname;
