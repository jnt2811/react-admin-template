import { css } from "@emotion/react";
import { Layout } from "antd";
import { UserMenu } from "./components/UserMenu";

export const Header = () => {
  return (
    <Layout.Header css={style}>
      <UserMenu />
    </Layout.Header>
  );
};

const style = css({
  position: "sticky",
  top: 0,
  backgroundColor: "#fff",
  paddingInline: 25,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  zIndex: 99,
});
