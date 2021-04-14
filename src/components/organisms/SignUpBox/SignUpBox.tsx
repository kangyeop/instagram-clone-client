/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { SignUpInputBox, UploadButton, Indicator, SignUpButton } from "components/atoms";
import { axios, imgurAxios } from "api/axios";
import { LogoBox } from "components/molecules";
import { theme } from "styles";
import { useHistory } from "react-router-dom";
import { Container, ImageContainer, ButtonContainer, Image } from "./styles";

const SignUpBox: React.FC = () => {
    const [loading, setLoading] = useState<number>(0);
    const [canClick, setCanClick] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [nickName, setNickName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [profile, setProfile] = useState<string>();
    const [profileUrl, setProfileUrl] = useState<string>("");

    const history = useHistory();

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
                } = await imgurAxios({ method: "post", data: formData });

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
        if (!name || !nickName || !description) {
            return;
        }
        const a = window.location.search.substr(1).split("=");
        const JSESSIONID = a[1];
        console.log(JSESSIONID);
        const params = {
            name,
            nickname: nickName,
            profileImageUrl: profileUrl,
            description,
        };
        try {
            document.cookie = `JSESSIONID=${JSESSIONID}`;
            console.log(document.cookie);
            const { status } = await axios({
                headers: {
                    "Content-Type": "application/json",
                },
                url: "/api/v1/members/signup",
                method: "post",
                data: params,
                withCredentials: true,
            });
            if (status === 201) {
                history.push("/loginLoading");
            } else {
                alert("회원가입 도중 오류가 발생하였습니다.");
            }
        } catch (e) {
            console.log(e);
            alert("오류가 발생하였습니다.");
        }
    };

    useEffect(() => {
        if (name && nickName && description) {
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
