import React, { useEffect } from "react";
import "./Admin.css";
import { Grid } from "@mui/material";
import { AiFillCalendar, AiFillProject } from "react-icons/ai";
import {
  BsFillPostcardHeartFill,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAdminUser } from "../../redux/actions/userActions";
import AdminUser from "./AdminUser";
import Loader from "../Loader/Loader";

const Admin = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.adminUser);
  useEffect(() => {
    dispatch(getAdminUser());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="admin">
          <div className="admin-user">
            <div>
              <p>
                <FaUserAlt />
              </p>
              <span>All Users</span>
            </div>
            <div className="admin-user-container extra-css">
              <div>Image</div>
              <div>Name</div>
              <div>Role</div>
              <div>Action</div>
            </div>
            <div className="admin-user-box">
              {users.map((val, ind) => {
                return <AdminUser key={ind} val={val} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
