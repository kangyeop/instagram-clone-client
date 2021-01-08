import React from "react";
import { Button } from "./styles";

interface IProps {
    onClick: () => void;
    canClick: boolean;
    style?: React.CSSProperties;
}

const SubmitButton: React.FC<IProps> = ({ onClick, canClick, style, children }) => {
    return (
        <Button style={style} onClick={onClick} canClick={canClick} disabled={!canClick}>
            {children}
        </Button>
    );
};

export default SubmitButton;
