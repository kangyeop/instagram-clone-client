import React from "react";
import ReactLoading from "react-loading";

type ITypes =
    | "blank"
    | "balls"
    | "bars"
    | "bubbles"
    | "cubes"
    | "cylon"
    | "spin"
    | "spinningBubbles"
    | "spokes";

interface IProps {
    type: ITypes;
    color: string;
    size: string;
}

const Indicator: React.FC<IProps> = ({ type, color, size }) => (
    <ReactLoading type={type} color={color} height={size} width={size} />
);

export default Indicator;
