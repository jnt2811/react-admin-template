import { css } from "@emotion/react";
import { Col, Row } from "antd";
import { useState } from "react";
import { Select } from "../../components";

export const SelectPreview = () => {
  const [selectedOptionItem, setSelectedOptionItem] = useState(dataSelectItems[0]);
  const [selectedOptionObject, setSelectedOptionObject] = useState(dataSelectObjects[0].name);
  const [selectedOptionTable, setSelectedOptionTable] = useState(dataSelectObjects[0].name);

  return (
    <Row gutter={[25, 25]}>
      <Col flex="33%">
        <h3>Select items</h3>
        <Select
          css={styleSelect}
          dataSource={dataSelectItems}
          showSearch
          defaultValue={selectedOptionItem}
          onSelect={setSelectedOptionItem}
          addItemProps={{
            visible: true,
          }}
          onClear={() => setSelectedOptionItem()}
        />

        <div style={{ marginTop: 20 }}>
          Selected Option Item: <pre>{JSON.stringify(selectedOptionItem)}</pre>
        </div>
      </Col>

      <Col flex="33%">
        <h3>Select objects</h3>
        <Select
          css={styleSelect}
          dataSource={dataSelectObjects}
          showSearch
          labelKey="name"
          valueKey="name"
          defaultValue={selectedOptionObject}
          onSelect={setSelectedOptionObject}
          addItemProps={{
            visible: true,
          }}
          onClear={() => setSelectedOptionObject()}
        />

        <div style={{ marginTop: 20 }}>
          Selected Option Object: <pre>{JSON.stringify(selectedOptionObject)}</pre>
        </div>
      </Col>

      <Col flex="33%">
        <h3>Select objects (Dropdown Table)</h3>
        <Select
          css={styleSelect}
          dataSource={dataSelectObjects}
          showSearch
          labelKey="name"
          valueKey="name"
          defaultValue={selectedOptionTable}
          onSelect={setSelectedOptionTable}
          tableProps={{
            visible: true,
            columns: tableColumns,
          }}
          addItemProps={{
            visible: true,
          }}
          onClear={() => setSelectedOptionTable()}
        />

        <div style={{ marginTop: 20 }}>
          Selected Option Object: <pre>{JSON.stringify(selectedOptionTable)}</pre>
        </div>
      </Col>
    </Row>
  );
};

const styleSelect = css({ width: "100%" });

const dataSelectItems = ["One", "Two", "Three"];
const dataSelectObjects = Array(10)
  .fill(null)
  .map((_, key) => ({ key, name: `Option No.${key}` }));

const tableColumns = [
  { title: "Id", dataIndex: "key", width: 100 },
  { title: "Name", dataIndex: "name", width: 200 },
];
