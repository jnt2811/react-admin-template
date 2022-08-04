import { Redirect, Switch } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { paths } from "../data";
import { Components, Dashboard, Login, Settings, Users } from "../pages";

export const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact restricted path={paths.login} component={Login} />

      <PrivateRoute exact path={paths.dashboard} component={Dashboard} />
      <PrivateRoute exact path={paths.users} component={Users} />
      <PrivateRoute exact path={paths.settings} component={Settings} />
      <PrivateRoute exact path={paths.components} component={Components} />

      <Redirect exact from={paths.main} to={paths.dashboard} />
    </Switch>
  );
};
