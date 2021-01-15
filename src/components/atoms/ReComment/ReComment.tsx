import React from "react";
import { Text } from "./styles";

interface IProps {
    style?: React.CSSProperties;
    text: string;
    size: string;
}

const ReComment: React.FC<IProps> = ({ style, size, text }) => {
    return (
        <Text style={style} size={size}>
            {text}
        </Text>
    );
};

export default ReComment;
