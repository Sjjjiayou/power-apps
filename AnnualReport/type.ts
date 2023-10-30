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
  musicRotateIconTopPosition: string;
  musicRotateIconRightPosition: string;
}
