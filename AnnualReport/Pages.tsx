import * as React from "react";
import { PageProps } from "./type";
import html2canvas from "html2canvas";
// import { Howl } from "howler";

export const Pages = React.memo((props: PageProps) => {
  const { width, height, columns, records, auditLog } = props;
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

  const handleClick = React.useCallback(() => {
    const imageDOM = document.getElementById("image-set");
    console.log("imageDOM", imageDOM);
    if (imageDOM) {
      html2canvas(imageDOM).then(function (canvas) {
        const urlData = canvas.toDataURL("image/png", 1);
        const bytes = window.atob(urlData.split(",")[1]);
        const mime = urlData.split(",")[0].match(/:(.*?);/)?.[1];
        const ab = new ArrayBuffer(bytes.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < bytes.length; i++) {
          ia[i] = bytes.charCodeAt(i);
        }
        const file = new File([ab], `picture.png`, { type: mime });
        const url = window.URL.createObjectURL(file);
        const tagA = document.createElement("a");
        tagA.setAttribute("href", url);
        tagA.setAttribute("download", `picture.png`);
        tagA.setAttribute("target", "_blank");
        document.body.appendChild(tagA);
        tagA.click();
        document.body.removeChild(tagA);
      });
    }
    // auditLog['fb4bfcf4-9c34-ed11-9daf-0017fa020932'].setValue('AppName', '测试应用')
  }, []);

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
