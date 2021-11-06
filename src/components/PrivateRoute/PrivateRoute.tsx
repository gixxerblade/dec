import React from "react";
import { navigate } from "gatsby";
import { useIdentityContext } from "react-netlify-identity";

const PrivateRoute = ({ component: Component, location, ...props }) => {
  const isLoggedIn = useIdentityContext()?.isLoggedIn;

  // If not logged in navigate user to login page.
  if (!isLoggedIn && location.pathname !== "/dashboard/login") {
    navigate("/dashboard/login", { replace: true });
    return null;
  }
  // If logged then display the private components (Profile, TrailStatus, rest...)
  return <Component {...props} />;
};
export default PrivateRoute