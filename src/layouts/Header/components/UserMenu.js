import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";
import { nanoid } from "@reduxjs/toolkit";
import { Avatar, Dropdown, Menu } from "antd";
import { useHistory } from "react-router-dom";
import { paths } from "../../../data";

export const UserMenu = () => {
  const history = useHistory();

  const navigateToSettings = () => {
    history.push(paths.settings);
  };

  const handleLogout = () => {
    history.push(paths.login);
  };

  const items = [
    {
      label: "Settings",
      icon: <SettingOutlined />,
      key: nanoid(),
      onClick: navigateToSettings,
    },
    {
      label: "Logout",
      icon: <LogoutOutlined />,
      key: nanoid(),
      onClick: handleLogout,
    },
  ];

  const menu = <Menu items={items} css={styleMenu} />;

  return (
    <Dropdown trigger="click" overlay={menu} placement="bottomRight">
      <Avatar size={30} css={styleAvatar} children="A" />
    </Dropdown>
  );
};

const styleAvatar = css({ cursor: "pointer" });
const styleMenu = css({ width: 150 });
