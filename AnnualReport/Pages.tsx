import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PageProps } from "./type";
import "swiper/css";
import "swiper/css/effect-fade";
import "./css/AnnualReport.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade } from "swiper/modules";
import classNames from "classnames";

export const Pages = React.memo((props: PageProps) => {
  const {
    width,
    height,
    columns,
    records,
    dataJsonConfig,
    pageJsonConfig,
    musicRotateIconTopPosition,
    musicRotateIconRightPosition,
  } = props;

  const [slideActiveIndex, setSlideActiveIndex] = useState(0);
  const [isSlide, setSlide] = useState(true);

  const [pageConfigureEntityRecord, setPageConfigureEntityRecord] = useState<
    any[]
  >([
    {
      jjmc_order: 0,
      jjmc_pagestyle: 762670000,
      jjmc_backgroundimg: {
        fileName: "",

        fileSize: 9519,

        mimeType: "application/octet-stream",

        fileUrl: "",

        thumbnailUrl:
          "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E8%83%8C%E6%99%AF%E5%9B%BE1.png",
      },

      data: [
        [
          {
            label: "还记得 ",

            color: "#3D2820",

            fontSize: "17px",

            fontWeight: "500",

            margin: "0px 0px 24px 24px",
            delaySeconds: "0.8s",
          },
          {
            label: "2022年1月3日",

            color: "#C67B24",

            fontSize: "22px",

            fontWeight: "700",
            margin: "0px 0px 24px 0px",
            delaySeconds: "0.8s",
          },
          {
            label: "吗？",

            color: "#3D2820",

            fontSize: "17px",

            fontWeight: "500",

            margin: "0px 0px 24px 0px",
            delaySeconds: "0.8s",
          },
        ],
        [
          {
            label: "这是你第一次打开行稳致远的日子",

            color: "#3D2820",

            fontSize: "17px",

            fontWeight: "500",

            margin: "0px 0px 6px 24px",
            delaySeconds: "2.4s",
          },
        ],
        [
          {
            label: "截至今天，已经过去",

            color: "#3D2820",

            fontSize: "17px",

            fontWeight: "500",

            margin: "0px 0px 24px 24px",
            delaySeconds: "3.2s",
          },
          {
            label: "1134天",

            color: "#C67B24",

            fontSize: "22px",

            fontWeight: "700",
            margin: "0px 0px 24px 0px",
            delaySeconds: "3.2s",
          },
        ],

        [
          {
            label: "今年上线了很多功能：",

            color: "#3D2820",

            fontSize: "17px",

            fontWeight: "500",

            margin: "0px 0px 6px 24px",
            delaySeconds: "4.8s",
          },
          {
            label: "术者旅程、客户",

            color: "#C67B24",

            fontSize: "22px",

            fontWeight: "700",
            margin: "0px 0px 6px 0px",
            delaySeconds: "4.8s",
          },
        ],
        [
          {
            label: " 管理、我想找到你、飞虎队填岗、",

            color: "#C67B24",

            fontSize: "22px",

            fontWeight: "700",
            margin: "0px 0px 6px 24px",
            delaySeconds: "5.6s",
          },
        ],
        [
          {
            label: " 设备管理",

            color: "#C67B24",

            fontSize: "22px",

            fontWeight: "700",
            margin: "0px 0px 6px 24px",
            delaySeconds: "6.4s",
          },
          {
            label: "等",

            color: "#3D2820",

            fontSize: "17px",

            fontWeight: "500",

            margin: "0px 0px 6px 0px",
            delaySeconds: "6.4s",
          },
        ],
        [
          {
            label: "你最爱访问的模块是 ",

            color: "#3D2820",

            fontSize: "17px",

            fontWeight: "500",

            margin: "0px 0px 24px 24px",
            delaySeconds: "7.2s",
          },
          {
            label: "策略宝",

            color: "#C67B24",

            fontSize: "22px",

            fontWeight: "700",
            margin: "0px 0px 24px 0px",
            delaySeconds: "7.2s",
          },
        ],
        [
          {
            label: "'不断地迭代更新，只是为了更好地加持你",
            color: "rgba(61, 40, 32, 0.68)",
            fontSize: "17px",
            fontWeight: "500",
            delaySeconds: "8.8s",
            margin: "0px 0px 4px 24px",
          },
        ],
        [
          {
            label: "的日常工作'",
            color: "rgba(61, 40, 32, 0.68)",
            fontSize: "17px",
            fontWeight: "500",
            delaySeconds: "9.6s",
            margin: "0px 0px 0px 24px",
          },
        ],
      ],
    },

    {
      jjmc_order: 11,

      jjmc_pagestyle: 762670001,

      jjmc_backgroundimg: {
        fileName: "",

        fileSize: 9519,

        mimeType: "application/octet-stream",

        fileUrl: "",

        thumbnailUrl:
          "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E8%83%8C%E6%99%AF%E5%9B%BE2.png",
      },
      data: [
        [
          {
            label: "今年，你的跟台时间共计 ",

            color: "#3D2820",

            fontSize: "17px",

            fontWeight: "500",

            margin: "0px 0px 8px 24px",
            delaySeconds: "0.8s",
          },
          {
            label: "220天",

            color: "#C67B24",

            fontSize: "22px",

            fontWeight: "700",
            margin: "0px 0px 8px 0px",
            delaySeconds: "0.8s",
          },
        ],
        [
          {
            label: "总台数超过全国平均 ",

            color: "#3D2820",

            fontSize: "17px",

            fontWeight: "500",

            margin: "0px 0px 8px 24px",
            delaySeconds: "1.6s",
          },
          {
            label: "78%",

            color: "#C67B24",

            fontSize: "22px",

            fontWeight: "700",
            margin: "0px 0px 8px 0px",
            delaySeconds: "1.6s",
          },
        ],
        [
          {
            label: "你最擅长的术式是 ",

            color: "#3D2820",

            fontSize: "17px",

            fontWeight: "500",

            margin: "0px 0px 30px 24px",
            delaySeconds: "2.4s",
          },
          {
            label: "房颤",

            color: "#C67B24",

            fontSize: "22px",

            fontWeight: "700",
            margin: "0px 0px 30px 0px",
            delaySeconds: "2.4s",
          },
        ],
        [
          {
            label: "'一整年你都在守护着最美律动，感谢每次",
            color: "rgba(61, 40, 32, 0.68)",
            fontSize: "17px",
            fontWeight: "500",
            delaySeconds: "4s",
            margin: "0px 0px 4px 24px",
          },
        ],
        [
          {
            label: "窦律带来的惊喜'",
            color: "rgba(61, 40, 32, 0.68)",
            fontSize: "17px",
            fontWeight: "500",
            delaySeconds: "4s",
            margin: "0px 0px 0px 24px",
          },
        ],
      ],
    },
    {
      jjmc_order: 2,

      jjmc_pagestyle: 762670001,

      jjmc_backgroundimg: {
        fileName: "",

        fileSize: 9519,

        mimeType: "application/octet-stream",

        fileUrl: "",

        thumbnailUrl:
          "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E8%83%8C%E6%99%AF%E5%9B%BE3.png",
      },
      data: [
        [
          {
            label: "6月份",

            color: "#F28C38",

            fontSize: "22px",

            fontWeight: "600",

            margin: "0px 0px 8px 24px",
            delaySeconds: "0.8s",
          },
          {
            label: "你的跟台数量最多",

            color: "#FFF",

            fontSize: "17px",

            fontWeight: "400",
            margin: "0px 0px 8px 0px",
            delaySeconds: "0.8s",
          },
        ],
        [
          {
            label: "其中最早传台时间是",

            color: "#FFF",

            fontSize: "17px",

            fontWeight: "400",

            margin: "0px 0px 8px 24px",
            delaySeconds: "1.6s",
          },
          {
            label: "7月21日06:35 ",

            color: "#F28C38",

            fontSize: "22px",

            fontWeight: "600",

            margin: "0px 0px 8px 0px",
            delaySeconds: "1.6s",
          },
        ],
        [
          {
            label: "最晚传台时间是",
            color: "#FFF",
            fontSize: "17px",
            fontWeight: "400",
            margin: "0px 0px 8px 24px",
            delaySeconds: "2.4s",
          },
          {
            label: "3月10日 12:35",

            color: "#F28C38",

            fontSize: "22px",

            fontWeight: "600",

            margin: "0px 0px 8px 0px",
            delaySeconds: "2.4s",
          },
        ],
        [
          {
            label: "'风雨兼程 你和术者一起守护着“心”的承诺'",
            color: "#BFE9FF",
            fontSize: "17px",
            fontWeight: "500",
            delaySeconds: "4s",
            margin: "0px 0px 4px 24px",
          },
        ],
      ],
    },
  ]);

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

    console.log("wantArray1111", wantArray);

    const addDataArray = wantArray.filter((item) =>
      pageJsonConfig.includes(item.jjmc_order)
    );
    console.log("addDataArray", addDataArray);

    const pageConfigEntityRecord = addDataArray.map((element, index) => {
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

  console.log("pageConfigureEntityRecord99999", pageConfigureEntityRecord);
  console.log("dataJsonConfig-in", dataJsonConfig);
  console.log("dataJsonConfig-in", dataJsonConfig);
  console.log("isSlide", isSlide)

  console.log("slideActiveIndex", slideActiveIndex);
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      direction={"vertical"}
      modules={[EffectFade]}
      className="mySwiper"
      onActiveIndexChange={(swiper) => {
        console.log('swiper.activeIndex', swiper.activeIndex)
        setSlideActiveIndex(swiper.activeIndex);
      }}
      onSlideChange={() => {
        setSlide(false);
        setTimeout(() => {
          setSlide(true);
        }, 0);
      }}
    >
      {pageConfigureEntityRecord.slice(0).map((item) => {
        return (
          <SwiperSlide key={item.jjmc_order}>
            <img
              style={{
                height: height,
                width: width,
              }}
              // src={`data:image/png;base64,${item?.jjmc_backgroundimg?.fileContent}`}
              // src={`'${item?.jjmc_backgroundimg?.thumbnailUrl}full=true'`}
              src={`${item?.jjmc_backgroundimg?.thumbnailUrl}`}
              className="slide-img-position"
              alt="config-img"
            />
            <div
              className="text-container"
              style={{
                top: "145px",
              }}
            >
              {item?.data.map((value, rowIndex) => {
                return (
                  <div className="text-row" key={rowIndex}>
                    {value.map((row, index) => {
                      return (
                        <span
                          key={index}
                          className={classNames({ "text-span": isSlide })}
                          style={{
                            color: row.color,
                            fontSize: row.fontSize,
                            fontWeight: row.fontWeight,
                            margin: row.margin,
                            animationDelay: row.delaySeconds,
                          }}
                        >
                          {row.label}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div
              style={{
                position: "absolute",
                top: `${musicRotateIconTopPosition + "px"}`,
                right: `${musicRotateIconRightPosition + "px"}`,
              }}
            >
              <img
                src="https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/music1.png"
                alt="musicPng"
                width={35}
                height={35}
                className="music-img"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
});

Pages.displayName = "Pages";
