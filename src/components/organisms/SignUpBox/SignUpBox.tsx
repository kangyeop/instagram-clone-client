/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { SignUpInputBox, UploadButton, Indicator, SignUpButton } from "components/atoms";
import { useAxios, useImageAxios } from "api/axios";
import { LogoBox } from "components/molecules";
import { theme } from "styles";
import { Container, ImageContainer, ButtonContainer, Image } from "./styles";

const SignUpBox: React.FC = () => {
    const [loading, setLoading] = useState<number>(0);
    const [canClick, setCanClick] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [nickName, setNickName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [profile, setProfile] = useState<string>();
    const [profileUrl, setProfileUrl] = useState<string>("");

    const [, sendImage] = useImageAxios(
        {
            method: "post",
        },
        { manual: true },
    );

    const [, signUp] = useAxios(
        { url: "members/signup", method: "post", withCredentials: true },
        { manual: true },
    );

    const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
            return;
        }
        const reader = new FileReader();

        let fileBase64 = "";

        reader.onloadend = () => {
            const base64 = reader.result;

            if (base64) {
                fileBase64 = base64.toString();
            }
        };

        if (e.target.files?.length) {
            reader.readAsDataURL(e.target.files[0]);

            const imageFile = e.target.files[0];

            const formData = new FormData();
            formData.append("image", imageFile);

            setLoading(1);

            try {
                const {
                    data: {
                        data: { link },
                    },
                } = await sendImage({ data: formData });

                setProfile(fileBase64);
                setProfileUrl(link);
            } catch {
                alert("이미지 업로드 중 오류가 발생하였습니다.");
            }

            setLoading(0);
        }

        e.target.value = "";
    };

    const handleOnClick = async () => {
        if (!name || !nickName || !profile || !description) {
            return;
        }
        const res = await signUp({
            data: { name, nickName, description, profileImageUrl: profileUrl },
        });
        console.log(res);
    };

    useEffect(() => {
        if (name && nickName && profile && description) {
            setCanClick(true);
        } else {
            setCanClick(false);
        }
    }, [name, nickName, profile, description]);

    return (
        <LogoBox>
            <Container>
                <ImageContainer>
                    {loading ? (
                        <Indicator type="spin" size="40px" color={theme.colors.lightText} />
                    ) : profile ? (
                        <Image src={profile} />
                    ) : (
                        <UploadButton onChange={handleChangeFile} />
                    )}
                </ImageContainer>
                <SignUpInputBox setValue={setName} placeholder="이름" />
                <SignUpInputBox setValue={setNickName} placeholder="닉네임" />
                <SignUpInputBox setValue={setDescription} placeholder="한 줄 소개" />
                <ButtonContainer>
                    <SignUpButton
                        width="258px"
                        height="30px"
                        onClick={handleOnClick}
                        canClick={canClick}>
                        회원가입
                    </SignUpButton>
                </ButtonContainer>
            </Container>
        </LogoBox>
    );
};

export default SignUpBox;
