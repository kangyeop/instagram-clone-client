import React, { useState, useRef, useEffect } from "react";
import { FontAwesome } from "components/atoms";
import { InputBox, Text, Container, TextContainer, InputContainer } from "./styles";

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
                <InputContainer>
                    <FontAwesome code="'\f002'" style={{ marginRight: "6px" }} />
                    <InputBox
                        value={value}
                        onBlur={() => {
                            if (!value) setIsShow(true);
                        }}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="검색"
                        ref={inputRef}
                    />
                    <FontAwesome
                        onClick={() => {
                            setValue("");
                            setIsShow(true);
                        }}
                        code="'\f057'"
                    />
                </InputContainer>
            ) : (
                <TextContainer
                    onClick={() => {
                        setIsShow(false);
                    }}>
                    <FontAwesome code="'\f002'" style={{ marginRight: "6px" }} />
                    <Text>검색</Text>
                </TextContainer>
            )}
        </Container>
    );
};

export default SearchBar;
