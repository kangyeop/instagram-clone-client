import React from "react";
import { GrayBox, BlueBtn } from "components/atoms";
import * as APIS from "api/login";
import GITHUB from "assets/images/github.png";
import GOOGLE from "assets/images/google.png";
import INSTAGRAM from "assets/images/logo-2x.png";
import { Container } from "./styles";

const LoginBox: React.FC = () => {
    const loginURL = APIS.LoginRequest;
    const fun = (e: React.ChangeEvent) => {
        e.preventDefault();
    };

    return (
        <GrayBox width="350px" height="380px">
            <Container height="20px">
                <img src={INSTAGRAM} alt="" width="200px" height="50px" />
            </Container>
            <Container height="70px">
                <BlueBtn width="200px" height="40px" fn={fun} link={loginURL}>
                    <img src={GITHUB} alt="" width="20px" height="20px" />
                    &ensp;GITHUB LOGIN
                </BlueBtn>
            </Container>
            <Container height="20px">
                &nbsp;
                <BlueBtn width="200px" height="40px" fn={fun} link={loginURL}>
                    <img src={GOOGLE} alt="" width="25px" height="25px" />
                    &ensp;GOOGLE LOGIN
                </BlueBtn>
            </Container>
        </GrayBox>
    );
};

export default LoginBox;
