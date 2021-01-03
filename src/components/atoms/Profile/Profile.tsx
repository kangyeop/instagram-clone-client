import React from "react";
import DefaultProfile from "assets/images/normal-profile.jpg";
import { Image } from "./styles";

interface IProps {
    style?: React.CSSProperties;
    source?: string;
    size: string;
}

const Profile: React.FC<IProps> = ({ style, source, size }) => {
    return <Image style={style} size={size} src={source || DefaultProfile} />;
};

export default Profile;
