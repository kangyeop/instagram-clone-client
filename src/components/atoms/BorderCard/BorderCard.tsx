import React from "react";
import { Container } from "./styles";

interface IProps {
    style?: React.CSSProperties;
}

const BorderCard: React.FC<IProps> = ({ children, style }) => {
    return <Container style={style}>{children}</Container>;
};

export default BorderCard;
