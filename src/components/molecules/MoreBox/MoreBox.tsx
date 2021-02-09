import React from "react";
import { MoreList } from "components/atoms";
import { Link } from "react-router-dom";
import { Container } from "./stlyes";

interface IProps {
    id: string;
}

const MoreBox: React.FC<IProps> = ({ id }) => {
    return (
        <Container>
            <Link to={`/postpage/${id}`} style={{ textDecoration: "none" }}>
                <MoreList>게시물로 이동</MoreList>
            </Link>
            <MoreList isLast>링크 복사</MoreList>
        </Container>
    );
};

export default MoreBox;
