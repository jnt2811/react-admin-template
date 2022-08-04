import { PlusOutlined } from "@ant-design/icons";
import { ClassNames, css } from "@emotion/react";
import { Button, TreeSelect as AntTreeSelect } from "antd";
import _ from "lodash";

const { SHOW_ALL, SHOW_PARENT, SHOW_CHILD } = AntTreeSelect;

export const TreeSelect = ({
  dataSource = [],
  placeholder = "Select",
  checkedStrategy = SHOW_CHILD,
  treeCheckable = true,
  treeDefaultExpandAll = true,
  showSearch = true,
  allowClear = true,
  isParentUncheckable = true,
  onClear,
  addItemProps = {
    visible: false,
    onAddItem: () => {},
    textAddItem: "Add Item",
  },
  onSelect = () => {},
  onDeselect = () => {},
  ...props
}) => {
  const visibleAddItem = _.isObject(addItemProps) && addItemProps.visible;

  const handleSelect = (value, node, isDeselect = false) => {
    if (isDeselect) onDeselect(value, node?.fullValue);
    else onSelect(value, node.fullValue);
  };

  const getDataSource = () => {
    if (!isParentUncheckable) return dataSource;

    const formatItemHasChildren = (item) => {
      let item_has_children = { ...item, selectable: false, checkable: false };

      const children = item_has_children.children;

      item_has_children.children = children.map((child) => {
        if (!child.children) return child;
        return formatItemHasChildren(child);
      });

      return item_has_children;
    };

    return dataSource.map((item) => {
      if (!item.children) return item;
      return formatItemHasChildren(item);
    });
  };

  const dropdownRender = (originNode) => {
    return (
      <>
        {originNode}

        {visibleAddItem && (
          <div css={styleAddItem}>
            <Button type="link" icon={<PlusOutlined />} onClick={addItemProps?.onAddItem}>
              {addItemProps.textAddItem || "Add Item"}
            </Button>
          </div>
        )}
      </>
    );
  };

  return (
    <ClassNames>
      {({ css, cx }) => (
        <AntTreeSelect
          treeData={getDataSource()}
          treeCheckable={treeCheckable}
          treeDefaultExpandAll={treeDefaultExpandAll}
          placeholder={placeholder}
          showSearch={showSearch}
          allowClear={allowClear}
          dropdownRender={dropdownRender}
          onSelect={(value, node) => handleSelect(value, node)}
          onDeselect={(value, node) => handleSelect(value, node, true)}
          onClear={onClear}
          dropdownClassName={cx(
            isParentUncheckable &&
              css({
                ".ant-select-tree-indent": {
                  display: "none",
                },
              })
          )}
          {...props}
        />
      )}
    </ClassNames>
  );
};

const styleAddItem = css({
  borderTop: "1px solid #fafafa",
  paddingTop: 7,
});

TreeSelect.checkedStrategy = { SHOW_ALL, SHOW_PARENT, SHOW_CHILD };
