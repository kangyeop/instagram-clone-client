import React, { useState } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { Slider, Image, SliderContent, ArrowContainer } from "./styles";

interface IProps {
    images: string[];
    width: string;
    height: string;
}

const transition = 0.45;

const ImageSlider: React.FC<IProps> = ({ images, height, width }) => {
    const [translate, setTranslate] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const xSize = parseFloat(width.substr(0, width.length - 2));

    const nextSlide = () => {
        if (activeIndex === images.length - 1) {
            return;
        }

        setActiveIndex(activeIndex + 1);
        setTranslate((activeIndex + 1) * xSize);
    };

    const prevSlide = () => {
        if (activeIndex === 0) {
            return;
        }

        setActiveIndex(activeIndex - 1);
        setTranslate((activeIndex - 1) * xSize);
    };

    return (
        <Slider width={width} height={height}>
            {activeIndex ? (
                <ArrowContainer direction="left" onClick={prevSlide}>
                    <IoIosArrowDropleft size="30px" color="#8e8e8e" />
                </ArrowContainer>
            ) : null}
            {activeIndex !== images.length - 1 ? (
                <ArrowContainer direction="right" onClick={nextSlide}>
                    <IoIosArrowDropright size="30px" color="#8e8e8e" />
                </ArrowContainer>
            ) : null}

            <SliderContent transition={transition} translate={translate}>
                {images.length ? (
                    images.map((image: string, index: number) => (
                        <Image
                            src={image}
                            key={`upload-image-${index.toString()}`}
                            alt="Upload Image"
                        />
                    ))
                ) : (
                    <></>
                )}
            </SliderContent>
        </Slider>
    );
};

export default ImageSlider;
