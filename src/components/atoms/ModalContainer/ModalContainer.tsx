import React, { useEffect } from "react";
import { Background, Modal } from "./styles";

interface IProps {
    isShow: boolean;
    setIsShow: any;
}

const ModalContainer: React.FC<IProps> = ({ children, isShow, setIsShow }) => {
    if (!isShow) {
        return null;
    }

    return (
        <>
            <Background
                onClick={() => {
                    setIsShow(false);
                }}
            />
            <Modal>{children}</Modal>
        </>
    );
};

export default ModalContainer;
