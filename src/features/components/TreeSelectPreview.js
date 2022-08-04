import { css } from "@emotion/react";
import { Col, Row } from "antd";
import { useState } from "react";
import { TreeSelect } from "../../components";

export const TreeSelectPreview = () => {
  const [checkableButParentValue, setCheckableButParentValue] = useState([defaultDataSource[0].children[0].fullValue]);

  return (
    <Row gutter={25}>
      <Col flex="33%">
        <div>
          <h3>Tree Select (Checkable but parent)</h3>
          <TreeSelect
            dataSource={defaultDataSource}
            css={styleTreeSelect}
            onSelect={(value, fullValue) => setCheckableButParentValue((arr) => [...arr, fullValue])}
            onDeselect={(value, fullValue) => setCheckableButParentValue((arr) => arr.filter((item) => item?.value !== fullValue.value))}
            onClear={() => setCheckableButParentValue([])}
            addItemProps={{ visible: true }}
            defaultValue={[defaultDataSource[0].children[0].value]}
          />
          <br />
          <br />
          <div>
            Result: <pre>{JSON.stringify(checkableButParentValue, null, 2)}</pre>
          </div>
        </div>
      </Col>
    </Row>
  );
};

const styleTreeSelect = css({ width: "100%" });

const defaultDataSource = [
  {
    title: "Node 1",
    value: "0-0",
    key: "0-0",
    fullValue: { label: "Node 1", value: "0-0" },
    children: [
      {
        title: "Child Node 1.1",
        value: "0-0-0",
        key: "0-0-0",
        fullValue: { label: "Child Node 1.1", value: "0-0-0" },
      },
      {
        title: "Child Node 1.2",
        value: "0-0-1",
        key: "0-0-1",
        fullValue: { label: "Child Node 1.2", value: "0-0-1" },
      },
    ],
  },
];
