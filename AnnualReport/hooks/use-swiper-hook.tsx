import React from "react";
import { useSwiper } from "swiper/react";
import { getPPElementSize, getPPFontSize } from "../constant";

interface IProps {
  width: number;
  height: number;
  buttonText: string;
  buttonImg: string;
  appHeightRate: number;
  appWidthRate: number;
  buttonImgBottom: string;
  buttonImgLeft: string;
  buttonTextBottom: string;
  buttonTextLeft: string;
  slideToPageIndex: number;
  buttonTextSize?: string;
  iconImg?: string;
}

export default function SlideNextButton(props: IProps) {
  const swiper = useSwiper();
  const {
    width,
    height,
    buttonText,
    buttonImg,
    appHeightRate,
    appWidthRate,
    buttonImgBottom,
    buttonImgLeft,
    buttonTextBottom,
    buttonTextLeft,
    buttonTextSize,
    slideToPageIndex,
    iconImg
  } = props;

  return (
    <div onClick={() => swiper.slideTo(slideToPageIndex, 500)}>
      <img
        width={width}
        height={height}
        alt="button-img"
        style={{
          position: "absolute",
          bottom: getPPElementSize(appHeightRate, buttonImgBottom),
          left: getPPElementSize(appWidthRate, buttonImgLeft),
        }}
        src={buttonImg}
      />
      {buttonText ? (
        <span
          style={{
            position: "absolute",
            bottom: getPPElementSize(appHeightRate, buttonTextBottom),
            left: getPPElementSize(appWidthRate, buttonTextLeft),
            color: "#FFF",
            fontFamily: "PingFang SC",
            fontSize: getPPFontSize(appWidthRate, buttonTextSize!),
          }}
        >
          {buttonText}
        </span>
      ) : (
        <img
          width={32}
          height={27}
          alt="icon-img"
          style={{
            position: "absolute",
            bottom: getPPElementSize(appHeightRate, buttonTextBottom),
            left: getPPElementSize(appWidthRate, buttonTextLeft),
          }}
          src={iconImg}
        />
      )}
    </div>
  );
}
