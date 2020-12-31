import React, { useState, useRef, useEffect } from "react";
import { InputBox, Text, Container, Icon, TextContainer } from "./styles";

// interface IProps {}

const SearchBar: React.FC = () => {
    const [isShow, setIsShow] = useState(true);
    const [value, setValue] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!isShow) {
            inputRef.current?.focus();
        }
    }, [isShow]);

    return (
        <Container>
            {!isShow ? (
                <>
                    <Icon code="'\f002'" className="fa" />
                    <InputBox
                        value={value}
                        onBlur={() => {
                            if (!value) setIsShow(true);
                        }}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="검색"
                        ref={inputRef}
                    />
                    <Icon
                        onClick={() => {
                            setValue("");
                            setIsShow(true);
                        }}
                        code="'\f057'"
                        className="fa"
                    />
                </>
            ) : (
                <TextContainer
                    onClick={() => {
                        setIsShow(false);
                    }}>
                    <Icon code="'\f002'" className="fa" />
                    <Text>검색</Text>
                </TextContainer>
            )}
        </Container>
    );
};

export default SearchBar;
