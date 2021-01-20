import React from "react";
import { Container } from "./styles";

const NormalTemplate: React.FC = (props: any) => {
    const { children } = props;

    return <Container>{children}</Container>;
};

export default NormalTemplate;
