import React from "react";
import { GrayBox, BlueBtn } from "components/atoms";
import * as APIS from "api/login";

const LoginBox: React.FC = () => {
    const loginURL = APIS.LoginRequest;
    const fun = (e: React.ChangeEvent) => {
        e.preventDefault();
        console.log("can?");
    };

    return (
        <GrayBox width="350px" height="380px">
            <BlueBtn width="100px" height="30px" fn={fun} link={loginURL}>
                GOOGLE LOGIN
            </BlueBtn>
            <BlueBtn width="100px" height="30px" fn={fun} link={loginURL}>
                GITHUB LOGIN
            </BlueBtn>
        </GrayBox>
    );
};

export default LoginBox;
