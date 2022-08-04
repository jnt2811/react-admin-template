import { css } from "@emotion/react";
import { Avatar } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../../components";
import { fetchUsers } from "./userSlice";

export const UserList = () => {
  const userReducer = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <Table columns={columns} dataSource={userReducer.users} loading={userReducer.loading} rowKey="id" css={styleTable} />;
};

const columns = [
  { dataIndex: "avatar", width: 60, render: (data) => <Avatar src={data} size={40} /> },
  { title: "Name", dataIndex: "name" },
  { title: "Gender", dataIndex: "gender" },
  { title: "Phone", dataIndex: "phone" },
  { title: "Email", dataIndex: "name" },
  { title: "Address", dataIndex: "address" },
  { title: "Username", dataIndex: "username" },
  { title: "Password", dataIndex: "password" },
];

const styleTable = css({ padding: "0px 25px" });
