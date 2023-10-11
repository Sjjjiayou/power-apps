import * as React from "react";
import { PageProps } from "./type";
import html2canvas from "html2canvas";
// import { Howl } from "howler";

export const Pages = React.memo((props: PageProps) => {
  const { width, height, columns, records } = props;
  let httpRequest;
  console.log("columns", columns);
  console.log("records", records);

  // const getEntityRecord = React.useMemo(() => {
  //   return columns.map((col) => {
  //     Object.keys(records).forEach((key) => {
  //       return {
  //         key: col.name,
  //         fieldName: col.name,
  //         ...col,
  //         data: records[key].getValue(col.name),
  //       };
  //     });
  //   });
  // }, [columns]);

  const getEntityRecord = [
    "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/first-page.png",
    "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/first-page.png",
    "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/first-page.png",
  ];

  const handleClick = React.useCallback(async () => {
    console.log("22222222211111");
    const dom = document.getElementById("image-set");
    if (dom) {
      const imageBase64 = await html2canvas(dom, { useCORS: true }).then(
        function (canvas) {
          console.log(canvas);
          const outputBase = canvas
            .toDataURL("image/jpeg")
            .replace("image/jpeg", "image/octet-stream");
          return outputBase;
        }
      );
      console.log(imageBase64);
      const link = document.createElement("a");
      link.href = imageBase64;
      link.download = "download.png";
      link.click();
    }

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
        if (httpRequest.status === 200) {
          alert(httpRequest.responseText);
        } else {
          alert("请求遇到了问题。");
        }
      }
    } catch (e: any) {
      console.log("e", e)
      alert(`遇到了 exception：${e.description}`);
    }
  };

  // const sound = new Howl({
  //   src: [
  //     "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/P301624281166438.mp3",
  //   ],
  //   autoplay: true,
  //   loop: true,
  //   volume: 0.5,
  //   onend: function () {
  //     console.log("Finished!");
  //   },
  // });

  // React.useEffect(() => {
  //   sound.play();
  //   return () => {
  //     sound.pause();
  //   };
  // }, []);

  return (
    <div
      style={{ width: "100%", height: "auto" }}
      onClick={handleClick}
      id="image-set"
    >
      {getEntityRecord.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              height: height ?? "1000px",
              width: width ?? "400px",
              background: `url('${item}') center center/cover no-repeat transparent`,
            }}
          />
        );
      })}
    </div>
  );
});

Pages.displayName = "Pages";
