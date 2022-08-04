import { css } from "@emotion/react";
import { Layout } from "antd";
import { Menu } from "./components/Menu";

export const Sider = () => {
  return (
    <Layout.Sider css={style}>
      <div className="logo">LOGO</div>

      <Menu />
    </Layout.Sider>
  );
};

const style = css({
  height: "100vh",
  position: "sticky",
  top: 0,
  color: "#fff",

  ".logo": {
    paddingInline: 15,
    height: 64,
    display: "flex",
    alignItems: "center",
    fontSize: 25,
  },
});
