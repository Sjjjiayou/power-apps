import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PageProps } from "./type";
import "swiper/css";
import "swiper/css/effect-fade";
import "./css/AnnualReport.css";
import { EffectFade } from "swiper/modules";
import classNames from "classnames";
import { getPPElementSize, getPPFontSize, mockData } from "./constant";
import SlideNextButton from "./hooks/use-swiper-hook";

export const Pages = React.memo((props: PageProps) => {
  const {
    width,
    height,
    columns,
    records,
    dataJsonConfig,
    pageJsonConfig,
    appWidthRate = 1,
    appHeightRate = 1,
    buttonFirstTextLeft,
    buttonFirstImgBottom,
    buttonFirstImgLeft,
    buttonFirstTextBottom,
    buttonEndTextLeft,
    buttonEndImgBottom,
    buttonEndImgLeft,
    buttonEndTextBottom,
    buttonEndTextSize,
    buttonFirstWidth,
    buttonFirstHeight,
    buttonEndWidth,
    buttonEndHeight,
    handleIsFirstLastPage,
  } = props;

  const [isSlide, setSlide] = useState(true);

  const [pageConfigureEntityRecord, setPageConfigureEntityRecord] = useState<
    any[]
  >(mockData);

  useEffect(() => {
    let wantArray: any[] = [];
    Object.keys(records).length > 0 &&
      Object.keys(records).forEach((key) => {
        let obj: any = {};
        columns.forEach((element: any) => {
          // eslint-disable-next-line no-prototype-builtins
          if (element.hasOwnProperty("attributes")) {
            obj[element.attributes.LogicalName] = records[key].getValue(
              element.attributes.LogicalName
            );
          }
        });
        wantArray.push(obj);
      });

    const addDataArray = wantArray.filter((item) =>
      pageJsonConfig.includes(item.jjmc_order)
    );

    const pageConfigEntityRecord = addDataArray
      .sort((a, b) => Number(a.jjmc_order) - Number(b.jjmc_order))
      .map((element, index) => {
        const transform = JSON.parse(dataJsonConfig);
        return {
          ...element,
          data: transform[index],
        };
      });

    if (pageConfigEntityRecord.length > 0) {
      // setPageConfigureEntityRecord(pageConfigEntityRecord);
    }
  }, [records, columns, pageJsonConfig, dataJsonConfig]);

  console.log("pageConfigureEntityRecord666444", pageConfigureEntityRecord);

  return (
    <Swiper
      style={{ height }}
      spaceBetween={30}
      effect={"fade"}
      direction={"vertical"}
      modules={[EffectFade]}
      className="mySwiper"
      onActiveIndexChange={(swiper) => {
        console.log("swiper.activeIndex", swiper.activeIndex);
        const activeIndex = swiper.activeIndex;
        // if (
        //   activeIndex === 0 ||
        //   activeIndex === pageConfigureEntityRecord.length - 1
        // ) {
        //   handleIsFirstLastPage(1);
        // } else {
        //   handleIsFirstLastPage(0);
        // }
      }}
      onSlideChange={() => {
        setSlide(false);
        setTimeout(() => {
          setSlide(true);
        }, 0);
      }}
    >
      {pageConfigureEntityRecord.map((item, index, array) => {
        return (
          <SwiperSlide key={index}>
            <img
              style={{
                height,
                width,
              }}
              src={item.jjmc_base64 || ""}
              className="slide-img-position"
              alt="background-img"
            />
            {item.jjmc_elementimg && (
              <img
                width="100%"
                alt="element-img"
                className={classNames({ "element-img": isSlide })}
                style={{
                  position: "absolute",
                  bottom: item.jjmc_eleimgbottom,
                  left: 0,
                }}
                src={item.jjmc_elementimg}
              />
            )}

            {item.jjmc_slidepng && (
              <img
                width={getPPElementSize(appWidthRate, "70")}
                height={getPPElementSize(appHeightRate, "38")}
                alt="slide-icon"
                className={classNames({ "slide-icon": isSlide })}
                style={{
                  position: "absolute",
                  bottom: getPPElementSize(appHeightRate, "20"),
                  left: getPPElementSize(appWidthRate, "140"),
                  animationDelay: "1s",
                }}
                src={item.jjmc_slidepng}
              />
            )}
            <div
              className="text-container"
              style={{
                top: item.jjmc_distancetop
                  ? getPPElementSize(appHeightRate, item.jjmc_distancetop)
                  : "150px",
              }}
            >
              {item.data.map((value, rowIndex) => {
                return (
                  <div
                    className="text-row"
                    key={rowIndex}
                    style={{
                      lineHeight: getPPElementSize(appHeightRate, "156", false),
                    }}
                  >
                    {value.map((row, index) => {
                      return (
                        <span
                          key={index}
                          className={classNames({ "text-span": isSlide })}
                          style={{
                            color: row.color,
                            fontSize: getPPFontSize(appWidthRate, row.fontSize),
                            fontWeight: row.fontWeight,
                            marginLeft: getPPElementSize(
                              appWidthRate,
                              row.marginLeft
                            ),
                            marginBottom: getPPElementSize(
                              appHeightRate,
                              row.marginBottom
                            ),
                            animationDelay: row.delaySeconds,
                          }}
                        >
                          {row.isShowLabel ? row.label : ""}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            {item.jjmc_musicImg && (
              <div
                style={{
                  width: getPPElementSize(appWidthRate, "35"),
                  height: getPPElementSize(appHeightRate, "35"),
                  top: getPPElementSize(appHeightRate, "80"),
                  right: getPPElementSize(appWidthRate, "24"),
                  position: "absolute",
                }}
              >
                <img
                  src={item.jjmc_musicImg}
                  alt="musicPng"
                  width="100%"
                  height="100%"
                  className="music-img"
                />
              </div>
            )}
            {item.jjmc_iconImg && item.jjmc_buttonImg && index === 0 && (
              <SlideNextButton
                width={Math.floor(Number(buttonFirstWidth) * appWidthRate)}
                height={Math.floor(Number(buttonFirstHeight) * appHeightRate)}
                buttonText={item.jjmc_buttonText}
                buttonImg={item.jjmc_buttonImg}
                appWidthRate={appWidthRate}
                appHeightRate={appHeightRate}
                buttonImgBottom={buttonFirstImgBottom}
                buttonImgLeft={buttonFirstImgLeft}
                buttonTextBottom={buttonFirstTextBottom}
                buttonTextLeft={buttonFirstTextLeft}
                slideToPageIndex={1}
                iconImg={item.jjmc_iconImg}
              />
            )}
            {item.jjmc_buttonText &&
              item.jjmc_buttonImg &&
              index === array.length - 1 && (
                <SlideNextButton
                  width={Math.floor(Number(buttonEndWidth) * appWidthRate)}
                  height={Math.floor(Number(buttonEndHeight) * appHeightRate)}
                  buttonText={item.jjmc_buttonText}
                  buttonImg={item.jjmc_buttonImg}
                  appWidthRate={appWidthRate}
                  appHeightRate={appHeightRate}
                  buttonImgBottom={buttonEndImgBottom}
                  buttonImgLeft={buttonEndImgLeft}
                  buttonTextBottom={buttonEndTextBottom}
                  buttonTextLeft={buttonEndTextLeft}
                  buttonTextSize={buttonEndTextSize}
                  slideToPageIndex={0}
                />
              )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
});

Pages.displayName = "Pages";
