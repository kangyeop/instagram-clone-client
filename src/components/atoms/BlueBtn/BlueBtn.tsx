import React from "react";
import { BBtn, LinkBtn } from "./styles";

interface IProps {
    style?: React.CSSProperties;
    width: string;
    height: string;
    fn: Function;
    link: string;
}

const BlueBtn: React.FC<IProps> = ({ style, width, height, fn, children, link }) => {
    return (
        <BBtn style={style} width={width} height={height} onClick={(e) => fn(e)}>
            <LinkBtn to={link}>{children}</LinkBtn>
        </BBtn>
    );
};

export default BlueBtn;
