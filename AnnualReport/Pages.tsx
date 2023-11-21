import React, { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PageProps } from "./type";
import "swiper/css";
import "swiper/css/effect-fade";
import "./css/AnnualReport.css";
import { EffectFade } from "swiper/modules";
import classNames from "classnames";
import { getPPElementSize, getPPFontSize, mockData } from "./constant";
import SlideNextButton from "./hooks/use-swiper-hook";
import CloseSvg from "./hooks/use-svg-hook";

export const Pages = React.memo((props: PageProps) => {
  const {
    width,
    height,
    columns,
    records,
    dataJsonConfig,
    pageJsonConfig,
    medalJsonConfig,
    appWidthRate = 1.7,
    appHeightRate = 1.4,
    buttonFirstImgBottom,
    buttonFirstImgLeft,
    buttonEndImgBottom,
    buttonEndImgLeft,
    buttonFirstWidth,
    buttonFirstHeight,
    buttonEndWidth,
    buttonEndHeight,
    handleChangeMusic,
  } = props;

  const [isSlide, setSlide] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageConfigureEntityRecord, setPageConfigureEntityRecord] = useState<
    any[]
  >([]);
  const [medalBulleFrame, setMedalBulleFrame] = useState("");
  const [isShowModal, setShowModal] = useState(false);

  const handleClick = useCallback(
    (element) => {
      // console.log("element", element.medalbulleframeimg);
      setMedalBulleFrame(element.medalbulleframeimg);
      setShowModal(true);
    },
    [setShowModal, setMedalBulleFrame]
  );

  const onClose = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

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

    // console.log("wantArray1111", wantArray);

    const addDataArray = wantArray.filter((item) =>
      pageJsonConfig.includes(item.jjmc_order)
    );
    // console.log("addDataArray", addDataArray);

    const pageConfigEntityRecord = addDataArray
      .sort((a, b) => Number(a.jjmc_order) - Number(b.jjmc_order))
      .map((element, index) => {
        const transform = JSON.parse(dataJsonConfig);
        return {
          ...element,
          data: transform[index],
        };
      });

    setPageConfigureEntityRecord(mockData);

    if (pageConfigEntityRecord.length > 0) {
      setPageConfigureEntityRecord(pageConfigEntityRecord);
    }
  }, [
    records,
    columns,
    pageJsonConfig,
    dataJsonConfig,
    setPageConfigureEntityRecord,
  ]);

  useEffect(() => {
    if (pageConfigureEntityRecord.length > 0) {
      handleChangeMusic(true);
    }
  }, [pageConfigureEntityRecord]);

  console.log("pageConfigureEntityRecord888888", pageConfigureEntityRecord);
  console.log("appWidthRate", appWidthRate);
  console.log("appHeightRate", appHeightRate);

  return (
    <div style={{ position: "relative" }}>
      <Swiper
        style={{ height }}
        spaceBetween={30}
        effect={"fade"}
        direction={"vertical"}
        modules={[EffectFade]}
        className="mySwiper"
        onActiveIndexChange={(swiper) => {
          // console.log("swiper.activeIndex", swiper.activeIndex);
          setActiveIndex(swiper.activeIndex);
        }}
        onSlideChange={() => {
          setSlide(false);
          setTimeout(() => {
            setSlide(true);
          }, 0);
        }}
      >
        {pageConfigureEntityRecord.map((item, index, array) => {
          const opacity = activeIndex === index ? 1 : 0;
          // const transformHomepageimganimation =
          //   item.jjmc_homepageimganimation &&
          //   JSON.parse(item.jjmc_homepageimganimation);
          const transformHomepageimganimation = item.jjmc_homepageimganimation;
          // const transformmedalJsonConfig=
          //   medalJsonConfig && JSON.parse(medalJsonConfig);
          // const transformMedalIconJson = item.jjmc_medaliconjson && JSON.parse(item.jjmc_medaliconjson);
          // const newMedaliconJson = transformMedalIconJson && transformMedalIconJson.splice(0, transformmedalJsonConfig.length);
          // const filterMedalIconJson = newMedaliconJson && newMedaliconJson.map((element: any, index:number) => {
          //   return {
          //     ...element,
          //     medaliconimg: transformmedalJsonConfig[index].medaliconimg
          //   }
          // })

          return (
            <SwiperSlide key={index}>
              <img
                style={{
                  height,
                  width,
                  opacity,
                }}
                src={item.jjmc_base64 || ""}
                className="slide-img-position"
                alt="background-img"
              />
              {transformHomepageimganimation?.map((value) => {
                return (
                  <img
                    width={Math.floor(Number(value.width) * appWidthRate)}
                    height={Math.floor(Number(value.height) * appWidthRate)}
                    alt="homepageimganimation-img"
                    className={classNames({
                      "page-animation-left":
                        isSlide && value.animationPostion === "left",
                      "page-animation-right":
                        isSlide && value.animationPostion === "right",
                    })}
                    style={{
                      position: "absolute",
                      left: getPPElementSize(appWidthRate, value.left),
                      top: getPPElementSize(appHeightRate, value.top),
                      objectFit: "contain",
                      opacity,
                    }}
                    src={value.img}
                  />
                );
              })}
              {item.jjmc_elementimg && (
                <img
                  width="100%"
                  alt="element-img"
                  className={classNames({ "element-img": isSlide })}
                  style={{
                    position: "absolute",
                    bottom: getPPElementSize(
                      appHeightRate,
                      item.jjmc_eleimgbottom
                    ),
                    left: item.jjmc_eleimgleft
                      ? getPPElementSize(appWidthRate, item.jjmc_eleimgleft)
                      : 0,
                    opacity,
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
              {/* {filterMedalIconJson?.map((element, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width: getPPElementSize(appWidthRate, element.width),
                      height: getPPElementSize(appWidthRate, element.height),
                      top: getPPElementSize(appHeightRate, element.top),
                      left: getPPElementSize(appWidthRate, element.left),
                      position: "absolute",
                      opacity,
                    }}
                    onClick={() => handleClick(element)}
                    className={classNames({ "element-img": isSlide })}
                  >
                    <img
                      src={element.medaliconimg}
                      alt="medaliconPng"
                      width="100%"
                      height="100%"
                    />
                  </div>
                );
              })} */}
              <div
                className="text-container"
                style={{
                  top: item.jjmc_distancetop
                    ? getPPElementSize(appHeightRate, item.jjmc_distancetop)
                    : "150px",
                  opacity,
                }}
              >
                {item.data.map((value, rowIndex) => {
                  return (
                    <div
                      className="text-row"
                      key={rowIndex}
                      style={{
                        lineHeight: getPPElementSize(
                          appHeightRate,
                          "156",
                          false
                        ),
                      }}
                    >
                      {value.map((row, index) => {
                        return (
                          <span
                            key={index}
                            className={classNames({ "text-span": isSlide })}
                            style={{
                              color: row.color,
                              fontFamily: row.fontFamily
                                ? row.fontFamily
                                : 'Robot',
                              fontSize: getPPFontSize(
                                appWidthRate,
                                row.fontSize
                              ),
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
              {item.jjmc_musicimg && (
                <div
                  style={{
                    width: getPPElementSize(appWidthRate, "35"),
                    height: getPPElementSize(appWidthRate, "35"),
                    top: getPPElementSize(appHeightRate, "80"),
                    right: getPPElementSize(appWidthRate, "24"),
                    position: "absolute",
                  }}
                >
                  <img
                    src={item.jjmc_musicimg}
                    alt="musicPng"
                    width="100%"
                    height="100%"
                    className="music-img"
                  />
                </div>
              )}
              {item.jjmc_buttonimg && index === 0 && (
                <SlideNextButton
                  width={Math.floor(Number(buttonFirstWidth) * appWidthRate)}
                  height={Math.floor(Number(buttonFirstHeight) * appWidthRate)}
                  buttonImg={item.jjmc_buttonimg}
                  appWidthRate={appWidthRate}
                  appHeightRate={appHeightRate}
                  buttonImgBottom={buttonFirstImgBottom}
                  buttonImgLeft={buttonFirstImgLeft}
                  slideToPageIndex={1}
                  isSlide={isSlide}
                />
              )}
              {item.jjmc_buttonimg && index === array.length - 1 && (
                <SlideNextButton
                  width={Math.floor(Number(buttonEndWidth) * appWidthRate)}
                  height={Math.floor(Number(buttonEndHeight) * appHeightRate)}
                  buttonImg={item.jjmc_buttonimg}
                  appWidthRate={appWidthRate}
                  appHeightRate={appHeightRate}
                  buttonImgBottom={buttonEndImgBottom}
                  buttonImgLeft={buttonEndImgLeft}
                  slideToPageIndex={0}
                  isSlide={isSlide}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {isShowModal && (
        <>
          <img
            width={width}
            height={height}
            alt="medalBulleFrame"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 999,
            }}
            src={medalBulleFrame}
          />
          <div
            style={{
              position: "absolute",
              top: 65,
              right: 28,
              zIndex: 999,
            }}
            onClick={onClose}
          >
            <CloseSvg />
          </div>
        </>
      )}
    </div>
  );
});

Pages.displayName = "Pages";
