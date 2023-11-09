export const getPPFontSize = (rate: number, webSize: string) => {
  return Math.floor(Number(webSize) * rate - 5) + "px";
};

export const getPPElementSize = (rate: number, webSize: string, isPx: boolean = true) => {
    let symbol = isPx ? "px" : '%'
  return Math.floor(Number(webSize) * rate) + symbol;
};


export const mockData = [
    {
      jjmc_order: 0,
      jjmc_base64:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E8%83%8C%E6%99%AF%E5%9B%BE0.png",
      jjmc_buttonImg:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/buttonFirstImg.png",
      jjmc_iconImg:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E4%B8%8B%E4%B8%80%E6%AD%A5%201.png",
      jjmc_distancetop: "312",
      data: [
        [
          {
            label: "每一份努力",
            color: "rgba(0, 3, 9, 0.89)",
            fontSize: "32",
            fontWeight: "700",
            marginBottom: "20",
            marginLeft: "122",
            delaySeconds: "0.8s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "都值得被认可",
            color: "rgba(0, 3, 9, 0.89)",
            fontSize: "32",
            fontWeight: "700",
            marginLeft: "106",
            delaySeconds: "1.6s",
            isShowLabel: true,
          },
        ],
      ],
    },
    {
      jjmc_order: 1,
      jjmc_base64:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E8%83%8C%E6%99%AF%E5%9B%BE1.png",
      jjmc_elementimg:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E5%85%83%E7%B4%A0%E5%9B%BE1.png",
      jjmc_musicImg:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/music1.png",
      jjmc_slidepng:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAA5CAYAAAA1DAXNAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASLSURBVHgB7Zvhcdw2EIWfZ/xflwqEVBCpAuMqiFxBmAokVyCqAl8qMF1BlArEVGCnAlEVJK5A4QsWQxAHgDweT1Zm9pvZIQksABKLBRYnCFAURVEURVEURVnMTS8PvVRQXh22l8dengPhcwXlu2PhPMcb5u9eGowNxnwD5cUxcMYIjVP3sgnydxh71ieosV4EGuEWzihzOp/pDcbG+gg11klIGaeFm+5inS9wAUSIEf1wvbqBshoVxmsM7+2ETi5wSNVVQVmMxX5QcDNDh2vRoUZN6SgFDPY7vsYQFMzR2chzae2ao6NkqDF0Gr0iNA7vP2I8rcU6IQb7gUNsiFinhjKJgesoE6TlAgeDeVCvwdjzbrHvnTXUkxbBdagU1R2ChQYOq2Jxug6toMY6CoPpwGEt6KX6E9ICapzeOCEG45+QaiiTGHyfBdxAAwdFURRFURRFURRFURRFURRFUZRDsJh3lsBg3TNr/CPfJxyP6eUC7s/iV/gf87aQV2E4+FHCwHUq9e566URiznr5C9MG3Ujbv87Q+z24D8/cfZP7r738I9eN3PO65IjxTsofw5Jzfdu3OJ6WFcF9uIU7OgW5951CrjAe0f4MXYzXz3nTB6mXEhuS5xUu4YxSwiTSziX9T5yOz4k09snPKAzKN8jTwHnS1IhO0cEZycB1Nj/8XNqzokNjXETlaOifpFwnchfptMH9Y5Tny6V4j7LxKhGLl4WHX2i8BgtoMG9tsIm0DsNa5euokJ86vVd9kTLPUp5GuMU8HnDcsawK01P7GtBzHgN5jp697HyBqenOwn18DKccjkqDwQgcqfQMdjbXhDbQ74J7vtQ2yLdSx1dJ3wRlLjEcwKdHNZJnEu9lpP2SUbfIexp5J+9yN6F3DPy+J5QHFL/5zD9MGYmVpeZRv4B2vfwIN01dw01r9yhPkZ1cDVyHsGN/gzOADwAaDOtGDTf6bkW2QbseGpEDZ4fj4EB5I/U12DfWBZZFivfYn2q74J7thQNoFKBMGcm/7BS+cy6kgS6h46O7HYb1hgPgvaTRM54C/UauXMtaOKPYRN3+P/euRVL8gXkRHWeACm5gPEh7sQdbHE47kW+wkAaH7Vds0FgXPHthBNMi31aVyasL7xEe4seC8iEV9t+vlrrXPKBZJdrxa7CnQfDOa4TgHj+XN/Ic7yvoSd8K5dnhVSLde1KI3/DSc+mJD8gPgHMsDwhqrLM/KuEj3GwbaxmpkmsTpHF66YJnhtYf8lWMDBxSw3V0iN+wXmIY5RXS8D3OsJxTGohwhukwrMddrLCWkegF8X7mEE/qMOxTUtxn9Ik3Up0py8FR2h+9NPyWVu45gGq4oIEBybXk+XX7P2ikC6QX3Hdyzc3nPvLxIW8T5V9hPCos9juSbW/kxVqUsXLN6TWZ9F/wuuD3eoMQ/wtJC2fACm6/SEMx6u1oJI72p0RlnzGPH1Cexvz6kVp8axy+KNtMepVJf02exM43cNEmtyltlN/B9UmDIeDZ4kTYxLP3mrXZoBwWG8wLcTc4IhSeicFhnKK/FEVRFGUx/wIv5m6KVoF2WAAAAABJRU5ErkJggg==",
      jjmc_distancetop: "145",
      jjmc_eleimgbottom: 0,
      data: [
        [
          {
            label: "还记得 ",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "24",

            delaySeconds: "0.8s",
            isShowLabel: true,
          },
          {
            label: "2022年1月3日",

            color: "#C67B24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "24",

            delaySeconds: "0.8s",
            isShowLabel: true,
          },
          {
            label: "吗？",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginBottom: "24",
            delaySeconds: "0.8s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "这是你第一次打开行稳致远的日子",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "8",

            delaySeconds: "2.4s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "截至今天，已经过去",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "24",
            delaySeconds: "3.2s",
            isShowLabel: true,
          },
          {
            label: "1134天",

            color: "#C67B24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "24",
            delaySeconds: "3.2s",
            isShowLabel: true,
          },
        ],

        [
          {
            label: "今年上线了很多功能：",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "8",
            delaySeconds: "4.8s",
            isShowLabel: true,
          },
          {
            label: "术者旅程、客户",

            color: "#C67B24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "8",

            delaySeconds: "4.8s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: " 管理、我想找到你、飞虎队填岗、",

            color: "#C67B24",

            fontSize: "22",

            fontWeight: "700",
            marginLeft: "24",
            marginBottom: "8",
            delaySeconds: "5.6s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: " 设备管理",

            color: "#C67B24",

            fontSize: "22",

            fontWeight: "700",
            marginLeft: "24",
            marginBottom: "8",
            delaySeconds: "6.4s",
            isShowLabel: true,
          },
          {
            label: "等",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginBottom: "8",
            delaySeconds: "6.4s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "你最爱访问的模块是 ",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "24",
            delaySeconds: "7.2s",
            isShowLabel: true,
          },
          {
            label: "策略宝",

            color: "#C67B24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "24",
            delaySeconds: "7.2s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "'不断地迭代更新，只是为了更好地加持你",
            color: "rgba(61, 40, 32, 0.68)",
            fontSize: "17",
            fontWeight: "500",
            delaySeconds: "8.8s",
            marginLeft: "24",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "的日常工作'",
            color: "rgba(61, 40, 32, 0.68)",
            fontSize: "17",
            fontWeight: "500",
            delaySeconds: "9.6s",
            marginLeft: "24",
            isShowLabel: true,
          },
        ],
      ],
    },
    {
      jjmc_order: 2,
      jjmc_base64:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E8%83%8C%E6%99%AF%E5%9B%BE2.png",
      jjmc_elementimg:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E5%85%83%E7%B4%A0%E5%9B%BE2.png",
      jjmc_musicImg:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/music1.png",
      jjmc_slidepng:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAA5CAYAAAA1DAXNAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASLSURBVHgB7Zvhcdw2EIWfZ/xflwqEVBCpAuMqiFxBmAokVyCqAl8qMF1BlArEVGCnAlEVJK5A4QsWQxAHgDweT1Zm9pvZIQksABKLBRYnCFAURVEURVEURVnMTS8PvVRQXh22l8dengPhcwXlu2PhPMcb5u9eGowNxnwD5cUxcMYIjVP3sgnydxh71ieosV4EGuEWzihzOp/pDcbG+gg11klIGaeFm+5inS9wAUSIEf1wvbqBshoVxmsM7+2ETi5wSNVVQVmMxX5QcDNDh2vRoUZN6SgFDPY7vsYQFMzR2chzae2ao6NkqDF0Gr0iNA7vP2I8rcU6IQb7gUNsiFinhjKJgesoE6TlAgeDeVCvwdjzbrHvnTXUkxbBdagU1R2ChQYOq2Jxug6toMY6CoPpwGEt6KX6E9ICapzeOCEG45+QaiiTGHyfBdxAAwdFURRFURRFURRFURRFURRFUZRDsJh3lsBg3TNr/CPfJxyP6eUC7s/iV/gf87aQV2E4+FHCwHUq9e566URiznr5C9MG3Ujbv87Q+z24D8/cfZP7r738I9eN3PO65IjxTsofw5Jzfdu3OJ6WFcF9uIU7OgW5951CrjAe0f4MXYzXz3nTB6mXEhuS5xUu4YxSwiTSziX9T5yOz4k09snPKAzKN8jTwHnS1IhO0cEZycB1Nj/8XNqzokNjXETlaOifpFwnchfptMH9Y5Tny6V4j7LxKhGLl4WHX2i8BgtoMG9tsIm0DsNa5euokJ86vVd9kTLPUp5GuMU8HnDcsawK01P7GtBzHgN5jp697HyBqenOwn18DKccjkqDwQgcqfQMdjbXhDbQ74J7vtQ2yLdSx1dJ3wRlLjEcwKdHNZJnEu9lpP2SUbfIexp5J+9yN6F3DPy+J5QHFL/5zD9MGYmVpeZRv4B2vfwIN01dw01r9yhPkZ1cDVyHsGN/gzOADwAaDOtGDTf6bkW2QbseGpEDZ4fj4EB5I/U12DfWBZZFivfYn2q74J7thQNoFKBMGcm/7BS+cy6kgS6h46O7HYb1hgPgvaTRM54C/UauXMtaOKPYRN3+P/euRVL8gXkRHWeACm5gPEh7sQdbHE47kW+wkAaH7Vds0FgXPHthBNMi31aVyasL7xEe4seC8iEV9t+vlrrXPKBZJdrxa7CnQfDOa4TgHj+XN/Ic7yvoSd8K5dnhVSLde1KI3/DSc+mJD8gPgHMsDwhqrLM/KuEj3GwbaxmpkmsTpHF66YJnhtYf8lWMDBxSw3V0iN+wXmIY5RXS8D3OsJxTGohwhukwrMddrLCWkegF8X7mEE/qMOxTUtxn9Ik3Up0py8FR2h+9NPyWVu45gGq4oIEBybXk+XX7P2ikC6QX3Hdyzc3nPvLxIW8T5V9hPCos9juSbW/kxVqUsXLN6TWZ9F/wuuD3eoMQ/wtJC2fACm6/SEMx6u1oJI72p0RlnzGPH1Cexvz6kVp8axy+KNtMepVJf02exM43cNEmtyltlN/B9UmDIeDZ4kTYxLP3mrXZoBwWG8wLcTc4IhSeicFhnKK/FEVRFGUx/wIv5m6KVoF2WAAAAABJRU5ErkJggg==",
      jjmc_distancetop: "220",
      jjmc_eleimgbottom: 0,
      data: [
        [
          {
            label: "今年，你的跟台时间共计 ",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "8",
            delaySeconds: "0.8s",
            isShowLabel: true,
          },
          {
            label: "220天",

            color: "#C67B24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "8",
            delaySeconds: "0.8s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "总台数超过全国平均 ",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "8",
            delaySeconds: "1.6s",
            isShowLabel: true,
          },
          {
            label: "78%",

            color: "#C67B24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "8",
            delaySeconds: "1.6s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "你最擅长的术式是 ",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginBottom: "30",
            marginLeft: "24",
            delaySeconds: "2.4s",
            isShowLabel: true,
          },
          {
            label: "房颤",

            color: "#C67B24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "30",
            delaySeconds: "2.4s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "'一整年你都在守护着最美律动，感谢每次",
            color: "rgba(61, 40, 32, 0.68)",
            fontSize: "17",
            fontWeight: "500",
            delaySeconds: "4s",
            marginLeft: "24",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "窦律带来的惊喜'",
            color: "rgba(61, 40, 32, 0.68)",
            fontSize: "17",
            fontWeight: "500",
            delaySeconds: "4s",
            marginLeft: "24",
            isShowLabel: true,
          },
        ],
      ],
    },
    {
      jjmc_order: 3,
      jjmc_base64:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E8%83%8C%E6%99%AF%E5%9B%BE3.png",
      jjmc_elementimg:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E5%85%83%E7%B4%A0%E5%9B%BE3.png",
      jjmc_musicImg:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/music1.png",
      jjmc_slidepng:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAA5CAYAAAA1DAXNAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASLSURBVHgB7Zvhcdw2EIWfZ/xflwqEVBCpAuMqiFxBmAokVyCqAl8qMF1BlArEVGCnAlEVJK5A4QsWQxAHgDweT1Zm9pvZIQksABKLBRYnCFAURVEURVEURVnMTS8PvVRQXh22l8dengPhcwXlu2PhPMcb5u9eGowNxnwD5cUxcMYIjVP3sgnydxh71ieosV4EGuEWzihzOp/pDcbG+gg11klIGaeFm+5inS9wAUSIEf1wvbqBshoVxmsM7+2ETi5wSNVVQVmMxX5QcDNDh2vRoUZN6SgFDPY7vsYQFMzR2chzae2ao6NkqDF0Gr0iNA7vP2I8rcU6IQb7gUNsiFinhjKJgesoE6TlAgeDeVCvwdjzbrHvnTXUkxbBdagU1R2ChQYOq2Jxug6toMY6CoPpwGEt6KX6E9ICapzeOCEG45+QaiiTGHyfBdxAAwdFURRFURRFURRFURRFURRFUZRDsJh3lsBg3TNr/CPfJxyP6eUC7s/iV/gf87aQV2E4+FHCwHUq9e566URiznr5C9MG3Ujbv87Q+z24D8/cfZP7r738I9eN3PO65IjxTsofw5Jzfdu3OJ6WFcF9uIU7OgW5951CrjAe0f4MXYzXz3nTB6mXEhuS5xUu4YxSwiTSziX9T5yOz4k09snPKAzKN8jTwHnS1IhO0cEZycB1Nj/8XNqzokNjXETlaOifpFwnchfptMH9Y5Tny6V4j7LxKhGLl4WHX2i8BgtoMG9tsIm0DsNa5euokJ86vVd9kTLPUp5GuMU8HnDcsawK01P7GtBzHgN5jp697HyBqenOwn18DKccjkqDwQgcqfQMdjbXhDbQ74J7vtQ2yLdSx1dJ3wRlLjEcwKdHNZJnEu9lpP2SUbfIexp5J+9yN6F3DPy+J5QHFL/5zD9MGYmVpeZRv4B2vfwIN01dw01r9yhPkZ1cDVyHsGN/gzOADwAaDOtGDTf6bkW2QbseGpEDZ4fj4EB5I/U12DfWBZZFivfYn2q74J7thQNoFKBMGcm/7BS+cy6kgS6h46O7HYb1hgPgvaTRM54C/UauXMtaOKPYRN3+P/euRVL8gXkRHWeACm5gPEh7sQdbHE47kW+wkAaH7Vds0FgXPHthBNMi31aVyasL7xEe4seC8iEV9t+vlrrXPKBZJdrxa7CnQfDOa4TgHj+XN/Ic7yvoSd8K5dnhVSLde1KI3/DSc+mJD8gPgHMsDwhqrLM/KuEj3GwbaxmpkmsTpHF66YJnhtYf8lWMDBxSw3V0iN+wXmIY5RXS8D3OsJxTGohwhukwrMddrLCWkegF8X7mEE/qMOxTUtxn9Ik3Up0py8FR2h+9NPyWVu45gGq4oIEBybXk+XX7P2ikC6QX3Hdyzc3nPvLxIW8T5V9hPCos9juSbW/kxVqUsXLN6TWZ9F/wuuD3eoMQ/wtJC2fACm6/SEMx6u1oJI72p0RlnzGPH1Cexvz6kVp8axy+KNtMepVJf02exM43cNEmtyltlN/B9UmDIeDZ4kTYxLP3mrXZoBwWG8wLcTc4IhSeicFhnKK/FEVRFGUx/wIv5m6KVoF2WAAAAABJRU5ErkJggg==",
      jjmc_distancetop: "198",
      jjmc_eleimgbottom: 0,
      data: [
        [
          {
            label: "6月份",

            color: "#F28C38",

            fontSize: "22",

            fontWeight: "600",

            marginLeft: "24",
            marginBottom: "8",
            delaySeconds: "0.8s",
            isShowLabel: true,
          },
          {
            label: "你的跟台数量最多",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "400",
            marginBottom: "8",
            delaySeconds: "0.8s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "其中最早传台时间是",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "400",

            marginLeft: "24",
            marginBottom: "8",
            delaySeconds: "1.6s",
            isShowLabel: true,
          },
          {
            label: "7月21日06:35 ",

            color: "#F28C38",

            fontSize: "22",

            fontWeight: "600",

            marginBottom: "8",
            delaySeconds: "1.6s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "最晚传台时间是",
            color: "#3D2820",
            fontSize: "17",
            fontWeight: "400",
            marginBottom: "30",
            marginLeft: "24",
            delaySeconds: "2.4s",
            isShowLabel: true,
          },
          {
            label: "3月10日 12:35",

            color: "#F28C38",

            fontSize: "22",

            fontWeight: "600",

            marginBottom: "30",
            delaySeconds: "2.4s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "风雨兼程 你和术者一起守护着“心”的承诺",
            color: "#7C6557",
            fontSize: "17",
            fontWeight: "500",
            delaySeconds: "4s",
            marginLeft: "24",
            isShowLabel: true,
          },
        ],
      ],
    },
    {
      jjmc_order: 4,
      jjmc_base64:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E8%83%8C%E6%99%AF%E5%9B%BE4.png",
      jjmc_elementimg:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E5%85%83%E7%B4%A0%E5%9B%BE4.png",
      jjmc_musicImg:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/music1.png",
      jjmc_slidepng:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAA5CAYAAAA1DAXNAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASLSURBVHgB7Zvhcdw2EIWfZ/xflwqEVBCpAuMqiFxBmAokVyCqAl8qMF1BlArEVGCnAlEVJK5A4QsWQxAHgDweT1Zm9pvZIQksABKLBRYnCFAURVEURVEURVnMTS8PvVRQXh22l8dengPhcwXlu2PhPMcb5u9eGowNxnwD5cUxcMYIjVP3sgnydxh71ieosV4EGuEWzihzOp/pDcbG+gg11klIGaeFm+5inS9wAUSIEf1wvbqBshoVxmsM7+2ETi5wSNVVQVmMxX5QcDNDh2vRoUZN6SgFDPY7vsYQFMzR2chzae2ao6NkqDF0Gr0iNA7vP2I8rcU6IQb7gUNsiFinhjKJgesoE6TlAgeDeVCvwdjzbrHvnTXUkxbBdagU1R2ChQYOq2Jxug6toMY6CoPpwGEt6KX6E9ICapzeOCEG45+QaiiTGHyfBdxAAwdFURRFURRFURRFURRFURRFUZRDsJh3lsBg3TNr/CPfJxyP6eUC7s/iV/gf87aQV2E4+FHCwHUq9e566URiznr5C9MG3Ujbv87Q+z24D8/cfZP7r738I9eN3PO65IjxTsofw5Jzfdu3OJ6WFcF9uIU7OgW5951CrjAe0f4MXYzXz3nTB6mXEhuS5xUu4YxSwiTSziX9T5yOz4k09snPKAzKN8jTwHnS1IhO0cEZycB1Nj/8XNqzokNjXETlaOifpFwnchfptMH9Y5Tny6V4j7LxKhGLl4WHX2i8BgtoMG9tsIm0DsNa5euokJ86vVd9kTLPUp5GuMU8HnDcsawK01P7GtBzHgN5jp697HyBqenOwn18DKccjkqDwQgcqfQMdjbXhDbQ74J7vtQ2yLdSx1dJ3wRlLjEcwKdHNZJnEu9lpP2SUbfIexp5J+9yN6F3DPy+J5QHFL/5zD9MGYmVpeZRv4B2vfwIN01dw01r9yhPkZ1cDVyHsGN/gzOADwAaDOtGDTf6bkW2QbseGpEDZ4fj4EB5I/U12DfWBZZFivfYn2q74J7thQNoFKBMGcm/7BS+cy6kgS6h46O7HYb1hgPgvaTRM54C/UauXMtaOKPYRN3+P/euRVL8gXkRHWeACm5gPEh7sQdbHE47kW+wkAaH7Vds0FgXPHthBNMi31aVyasL7xEe4seC8iEV9t+vlrrXPKBZJdrxa7CnQfDOa4TgHj+XN/Ic7yvoSd8K5dnhVSLde1KI3/DSc+mJD8gPgHMsDwhqrLM/KuEj3GwbaxmpkmsTpHF66YJnhtYf8lWMDBxSw3V0iN+wXmIY5RXS8D3OsJxTGohwhukwrMddrLCWkegF8X7mEE/qMOxTUtxn9Ik3Up0py8FR2h+9NPyWVu45gGq4oIEBybXk+XX7P2ikC6QX3Hdyzc3nPvLxIW8T5V9hPCos9juSbW/kxVqUsXLN6TWZ9F/wuuD3eoMQ/wtJC2fACm6/SEMx6u1oJI72p0RlnzGPH1Cexvz6kVp8axy+KNtMepVJf02exM43cNEmtyltlN/B9UmDIeDZ4kTYxLP3mrXZoBwWG8wLcTc4IhSeicFhnKK/FEVRFGUx/wIv5m6KVoF2WAAAAABJRU5ErkJggg==",
      jjmc_distancetop: "173",
      jjmc_eleimgbottom: 0,
      data: [
        [
          {
            label: "你今年的策略打卡次数击败了全国 ",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "8",
            delaySeconds: "0.8s",
            isShowLabel: true,
          },
          {
            label: "60%",

            color: "#C47C24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "8",
            delaySeconds: "0.8s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "击败了大区  ",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "8",
            delaySeconds: "1.6s",
            isShowLabel: true,
          },
          {
            label: "75%",

            color: "#C47C24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "8",
            delaySeconds: "1.6s",
            isShowLabel: true,
          },
        ],

        [
          {
            label: "其中你的最佳完成策略为",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginBottom: "30",
            marginLeft: "24",
            delaySeconds: "2.4s",
            isShowLabel: true,
          },
          {
            label: "术者培养",

            color: "#C47C24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "30",
            delaySeconds: "2.4s",
            isShowLabel: true,
          },
        ],

        [
          {
            label: "你的团队达成率击败了全国",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "8",
            delaySeconds: "4s",
            isShowLabel: true,
          },
          {
            label: "57%",

            color: "#C47C24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "8",
            delaySeconds: "4s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "击败了大区",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "40",
            delaySeconds: "4.8s",
            isShowLabel: true,
          },
          {
            label: "69%",

            color: "#C47C24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "40",
            delaySeconds: "4.8s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "'2024年的策略执行之星，会是你吗？",
            color: "rgba(61, 40, 32, 0.58)",
            fontSize: "17",
            fontWeight: "500",
            delaySeconds: "6.4s",
            marginLeft: "24",
            isShowLabel: true,
          },
        ],
      ],
    },
    {
      jjmc_order: 5,
      jjmc_base64:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E8%83%8C%E6%99%AF%E5%9B%BE5.png",
      jjmc_elementimg:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E5%85%83%E7%B4%A0%E5%9B%BE5.png",
      jjmc_musicImg:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/music1.png",
      jjmc_slidepng:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/slide2.png",
      jjmc_distancetop: "150",
      jjmc_eleimgbottom: 0,
      data: [
        [
          {
            label: "辅导、带教 是专业立身的传承~ ",

            color: "#501F2B",

            fontSize: "17",

            fontWeight: "500",

            marginBottom: "30",
            marginLeft: "24",
            delaySeconds: "0.8s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "你在Axonify的答题天数总计 ",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "8",
            delaySeconds: "3.2s",
            isShowLabel: true,
          },
          {
            label: "67天",

            color: "#C47C24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "8",
            delaySeconds: "3.2s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "准确率为",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "8",
            delaySeconds: "4s",
            isShowLabel: true,
          },
          {
            label: "95%",

            color: "#C47C24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "8",
            delaySeconds: "4s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "你一共发起了",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "8",
            delaySeconds: "4.8s",
            isShowLabel: true,
          },
          {
            label: "5场",

            color: "#C47C24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "8",
            delaySeconds: "4.8s",
            isShowLabel: true,
          },
          {
            label: "Coaching辅导",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginBottom: "8",
            delaySeconds: "4.8s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "接受了",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginBottom: "30",
            marginLeft: "24",
            delaySeconds: "5.6s",
            isShowLabel: true,
          },
          {
            label: "7场",

            color: "#C47C24",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "30",
            delaySeconds: "5.6s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "'有没有一次对话，让你跟老板真正交心",
            color: "rgba(61, 40, 32, 0.61)",
            fontSize: "17",
            fontWeight: "500",
            delaySeconds: "7.2s",
            marginLeft: "24",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "了呢'",
            color: "rgba(61, 40, 32, 0.61)",
            fontSize: "17",
            fontWeight: "500",
            delaySeconds: "7.2s",
            marginLeft: "24",
            isShowLabel: true,
          },
        ],
      ],
    },
    {
      jjmc_order: 6,
      jjmc_base64:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E8%83%8C%E6%99%AF%E5%9B%BE6.png",
      jjmc_elementimg:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E5%85%83%E7%B4%A0%E5%9B%BE6.png",
      jjmc_musicImg:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/music1.png",
      jjmc_slidepng:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/slide3.png",
      jjmc_distancetop: "410",
      jjmc_eleimgbottom: 330,
      data: [
        [
          {
            label: "听说你的成长旅程刷屏了~ ",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginBottom: "30",
            marginLeft: "24",
            delaySeconds: "0.8s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "你在10/15参与了",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "8",
            delaySeconds: "2.4s",
            isShowLabel: true,
          },
          {
            label: "金猪项目",

            color: "#6D3417",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "8",
            delaySeconds: "2.4s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "并于11/12获得了",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginBottom: "30",
            marginLeft: "24",
            delaySeconds: "3.2s",
            isShowLabel: true,
          },
          {
            label: "金猪小分队队长",

            color: "#6D3417",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "30",
            delaySeconds: "3.2s",
            isShowLabel: true,
          },
          {
            label: "勋章",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginBottom: "30",
            delaySeconds: "3.2s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "你在",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginLeft: "24",
            marginBottom: "8",
            delaySeconds: "4.8s",
            isShowLabel: true,
          },
          {
            label: "1月25日",

            color: "#6D3417",

            fontSize: "22",

            fontWeight: "700",
            marginBottom: "8",
            delaySeconds: "4.8s",
            isShowLabel: true,
          },
          {
            label: "转岗到CSS BW Sales: PSR,",

            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginBottom: "8",
            delaySeconds: "4.8s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "12月3日",
            color: "#6D3417",

            fontSize: "22",

            fontWeight: "700",
            marginLeft: "24",
            marginBottom: "36",
            delaySeconds: "5.6s",
            isShowLabel: true,
          },
          {
            label: "晋升为CSS BW Sales: TDSM",
            color: "#3D2820",

            fontSize: "17",

            fontWeight: "500",

            marginBottom: "36",
            delaySeconds: "5.6s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "'明明可以靠颜值，你确偏要靠实力'",
            color: "rgba(61, 40, 32, 0.50)",
            fontSize: "17",
            fontWeight: "500",
            delaySeconds: "7.4s",
            marginLeft: "24",
            isShowLabel: true,
          },
        ],
      ],
    },
    {
      jjmc_order: 7,
      jjmc_base64:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/%E8%83%8C%E6%99%AF%E5%9B%BE7.png",
      jjmc_musicImg:
        "https://charm123.oss-cn-beijing.aliyuncs.com/OSS/www/music-disable.png",
      jjmc_buttonText: "回看报告",
      jjmc_buttonImg:
        "data:image/png;base64,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",
      jjmc_distancetop: "347",
      jjmc_eleimgbottom: 330,
      data: [
        [
          {
            label: "2024",
            color: "#F28C38",
            fontSize: "22",
            fontWeight: "700",
            marginBottom: "20",
            marginLeft: "110",
            delaySeconds: "0.8s",
            isShowLabel: true,
          },
          {
            label: "黑马还得是你！",
            color: "#6D3417",
            fontSize: "22",
            fontWeight: "700",
            marginBottom: "20",
            delaySeconds: "0.8s",
            isShowLabel: true,
          },
        ],
        [
          {
            label: "无论多远，",
            color: "#6D3417",
            fontSize: "22",
            fontWeight: "700",
            marginLeft: "70",
            delaySeconds: "1.6s",
            isShowLabel: true,
          },
          {
            label: "行稳致远一直陪伴你",
            color: "#F28C38",
            fontSize: "22",
            fontWeight: "700",
            delaySeconds: "1.6s",
            isShowLabel: true,
          },
        ],
      ],
    },
  ]