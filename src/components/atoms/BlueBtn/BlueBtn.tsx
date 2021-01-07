import React from "react";
import { BBtn } from "./styles";

interface IProps {
    style?: React.CSSProperties;
    width: string;
    height: string;
    fn: Function;
}

const BlueBtn: React.FC<IProps> = ({ style, width, height, fn, children }) => {
    return (
        <BBtn style={style} width={width} height={height} onClick={(e) => fn(e)}>
            {children}
        </BBtn>
    );
};

export default BlueBtn;
