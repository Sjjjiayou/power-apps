import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Howl } from "howler";
import { PageProps } from "./type";
import "swiper/css";
import "swiper/css/effect-fade";
import "./css/AnnualReport.css";
import { EffectFade } from "swiper/modules";
import classNames from "classnames";

const sound = new Howl({
  src: [
    "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%9E%AB%20(Live).mp3",
  ],
  autoplay: true,
  loop: true,
  volume: 0.5,
  onload: function () {
    // alert("onload");
    console.log("onload");
  },
  onplay: function () {
    // alert("onplay");
    console.log("onplay");
  },
  onend: function () {
    console.log("Finished!");
  },
  onpause: function () {
    // alert("onPause");
    console.log("onPause");
  },
});

export const Pages = React.memo((props: PageProps) => {
  const { width, height, columns, records, handleShotDom } = props;

  const [isSlide, setSlide] = useState(true);
  const playIdRef = useRef();
  const [isPauseMusic, setPauseMusic] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const [pageConfigureEntityRecord, setPageConfigureEntityRecord] = useState<
    any[]
  >([
    {
      jjmc_order: 1,

      jjmc_pagestyle: 762670000,

      jjmc_backgroundimg: {
        fileName: "",

        fileSize: 9519,

        mimeType: "application/octet-stream",

        fileContent:
          "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",

        fileUrl: "",

        thumbnailUrl:
          "https://jjmc-dev.crm.dynamics.cn/Image/download.aspx?Entity=jjmc_employeereportpage&Attribute=jjmc_backgroundimg&Id=30d293db-1067-ee11-9ae6-0017fa02a3a4",
      },

      data: [
        [
          {
            label: "在这一年里,",

            color: "white",

            fontSize: "18px",
          },
        ],

        [
          {
            label: "你的AIFV上传率排名为",

            color: "white",

            fontSize: "18px",
          },

          {
            label: "XX",

            color: "#f9f212de",

            fontSize: "24px",
          },
        ],

        [
          {
            label: "其中最佳完成策略为",

            color: "white",

            fontSize: "18px",
          },

          {
            label: "XX",

            color: "#f9f212de",

            fontSize: "24px",
          },
        ],

        [
          {
            label: "你的所有",

            color: "white",

            fontSize: "18px",
          },

          {
            label: "付出",

            color: "#f9f212de",

            fontSize: "24px",
          },
        ],

        [
          {
            label: "只为千万次",

            color: "white",

            fontSize: "18px",
          },

          {
            label: "最美律动",

            color: "#f9f212de",

            fontSize: "24px",
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

        fileContent:
          "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",

        fileUrl: "",

        thumbnailUrl:
          "https://jjmc-dev.crm.dynamics.cn/Image/download.aspx?Entity=jjmc_employeereportpage&Attribute=jjmc_backgroundimg&Id=30d293db-1067-ee11-9ae6-0017fa02a3a4",
      },

      data: [
        [
          {
            label: "你今年",

            color: "white",

            fontSize: "18px",
          },
        ],

        [
          {
            label: "跟台时间共计",

            color: "white",

            fontSize: "18px",
          },

          {
            label: "200",

            color: "#f9f212de",

            fontSize: "24px",
          },

          {
            label: "天",

            color: "#f9f212de",

            fontSize: "18px",
          },
        ],

        [
          {
            label: "其中",

            color: "white",

            fontSize: "18px",
          },

          {
            label: "6",

            color: "#f9f212de",

            fontSize: "24px",
          },

          {
            label: "月份",

            color: "#f9f212de",

            fontSize: "18px",
          },
        ],

        [
          {
            label: "跟台",

            color: "#f9f212de",

            fontSize: "24px",
          },

          {
            label: "数量最多",

            color: "white",

            fontSize: "18px",
          },
        ],

        [
          {
            label: "其中你最擅长的类型是",

            color: "white",

            fontSize: "18px",
          },

          {
            label: "房颤相关",

            color: "#f9f212de",

            fontSize: "24px",
          },
        ],

        [
          {
            label: "专业立身",

            color: "#f9f212de",

            fontSize: "24px",
          },

          {
            label: "不断成长",

            color: "white",

            fontSize: "18px",
          },
        ],
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
    const url =
      "https://prod-05.chinaeast2.logic.azure.cn:443/workflows/5886fa13499649c2afd234b9c3c79f6f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=efMCSpfEhpWf0PA4u1oCZLt7zWjlN6r0A38ChB-2RHI";
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
      alert("放弃了 :( 不能创建 XMLHTTP 实例");
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open("POST", url);
    httpRequest.send();
  }, []);

  const alertContents = () => {
    try {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        console.log("httpRequest", httpRequest);
        if (httpRequest.status === 200) {
          // alert(httpRequest.responseText);
        } else {
          // alert("请求遇到了问题。");
        }
      }
    } catch (e: any) {
      console.log("e", e);
      // alert(`遇到了 exception：${e.description}`);
    }
  };

  const handleMusic = () => {
    setPauseMusic(!isPauseMusic);
  };

  useEffect(() => {
    console.log("isPauseMu6888", isPauseMusic);
    if (!isPauseMusic) {
      console.log(99999988);
      const id = sound.play();
      console.log("id", id);
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
            [
              {
                label: "在这一年里,",

                color: "white",

                fontSize: "18px",
              },
            ],
            [
              {
                label: "你的AIFV上传率排名为",

                color: "white",

                fontSize: "18px",
              },

              {
                label: "XX",

                color: "#f9f212de",

                fontSize: "24px",
              },
            ],
            [
              {
                label: "其中最佳完成策略为",

                color: "white",

                fontSize: "18px",
              },

              {
                label: "XX",

                color: "#f9f212de",

                fontSize: "24px",
              },
            ],
            [
              {
                label: "你的所有",

                color: "white",

                fontSize: "18px",
              },

              {
                label: "付出",

                color: "#f9f212de",

                fontSize: "24px",
              },
            ],
            [
              {
                label: "只为千万次",

                color: "white",

                fontSize: "18px",
              },

              {
                label: "最美律动",

                color: "#f9f212de",

                fontSize: "24px",
              },
            ],
          ],
        };
      } else if (item.jjmc_order === 2) {
        return {
          ...item,
          data: [
            [
              {
                label: "你今年",

                color: "white",

                fontSize: "18px",
              },
            ],

            [
              {
                label: "跟台时间共计",

                color: "white",

                fontSize: "18px",
              },

              {
                label: "200",

                color: "#f9f212de",

                fontSize: "24px",
              },

              {
                label: "天",

                color: "#f9f212de",

                fontSize: "18px",
              },
            ],

            [
              {
                label: "其中",

                color: "white",

                fontSize: "18px",
              },

              {
                label: "6",

                color: "#f9f212de",

                fontSize: "24px",
              },

              {
                label: "月份",

                color: "#f9f212de",

                fontSize: "18px",
              },
            ],

            [
              {
                label: "跟台",

                color: "#f9f212de",

                fontSize: "24px",
              },

              {
                label: "数量最多",

                color: "white",

                fontSize: "18px",
              },
            ],

            [
              {
                label: "其中你最擅长的类型是",

                color: "white",

                fontSize: "18px",
              },

              {
                label: "房颤相关",

                color: "#f9f212de",

                fontSize: "24px",
              },
            ],

            [
              {
                label: "专业立身",

                color: "#f9f212de",

                fontSize: "24px",
              },

              {
                label: "不断成长",

                color: "white",

                fontSize: "18px",
              },
            ],
          ],
        };
      }
    });
    console.log("wantArray1111", wantArray);
    console.log("addDataArray", addDataArray);
    // setPageConfigureEntityRecord(addDataArray);
  }, [records, columns]);

  console.log("pageConfigureEntityRecord8888", pageConfigureEntityRecord);
  console.log("333332222");

  alert(JSON.stringify(pageConfigureEntityRecord));

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
        onActiveIndexChange={(swiper) => {
          alert(swiper.activeIndex);
          console.log("swiper.activeIndex", swiper.activeIndex);
          setActiveIndex(swiper.activeIndex);
        }}
        onSlideChange={(swiper) => {
          alert(8888888);
          setSlide(false);
          setTimeout(() => {
            setSlide(true);
          }, 0);
        }}
      >
        {pageConfigureEntityRecord.map((item, index) => {
          return (
            <SwiperSlide key={item} virtualIndex={index}>
              <img
                style={{
                  height: height,
                  width: width,
                  // opacity: activeIndex === index ? 1 : 0,
                  // background: `url('${item?.jjmc_backgroundimg?.thumbnailUrl}') center center/cover no-repeat transparent`,
                  // background: `url('https://jjmc-dev.crm.dynamics.cn/Image/download.aspx?Entity=jjmc_employeereportpage&Attribute=jjmc_backgroundimg&Id=30d293db-1067-ee11-9ae6-0017fa02a3a4') center center/cover no-repeat transparent`,
                  background: ` url('data:image/png;base64,${item?.jjmc_backgroundimg?.fileContent}') center center/cover no-repeat transparent`,
                  // background: `url('data:image/png;base64,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}') center center/cover no-repeat transparent`,
                }}
                // src={`data:image/png;base64,${item?.jjmc_backgroundimg?.fileContent}`}
                className="slide-position"
              />
              <div className="text-container" id={`textContent${index}`}>
                {item?.data.map((value, rowIndex) => {
                  return (
                    <div
                      className={classNames({ "text-row": isSlide })}
                      style={{
                        animationDelay: `${rowIndex * 2}s`,
                      }}
                      key={rowIndex}
                    >
                      {value.map((row, index) => {
                        return (
                          <span
                            key={index}
                            style={{ color: row.color, fontSize: row.fontSize }}
                          >
                            {row.label}
                          </span>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <div className="music-position" onClick={handleMusic}>
                <img
                  src="https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/music1.png"
                  alt="musicPng"
                  width={35}
                  height={35}
                  className={classNames({ "music-img": !isPauseMusic })}
                />
              </div>
              {/* <div className="top-element-position">
                <img
                  src="https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/cloud.png"
                  alt="topElement"
                  width={146}
                  height={28}
                  className="cloud-img"
                />
              </div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
});

Pages.displayName = "Pages";
