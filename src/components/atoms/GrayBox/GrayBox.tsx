import React from "react";
import { Box } from "./styles";

interface IProps {
    style?: React.CSSProperties;
    source?: string;
    width: string;
    height: string;
}

const GrayBox: React.FC<IProps> = ({ style, width, height, children }) => {
    return (
        <Box style={style} width={width} height={height}>
            {children}
        </Box>
    );
};

export default GrayBox;
