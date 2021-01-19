import React, { useState } from "react";
import { SignUpInputBox } from "components/atoms";
import { LogoBox } from "components/molecules";
import Github from "assets/images/github.png";
import Google from "assets/images/google.png";
import { Container } from "./styles";

const SignUpBox: React.FC = () => {
    const [name, setName] = useState<string>("");

    return (
        <LogoBox>
            <Container>
                <SignUpInputBox setValue={setName} placeholder="이름을 입력해주세요" />
                <SignUpInputBox setValue={setName} placeholder="이름" />
            </Container>
        </LogoBox>
    );
};

export default SignUpBox;
