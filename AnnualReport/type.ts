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
}
