import React from "react";
// import { Link } from "react-router-dom";
import { Text } from "./styles";

interface IProps {
    style?: React.CSSProperties;
    text: string;
    size: string;
}

const TimeText: React.FC<IProps> = ({ style, size, text }) => {
    return (
        <Text style={style} size={size}>
            {text}
        </Text>
    );
};

export default TimeText;
