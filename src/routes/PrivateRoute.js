import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("USER_JWT") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/entrar" />
        )
      }
    />
  );
};

export default PrivateRoute;
