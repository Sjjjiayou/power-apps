import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Howl } from "howler";
import { PageProps } from "./type";
import "swiper/css";
import "swiper/css/effect-fade";
import "./css/AnnualReport.css";
import { EffectFade } from "swiper/modules";
import classNames from "classnames";

export const Pages = React.memo((props: PageProps) => {
  const { width, height, columns, records, handleShotDom } = props;

  const [isSlide, setSlide] = useState(true);
  const playIdRef = useRef();
  const [isPauseMusic, setPauseMusic] = useState(false);

  const [pageConfigureEntityRecord, setPageConfigureEntityRecord] = useState<
    any[]
  >([
    {
      jjmc_order: 1,

      jjmc_pagestyle: 762670000,

      jjmc_backgroundimg: {
        fileName: "",

        fileSize: 14594,

        mimeType: "application/octet-stream",

        fileUrl: "",

        thumbnailUrl:
          "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/-%20(1).png",
      },

      data: [
        "在这一年里",

        "你的AIFV上传率排名为xx",

        "策略达成率击败了%",

        "其中最佳完成策略为xx",

        "你的所有付出",

        "只为千万次最美律动",
      ],
    },

    {
      jjmc_order: 2,

      jjmc_pagestyle: 762670001,

      jjmc_backgroundimg: {
        fileName: "",

        fileSize: 10464,

        mimeType: "application/octet-stream",

        fileUrl: "",

        thumbnailUrl:
          "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/-%20(1).png",
      },

      data: [
        "在这一年里",

        "一共覆盖了283家医院",

        "新开发的医院共计86家",

        "时间不会辜负努力",
      ],
    },
  ]);

  let httpRequest;
  // console.log("columns", columns);
  // console.log("records", records);

  const handleClick = React.useCallback(async () => {
    // console.log("22222222211111");
    // const dom = document.getElementById("image-set");
    // handleShotDom(dom);
    // // if (dom) {
    // //   const imageBase64 = await html2canvas(dom, { useCORS: true }).then(
    // //     function (canvas) {
    // //       console.log(canvas);
    // //       const outputBase = canvas
    // //         .toDataURL("image/jpeg")
    // //         .replace("image/jpeg", "image/octet-stream");
    // //       return outputBase;
    // //     }
    // //   );
    // //   console.log(imageBase64);
    // //   const link = document.createElement("a");
    // //   link.href = imageBase64;
    // //   link.download = "download.png";
    // //   link.click();
    // // }
    // const url =
    //   "https://prod-05.chinaeast2.logic.azure.cn:443/workflows/5886fa13499649c2afd234b9c3c79f6f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=efMCSpfEhpWf0PA4u1oCZLt7zWjlN6r0A38ChB-2RHI";
    // httpRequest = new XMLHttpRequest();
    // if (!httpRequest) {
    //   alert("放弃了 :( 不能创建 XMLHTTP 实例");
    //   return false;
    // }
    // httpRequest.onreadystatechange = alertContents;
    // httpRequest.open("POST", url);
    // httpRequest.send();
  }, []);

  const alertContents = () => {
    try {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          alert(httpRequest.responseText);
        } else {
          alert("请求遇到了问题。");
        }
      }
    } catch (e: any) {
      console.log("e", e);
      alert(`遇到了 exception：${e.description}`);
    }
  };

  const handleMusic = () => {
    setPauseMusic(!isPauseMusic);
  };

  const sound = new Howl({
    src: [
      "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%9E%AB%20(Live).mp3",
    ],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function () {
      console.log("Finished!");
    },
  });

  useEffect(() => {
    console.log("isPauseMusic", isPauseMusic);
    console.log(3333);
    if (!isPauseMusic) {
      console.log(9999998);
      const id = sound.play();
      console.log("id", id)
      if (playIdRef.current === undefined) {
        playIdRef.current = id;
      }
    } else {
      console.log(" playIdRef.current", playIdRef.current);

      sound.pause(playIdRef.current);
    }
  }, [isPauseMusic]);

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

    const addDataArray = wantArray.map((item, index) => {
      if (item.jjmc_order === 1) {
        return {
          ...item,
          data: [
            "在这一年里",

            "你的AIFV上传率排名为xx",

            "策略达成率击败了%",

            "其中最佳完成策略为xx",

            "你的所有付出",

            "只为千万次最美律动",
          ],
        };
      } else if (item.jjmc_order === 2) {
        return {
          ...item,
          data: [
            "在这一年里",

            "一共覆盖了283家医院",

            "新开发的医院共计86家",

            "时间不会辜负努力",
          ],
        };
      }
    });
    console.log("wantArray", wantArray);
    console.log("addDataArray", addDataArray);
    // setPageConfigureEntityRecord(addDataArray);
  }, [records, columns]);

  // console.log("pageConfigureEntityRecord8888", pageConfigureEntityRecord);

  return (
    <div
      style={{ width: "100%", height: "auto" }}
      onClick={handleClick}
      id="image-set"
    >
      <Swiper
        spaceBetween={30}
        direction={"vertical"}
        effect={"fade"}
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
            <SwiperSlide key={index} virtualIndex={index}>
              <div
                style={{
                  height: height,
                  width: width,
                  background: `url('${item.jjmc_backgroundimg?.thumbnailUrl}') center center/cover no-repeat transparent`,
                }}
                className="slide-position"
              />
              <div className="text-container" id={`textContent${index}`}>
                {item.data.map((text, itemIndex) => {
                  return (
                    <span
                      className={classNames({ "text-row": isSlide })}
                      style={{
                        animationDelay: `${itemIndex * 2}s`,
                      }}
                      key={itemIndex}
                    >
                      {text}
                    </span>
                  );
                })}
              </div>
              <div className="music-position" onClick={handleMusic}>
                <img
                  src="https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/music1.png"
                  alt="musicPng"
                  width={35}
                  height={35}
                  className="music-img"
                />
              </div>
              <div className="top-element-position">
                <img
                  src="https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/cloud.png"
                  alt="topElement"
                  width={146}
                  height={28}
                  className="cloud-img"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
});

Pages.displayName = "Pages";
