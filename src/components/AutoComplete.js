import { ClassNames, css } from "@emotion/react";
import { nanoid } from "@reduxjs/toolkit";
import { AutoComplete as AntAutoComplete, Col, Empty, Row, Typography } from "antd";
import classNames from "classnames";
import _ from "lodash";

export const AutoComplete = ({
  dataSource = [],
  labelKey = "",
  valueKey = "",
  placeholder = "Input here",
  onSearch = () => {},
  onSelect = () => {},
  allowClear = true,
  onClear = () => {},
  tableProps = {
    visible: false,
    columns: [],
    width: 300,
  },
  onDropdownVisibleChange = () => {},
  ...props
}) => {
  const isDropdownTable = _.isObject(tableProps) && tableProps.visible;

  const getLabel = (data) => {
    if (!_.isObject(data)) return data;
    if (!labelKey) return JSON.stringify(data);
    return data[labelKey];
  };

  const getValue = (data) => {
    if (!_.isObject(data)) return data;
    return !!valueKey ? data[valueKey] : JSON.stringify(data);
  };

  const getDataSource = () => {
    if (!isDropdownTable) {
      return dataSource.map((item) => ({
        label: getLabel(item),
        value: getValue(item),
        fullValue: item,
      }));
    }

    let array = [
      {
        label: renderTableHead(),
        options: dataSource.map(renderTableRow),
      },
    ];

    if (dataSource.length === 0) {
      array.push({
        label: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />,
        options: [],
      });
    }

    return array;
  };

  const renderTableHead = () => {
    return (
      <Row align="middle" css={styleTableHead} wrap={false}>
        {tableProps.columns.map((col, index) => (
          <Col
            key={index}
            style={{ width: col?.width, minWidth: col?.width, maxWidth: col?.width }}
            className={classNames("col", index === 0 && "first-col")}
          >
            {col?.title}
          </Col>
        ))}
      </Row>
    );
  };

  const renderTableRow = (data) => {
    return {
      label: (
        <Row align="middle" wrap={false} gutter={5}>
          {tableProps.columns.map((col) => (
            <Col key={nanoid()} style={{ width: col?.width, minWidth: col?.width, maxWidth: col?.width }}>
              <Typography.Text ellipsis={{ tooltip: data[col?.dataIndex] }}>{data[col?.dataIndex]}</Typography.Text>
            </Col>
          ))}
        </Row>
      ),
      value: !!valueKey ? data[valueKey] : JSON.stringify(data),
      fullValue: data,
    };
  };

  const handleSelect = (value, option) => {
    onSelect(value, option.fullValue);
  };

  const getTableWidth = () => {
    if (!!tableProps.width) return tableProps.width;
    return tableProps.columns.reduce((sum, col) => (sum += col.width), 0);
  };

  return (
    <ClassNames>
      {({ css, cx }) => (
        <AntAutoComplete
          options={getDataSource()}
          onSelect={handleSelect}
          onSearch={onSearch}
          placeholder={placeholder}
          css={styleAutoComplete}
          allowClear={allowClear}
          onClear={onClear}
          dropdownMatchSelectWidth={isDropdownTable ? getTableWidth() : undefined}
          dropdownClassName={cx(
            isDropdownTable &&
              css({
                ".ant-select-item.ant-select-item-group": {
                  padding: 0,
                },
              })
          )}
          onDropdownVisibleChange={onDropdownVisibleChange}
          {...props}
        />
      )}
    </ClassNames>
  );
};

const styleAutoComplete = css({ width: "100%" });

const styleTableHead = css({
  paddingBlock: "8px",
  backgroundColor: "#fafafa",
  borderBottom: "1px solid #00000006",

  ".first-col": {
    paddingLeft: 25,
    marginRight: 25,
  },
});
