import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { deleteAdminUser } from "../../redux/actions/userActions";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const AdminUser = ({ val }) => {
  const { loading } = useSelector((state) => state.adminUser);
  const handleDelete = () => {
    const data = {
      userId: val._id,
    };
    //     console.log(data);
    deleteAdminUser(data);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="admin-user-container admin-css">
          <div>
            <img src={val.avatar.url} />
          </div>
          <div>
            <p>{val.name}</p>
          </div>
          <div>{val.role}</div>
          <div>
            {val.role !== "admin" ? (
              <button onClick={handleDelete}>
                <AiFillDelete />
              </button>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminUser;
