export interface PageProps {
  width?: number;
  height?: number;
  columns: ComponentFramework.PropertyHelper.DataSetApi.Column[];
  records: Record<
    string,
    ComponentFramework.PropertyHelper.DataSetApi.EntityRecord
  >;
  auditLog: Record<
    string,
    ComponentFramework.PropertyHelper.DataSetApi.EntityRecord
  >;
}
