import React from "react";
import { GrayBox, BlueBtn } from "components/atoms";

const LoginBox: React.FC = () => {
    const fun = (e: React.ChangeEvent) => {
        e.preventDefault();
        alert("hi");
        console.log("log");
    };

    return (
        <GrayBox width="350px" height="380px">
            <BlueBtn width="100px" height="30px" fn={fun}>
                GOOGLE LOGIN
            </BlueBtn>
            <BlueBtn width="100px" height="30px" fn={fun}>
                GITHUB LOGIN
            </BlueBtn>
        </GrayBox>
    );
};

export default LoginBox;
