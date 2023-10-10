import * as React from "react";
import { PageProps } from "./type";
// import { Howl } from "howler";

export const Pages = React.memo((props: PageProps) => {
  const { width, height, columns, records, auditLogSet } = props;
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
    console.log("44444444")
    const auditLog = auditLogSet.records;

    console.log("auditLog", auditLog);
    console.log("auditLogSet-in", auditLogSet)
    if (Object.keys(auditLog).length > 0) {
      console.log(
        "getColumnInfo",
        // @ts-ignore
        auditLog["1d85ca34-e434-ed11-9daf-0017fa020932"].getColumnInfo(
          "AppName"
        )
      );
      auditLog["1d85ca34-e434-ed11-9daf-0017fa020932"]
        // @ts-ignore
        .setValue("jjmc_appname", "测试应用");
      auditLog["1d85ca34-e434-ed11-9daf-0017fa020932"]
        // @ts-ignore
        .save()
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [auditLogSet]);

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
