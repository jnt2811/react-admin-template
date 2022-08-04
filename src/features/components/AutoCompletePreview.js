import { nanoid } from "@reduxjs/toolkit";
import { Col, Row } from "antd";
import { useState } from "react";
import { AutoComplete } from "../../components";

export const AutoCompletePreview = () => {
  const [basicValue, setBasicValue] = useState();
  const [objectValue, setObjectValue] = useState();
  const [tableValue, setTableValue] = useState();
  const [dataSourceBasic, setDataSourceBasic] = useState(defaultDataSourceBasic);
  const [dataSourceObject, setDataSourceObject] = useState(defaultDataSourceObject);
  const [dataSourceTable, setDataSourceTable] = useState(defaultDataSourceObject);

  return (
    <Row gutter={25} wrap={false}>
      <Col flex="33%">
        <h3>Basic Auto Complete</h3>
        <AutoComplete
          dataSource={dataSourceBasic}
          onSelect={setBasicValue}
          onClear={() => {
            setBasicValue();
          }}
          onSearch={(searchValue) =>
            searchValue
              ? setDataSourceBasic(defaultDataSourceBasic.filter((item) => item.toLowerCase().includes(searchValue.toLowerCase())))
              : setDataSourceBasic(defaultDataSourceBasic)
          }
          onDropdownVisibleChange={(visible) =>
            !visible && dataSourceBasic.length < defaultDataSourceBasic.length && setDataSourceBasic(defaultDataSourceBasic)
          }
        />
        <br />
        <br />
        <div>
          Result: <pre>{JSON.stringify(basicValue, null, 2)}</pre>
        </div>
      </Col>

      <Col flex="33%">
        <h3>Auto Complete (Object)</h3>
        <AutoComplete
          dataSource={dataSourceObject}
          onSelect={(value, fullValue) => {
            setObjectValue(fullValue);
            setDataSourceObject(defaultDataSourceObject);
          }}
          labelKey="name"
          valueKey="name"
          onClear={() => {
            setObjectValue();
          }}
          onSearch={(searchValue) =>
            searchValue
              ? setDataSourceObject(defaultDataSourceObject.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())))
              : setDataSourceObject(defaultDataSourceObject)
          }
          onDropdownVisibleChange={(visible) =>
            !visible && dataSourceObject.length < defaultDataSourceObject.length && setDataSourceObject(defaultDataSourceObject)
          }
        />
        <br />
        <br />
        <div>
          Result: <pre>{JSON.stringify(objectValue, null, 2)}</pre>
        </div>
      </Col>

      <Col flex="33%">
        <h3>Auto Complete (Dropdown Table)</h3>
        <AutoComplete
          dataSource={dataSourceTable}
          onSelect={(value, fullValue) => setTableValue(fullValue)}
          labelKey="name"
          valueKey="name"
          tableProps={{ visible: true, columns: tableColumns }}
          onClear={() => {
            setTableValue();
          }}
          onSearch={(searchValue) =>
            searchValue
              ? setDataSourceTable(defaultDataSourceObject.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())))
              : setDataSourceTable(defaultDataSourceObject)
          }
          onDropdownVisibleChange={(visible) =>
            !visible && dataSourceTable.length < defaultDataSourceObject.length && setDataSourceTable(defaultDataSourceObject)
          }
        />
        <br />
        <br />
        <div>
          Result: <pre>{JSON.stringify(tableValue, null, 2)}</pre>
        </div>
      </Col>
    </Row>
  );
};

const defaultDataSourceBasic = Array(10)
  .fill(null)
  .map((_, index) => `Option No.${index + 1}`);

const defaultDataSourceObject = Array(10)
  .fill(null)
  .map((_, index) => ({
    key: nanoid(),
    name: `Option No.${index + 1}`,
  }));

const tableColumns = [
  { title: "Id", dataIndex: "key", width: 100 },
  { title: "Name", dataIndex: "name", width: 200 },
];
