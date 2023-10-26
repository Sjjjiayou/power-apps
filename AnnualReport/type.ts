export interface PageProps {
  width?: number;
  height?: number;
  columns: ComponentFramework.PropertyHelper.DataSetApi.Column[];
  records: Record<
    string,
    ComponentFramework.PropertyHelper.DataSetApi.EntityRecord
  >;
  dateConfigSet: any;
  data: Record<
    string,
    ComponentFramework.PropertyHelper.DataSetApi.EntityRecord
  >;
  style1TopPosition: string;
  style1LeftPosition: string;
  style2TopPosition: string;
  style2LeftPosition: string;
}
