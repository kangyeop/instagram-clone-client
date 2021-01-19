import React from "react";
import { Container, LinkBtn, Image } from "./styles";

interface IProps {
    style?: React.CSSProperties;
    image: any;
    text: string;
}

const LoginLink: React.FC<IProps> = ({ style, image, text }) => {
    return (
        <Container
            style={style}
            onClick={(e) => {
                e.preventDefault();
            }}>
            <LinkBtn to={`/loginRequest/${text}`}>
                <Image src={image} alt="login_site_logo" />
                &ensp;{text}으로 로그인
            </LinkBtn>
        </Container>
    );
};

export default LoginLink;
