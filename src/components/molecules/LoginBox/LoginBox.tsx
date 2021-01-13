import React from "react";
import { GrayBox, BlueBtn } from "components/atoms";
import * as APIS from "api/login";
import GITHUB from "assets/images/github.png";
import GOOGLE from "assets/images/google.png";
import INSTAGRAM from "assets/images/logo-2x.png";

const divStyle = {
    display: "flex",
    margin: "100px 0 0 0",
};

const LoginBox: React.FC = () => {
    const loginURL = APIS.LoginRequest;
    const fun = (e: React.ChangeEvent) => {
        e.preventDefault();
        console.log("can?");
    };

    return (
        <GrayBox width="350px" height="380px">
            <img src={INSTAGRAM} alt="" width="200px" height="50px" />
            <div style={divStyle}>
                <BlueBtn width="100px" height="90px" fn={fun} link={loginURL}>
                    <img src={GITHUB} alt="" width="50px" height="50px" />
                    GOOGLE LOGIN
                </BlueBtn>
                <BlueBtn width="100px" height="90px" fn={fun} link={loginURL}>
                    <img src={GOOGLE} alt="" width="50px" height="50px" />
                    GITHUB LOGIN
                </BlueBtn>
            </div>
        </GrayBox>
    );
};

export default LoginBox;
