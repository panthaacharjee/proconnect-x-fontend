import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RoleRoute = ({ children, role }) => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const history = useNavigate();

  if (isAuthenticated) {
    return (
      <Fragment>
        {user.role == role ? children : history("/lord-shiva")}
      </Fragment>
    );
  }
};
export default RoleRoute;
