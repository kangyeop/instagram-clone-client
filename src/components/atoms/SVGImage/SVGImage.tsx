import React from "react";

interface IProps {
    d: string;
    height: string;
    width: string;
}

const SVGImage: React.FC<IProps> = ({ d, height, width }) => {
    return (
        <svg height={height} width={width} viewBox="0 0 48 48">
            <path d={d} />
        </svg>
    );
};

export default SVGImage;
