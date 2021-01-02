import React from "react";
import { FontIcon } from "./styles";

interface IProps {
    code: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const FontAwesome: React.FC<IProps> = ({ code, style, onClick }) => {
    return <FontIcon style={style} onClick={onClick} code={code} className="fa" />;
};

export default FontAwesome;
