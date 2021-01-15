import React, { useState, useRef, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { IoCloseCircle } from "react-icons/io5";
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
                    <GoSearch color="#8e8e8e" size="14px" />
                    <InputBox
                        value={value}
                        onBlur={() => {
                            if (!value) setIsShow(true);
                        }}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="검색"
                        ref={inputRef}
                    />
                    <IoCloseCircle
                        onClick={() => {
                            setValue("");
                            setIsShow(true);
                        }}
                        color="#8e8e8e"
                    />
                </InputContainer>
            ) : (
                <TextContainer
                    onClick={() => {
                        setIsShow(false);
                    }}>
                    <GoSearch color="#8e8e8e" size="14px" style={{ marginRight: "6px" }} />
                    <Text>검색</Text>
                </TextContainer>
            )}
        </Container>
    );
};

export default SearchBar;
