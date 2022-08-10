import { css } from "@emotion/react";
import { nanoid } from "@reduxjs/toolkit";
import { Tabs } from "antd";
import { Topbar } from "../components";
import { AutoCompletePreview, FormPreview, InputNumberPreview, SelectPreview, TablePreview, TreeSelectPreview } from "../features/components";

const tabs = [
  { key: nanoid(), tab: "Table", children: <TablePreview /> },
  { key: nanoid(), tab: "Form", children: <FormPreview /> },
  { key: nanoid(), tab: "Select", children: <SelectPreview /> },
  { key: nanoid(), tab: "Tree Select", children: <TreeSelectPreview /> },
  { key: nanoid(), tab: "Auto Complete", children: <AutoCompletePreview /> },
  { key: nanoid(), tab: "InputNumber", children: <InputNumberPreview /> },
];

export const Components = () => {
  return (
    <div>
      <Topbar title="All components" />

      <Tabs css={styleTabs}>
        {tabs.map((item) => (
          <Tabs.TabPane key={item.key} tab={item.tab} children={item.children} />
        ))}
      </Tabs>
    </div>
  );
};

const styleTabs = css({ padding: 25, marginInline: 25, backgroundColor: "white" });
