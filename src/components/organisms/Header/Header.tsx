import React from "react";
import LogoFile from "assets/images/logo-2x.png";
import { Link } from "react-router-dom";
import { HeaderRight, SearchBar } from "components/molecules";
import { Container, HeaderContainer, Image } from "./styles";

// interface IProps {}

const Header: React.FC = () => {
    return (
        <Container>
            <HeaderContainer>
                <Link to="/">
                    <Image src={LogoFile} />
                </Link>
                <SearchBar />
                <HeaderRight />
            </HeaderContainer>
        </Container>
    );
};

export default Header;
