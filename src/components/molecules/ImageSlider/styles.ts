import styled from "styled-components";

interface ISliderContent {
    translate?: any;
    transition?: any;
}

interface ISlider {
    width: string;
    height: string;
}

interface IArrow {
    direction: string;
}

export const Slider = styled.div<ISlider>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    overflow: hidden;
    padding: 0;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    box-sizing: border-box;

    list-style: none;

    position: relative;
`;

export const SliderContent = styled.div<ISliderContent>`
    transform: translateX(-${(props) => props.translate}px);
    transition: transform ease-out ${(props) => props.transition}s;
    height: 100%;
    width: 100%;

    display: flex;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ArrowContainer = styled.div<IArrow>`
    z-index: 1;
    cursor: pointer;

    position: absolute;
    top: 50%;
    ${({ direction }) => (direction === "right" ? "right: 25px" : "left: 25px")};

    height: 30px;
    width: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: transform ease-in 0.1s;

    &:hover {
        transform: scale(1.1);
    }
`;
