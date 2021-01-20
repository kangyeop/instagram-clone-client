import React from "react";
import { Button } from "./styles";

interface IProps {
    style?: React.CSSProperties;
    onClick: () => void;
    width: string;
    height: string;
    canClick: boolean;
}

const SignUpButton: React.FC<IProps> = ({ onClick, children, width, height, canClick }) => {
    return (
        <Button
            onClick={onClick}
            width={width}
            height={height}
            canClick={canClick}
            disabled={!canClick}>
            {children}
        </Button>
    );
};

export default SignUpButton;
