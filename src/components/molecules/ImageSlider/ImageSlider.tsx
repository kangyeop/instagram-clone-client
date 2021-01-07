import React, { useEffect, useState } from "react";
import { UploadButton } from "components/atoms";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { Slider, Image, SliderContent, ArrowContainer } from "./styles";

interface IProps {
    setImages: any;
}

const ImageSlider: React.FC<IProps> = ({ setImages }) => {
    const [images, setImgages] = useState<string[]>([]);
    const [translate, setTranslate] = useState<number>(0);
    const [transition, setTransition] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const nextSlide = () => {
        if (activeIndex === images.length) {
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

    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64 = reader.result;

            if (base64) {
                setImgages([...images, base64.toString()]);
            }
        };
        if (e.target.files?.length) {
            reader.readAsDataURL(e.target.files[0]);
            setImages(...[e.target.files[0]]);
        }
    };

    useEffect(() => {
        // setState({ ...state, activeIndex: images.length });
    }, [images]);

    return (
        <Slider>
            <ArrowContainer direction="left" onClick={prevSlide}>
                <IoIosArrowDropleft size="30px" color="#8e8e8e" />
            </ArrowContainer>
            <ArrowContainer direction="right" onClick={nextSlide}>
                <IoIosArrowDropright size="30px" color="#8e8e8e" />
            </ArrowContainer>
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
                <UploadButton onChange={handleChangeFile} />
            </SliderContent>
        </Slider>
    );
};

export default ImageSlider;
