import React from "react";

interface IProps {
    d: string;
}

const SVGImage: React.FC<IProps> = ({ d }) => {
    return (
        <svg height="22" width="22" viewBox="0 0 48 48">
            <path d={d} />
        </svg>
    );
};

export default SVGImage;
