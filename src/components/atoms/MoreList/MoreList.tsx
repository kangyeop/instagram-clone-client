import React from "react";
import { List } from "./styles";

interface IProps {
    isLast?: boolean;
}

const MoreList: React.FC<IProps> = ({ children, isLast }) => {
    return <List isLast={isLast}>{children}</List>;
};

export default MoreList;
