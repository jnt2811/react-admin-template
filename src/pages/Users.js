import { UserList } from "../features/user/UserList";
import { Topbar } from "../components";

export const Users = () => {
  return (
    <div>
      <Topbar title="All users" />

      <UserList />
    </div>
  );
};
