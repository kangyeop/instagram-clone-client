import React from "react";

interface IProps {
    d: string;
    link: string;
}

const HeaderIcon: React.FC<IProps> = ({ d, link }) => {
    return (
        <a href={link}>
            <svg height="22" width="22" viewBox="0 0 48 48">
                <path d={d} />
            </svg>
        </a>
    );
};

export default HeaderIcon;
