import { AntDesignOutlined, DashboardOutlined, UserOutlined } from "@ant-design/icons";
import { Menu as AntMenu } from "antd";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { paths } from "../../../data";

const items = [
  { label: "Dashboard", icon: <DashboardOutlined />, key: paths.dashboard },
  { label: "Users", icon: <UserOutlined />, key: paths.users },
  { label: "Components", icon: <AntDesignOutlined />, key: paths.components },
];

export const Menu = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const match = useRouteMatch(pathname);

  const selectedKeys = match ? [pathname] : [];

  const handleChange = ({ key }) => {
    history.push(key);
  };

  return <AntMenu items={items} theme="dark" onClick={handleChange} selectedKeys={selectedKeys} />;
};
