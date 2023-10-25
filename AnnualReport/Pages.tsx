import React, { useEffect, useRef, useState } from "react";
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
  const { width, height, columns, records, dateConfigSet, data } = props;
  console.log(111111);
  console.log("records", records);
  console.log("columns", columns);

  const [isSlide, setSlide] = useState(true);
  const [pageConfigureEntityRecord, setPageConfigureEntityRecord] = useState<
    any[]
  >([]);
  const [pageTextData, setPageTextData] = useState("");
  const [pageConfig, setPageConfig] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (dateConfigSet.sortedRecordIds.length > 0) {
        console.log(44444);
        const dataJson =
          data[dateConfigSet.sortedRecordIds[0]].getValue("jjmc_datajson");
        const pageJson =
          data[dateConfigSet.sortedRecordIds[0]].getValue("jjmc_pagejson");
        if (dataJson) {
          setPageTextData(dataJson as string);
        }

        console.log("dataJson55", dataJson);
        console.log("pageJson55", pageJson);

        if (pageJson) {
          setPageConfig(pageJson as string);
        }
      }
    }, 200);
  }, [dateConfigSet, data]);

  useEffect(() => {
    let wantArray: any[] = [];
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

    if (pageConfig.length > 0) {
      const addDataArray = wantArray.filter((item) =>
        pageConfig.includes(item.jjmc_order)
      );
      console.log("addDataArray", addDataArray);

      const pageConfigEntityRecord = addDataArray.map((element, index) => {
        const transform = JSON.parse(pageTextData);
        return {
          ...element,
          data: transform[index],
        };
      });
      console.log("pageConfigEntityRecord", pageConfigEntityRecord);
      setPageConfigureEntityRecord(pageConfigEntityRecord);
    }
  }, [records, columns, pageConfig, pageTextData]);

  console.log("pageConfigureEntityRecord99999", pageConfigureEntityRecord);
  console.log("pageTextData", pageTextData);
  console.log("pageConfig", pageConfig);

  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      direction={"vertical"}
      modules={[EffectFade]}
      className="mySwiper"
      onSlideChange={() => {
        setSlide(false);
        setTimeout(() => {
          setSlide(true);
        }, 0);
      }}
    >
      {pageConfigureEntityRecord.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              style={{
                height: height,
                width: width,
              }}
              src={`data:image/png;base64,${item?.jjmc_backgroundimg?.fileContent}`}
              // src={item?.jjmc_backgroundimg?.thumbnailUrl}
              className="slide-img-position"
              alt="config-img"
            />
            <div className="text-container" id={`textContent${index}`}>
              {item?.data.map((value, rowIndex) => {
                return (
                  <div
                    className={classNames({ "text-row": isSlide })}
                    style={{
                      animationDelay: `${rowIndex * 0.8}s`,
                    }}
                    key={rowIndex}
                  >
                    {value.map((row, index) => {
                      return (
                        <span
                          key={index}
                          style={{
                            color: row.color,
                            fontSize: row.fontSize,
                            fontWeight: row.fontWeight,
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
            <div className="music-position">
              <img
                src="https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/music1.png"
                alt="musicPng"
                width={35}
                height={35}
                className={classNames({ "music-img": true })}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
});

Pages.displayName = "Pages";
