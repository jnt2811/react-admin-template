import { Table as AntTable } from "antd";

export const Table = ({ dataSource = defaultDataSource, columns = defaultColumns, loading = false, scroll = {}, pagination = {}, ...props }) => {
  return (
    <AntTable
      dataSource={dataSource}
      loading={loading}
      columns={columns}
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        showQuickJumper: true,
        ...pagination,
      }}
      scroll={{ scrollToFirstRowOnChange: true, y: 400, ...scroll }}
      {...props}
    />
  );
};

const defaultDataSource = Array(20)
  .fill(null)
  .map((_, key) => ({ key, name: `Name ${key}` }));

const defaultColumns = [
  { title: "ID", dataIndex: "key", width: 150 },
  { title: "Name", dataIndex: "name" },
];
