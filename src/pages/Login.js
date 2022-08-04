import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { paths } from "../data";

export const Login = () => {
  const history = useHistory();

  return (
    <div>
      <Button
        onClick={() => {
          setTimeout(() => {
            history.push(paths.dashboard);
          }, 1000);
        }}
      >
        Login
      </Button>
    </div>
  );
};
