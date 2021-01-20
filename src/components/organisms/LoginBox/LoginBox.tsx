import React from "react";
import { LoginLink } from "components/atoms";
import { LogoBox } from "components/molecules";
import Github from "assets/images/github.png";
import Google from "assets/images/google.png";
import { Container } from "./styles";

const LoginBox: React.FC = () => {
    return (
        <LogoBox>
            <Container>
                <LoginLink image={Github} text="Github" />
                <LoginLink image={Google} text="Google" />
            </Container>
        </LogoBox>
    );
};

export default LoginBox;
