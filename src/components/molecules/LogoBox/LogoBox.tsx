import React from "react";
import { BorderCard } from "components/atoms";
import INSTAGRAM from "assets/images/logo-2x.png";
import { LogoContainer, Container } from "./styles";

const LogoBox: React.FC = ({ children }) => {
    return (
        <BorderCard style={{ height: "542px" }}>
            <Container>
                <LogoContainer>
                    <img src={INSTAGRAM} alt="" width="200px" height="50px" />
                </LogoContainer>
                {children}
            </Container>
        </BorderCard>
    );
};

export default LogoBox;
