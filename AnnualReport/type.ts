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
  medalJsonConfig: string;
  appWidthRate: number;
  appHeightRate: number;
  buttonFirstWidth: string;
  buttonFirstHeight: string;
  buttonEndWidth: string;
  buttonEndHeight: string;
  buttonFirstImgBottom: string;
  buttonFirstImgLeft: string;
  buttonEndImgBottom: string;
  buttonEndImgLeft: string;
  handleChangeMusic: (isPalyMusic: boolean) => void;
}
