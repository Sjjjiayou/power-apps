export interface PageProps {
  width?: number;
  height?: number;
  columns: ComponentFramework.PropertyHelper.DataSetApi.Column[];
  records: Record<
    string,
    ComponentFramework.PropertyHelper.DataSetApi.EntityRecord
  >;
  dataJsonConfig: string;
  pageJsonConfig: string;
  appWidthRate: number;
  appHeightRate: number;
  buttonFirstWidth: string;
  buttonFirstHeight: string;
  buttonEndWidth: string;
  buttonEndHeight: string;
  buttonFirstImgBottom: string;
  buttonFirstImgLeft: string;
  buttonFirstTextBottom: string;
  buttonFirstTextLeft: string;
  buttonEndImgBottom: string;
  buttonEndImgLeft: string;
  buttonEndTextBottom: string;
  buttonEndTextLeft: string;
  buttonEndTextSize: string;
  handleIsFirstLastPage: (value: number) => void;
}
