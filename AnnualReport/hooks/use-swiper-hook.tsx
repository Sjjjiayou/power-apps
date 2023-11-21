import React, { useCallback } from "react";
import { useSwiper } from "swiper/react";
import classNames from "classnames";
import { getPPElementSize } from "../constant";
import "../css/AnnualReport.css";

interface IProps {
  width: number;
  height: number;
  buttonImg: string;
  appHeightRate: number;
  appWidthRate: number;
  buttonImgBottom: string;
  buttonImgLeft: string;
  slideToPageIndex: number;
  isSlide: boolean;
}

export default function SlideNextButton(props: IProps) {
  const swiper = useSwiper();
  const {
    width,
    height,
    buttonImg,
    appHeightRate,
    appWidthRate,
    buttonImgBottom,
    buttonImgLeft,
    slideToPageIndex,
    isSlide,
  } = props;

  const handleClick = useCallback(() => {
    swiper.slideTo(slideToPageIndex, 500);
  }, [slideToPageIndex]);

  return (
    <img
      onClick={handleClick}
      width={width}
      height={height}
      alt="button-img"
      className={classNames({ "slide-icon": isSlide })}
      style={{
        position: "absolute",
        bottom: getPPElementSize(appHeightRate, buttonImgBottom),
        left: getPPElementSize(appWidthRate, buttonImgLeft),
        animationDelay: "3s",
      }}
      src={buttonImg}
    />
  );
}
