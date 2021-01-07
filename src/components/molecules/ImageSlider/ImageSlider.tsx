import React, { useState } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { Slider, Image, SliderContent, ArrowContainer } from "./styles";

interface IProps {
    images: string[];
}

const transition = 0.45;

const ImageSlider: React.FC<IProps> = ({ images }) => {
    const [translate, setTranslate] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const nextSlide = () => {
        if (activeIndex === images.length - 1) {
            return;
        }

        setActiveIndex(activeIndex + 1);
        setTranslate((activeIndex + 1) * 598);
    };

    const prevSlide = () => {
        if (activeIndex === 0) {
            return;
        }

        setActiveIndex(activeIndex - 1);
        setTranslate((activeIndex - 1) * 598);
    };

    return (
        <Slider>
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
