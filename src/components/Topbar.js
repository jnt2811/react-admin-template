import { PageHeader } from "antd";
import React from "react";

export const Topbar = ({ title = "Topbar title" }) => {
  return <PageHeader title={title} />;
};
