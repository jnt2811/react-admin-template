import { Layout } from "antd";
import { Redirect, Route } from "react-router-dom";
import { paths } from "../data";
import { Header, Sider } from "../layouts";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = true;

  const render = (props) => {
    if (!isAuthenticated) {
      return <Redirect to={paths.login} />;
    }

    return (
      <Layout>
        <Sider />

        <Layout>
          <Header />

          <Layout.Content>
            <Component {...props} />
          </Layout.Content>
        </Layout>
      </Layout>
    );
  };

  return <Route {...rest} render={render} />;
};
