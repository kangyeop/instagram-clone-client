import React from "react";
import { Indicator } from "components/atoms";
import { theme } from "styles";
import { Container } from "./styles";

const LoginLoading: React.FC = () => {
    return (
        <Container>
            <Indicator type="spin" size="80px" color={theme.colors.lightText} />
        </Container>
    );
};

export default LoginLoading;
