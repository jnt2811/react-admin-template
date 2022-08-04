import { Route } from "react-router-dom";
import { NoAccess } from "../pages";

export const PublicRoute = ({ component: Component, restricted = false, ...rest }) => {
  const allowAccess = true;

  const render = (props) => {
    if (restricted && !allowAccess) {
      return <NoAccess />;
    }

    return <Component {...props} />;
  };

  return <Route {...rest} render={render} />;
};
