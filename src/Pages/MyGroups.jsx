import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import Spinner from "../Components/Spinner";
import { CiEdit } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://hobby-hub-server-tau.vercel.app/groups/by-email/${encodeURIComponent(user.email)}`
      )
        .then((res) => res.json())
        .then((data) => {
          setGroups(data);
          setLoading(false);
        })
        .catch((err) => console.error("Error:", err));
    }
  }, [user]);

  if (loading) {
    return <Spinner />;
  }

  if (groups.length === 0) {
    return <div>No groups found!</div>;
  }

  // Handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform delete action
        fetch(`https://hobby-hub-server-tau.vercel.app/groups/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Group has been deleted.",
                icon: "success",
              });

              // Remove the deleted group from the state
              setGroups(groups.filter((group) => group._id !== id));
            }
          })
          .catch((err) => {
            console.error("Error deleting group:", err);
            Swal.fire({
              title: "Error!",
              text: "There was an issue deleting the group.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="p-8 py-12">
      <h1 className="font-bold text-3xl text-center">
        Your Groups ({groups.length})
      </h1>
      <div className="overflow-x-auto p-8">
        <table className="table">
          {/* Table Header */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Group Name</th>
              <th>Location</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
         
          <tbody>
            {groups.map((gro, index) => (
              <tr key={gro._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{gro.groupName}</div>
                      <div className="text-sm opacity-50">
                        Members: {gro.maxMembers}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Location: {gro.location}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Start Date: {gro.startDate}
                  </span>
                </td>
                <td>{gro.hobbyCategory}</td>
                <th>
                  <div className="join join-vertical space-y-2">
                    <Link to={`/update-group/${gro._id}`}>
                    <button className="btn join-item">
                      <CiEdit size={30} color="green" />
                    </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(gro._id)}
                      className="btn join-item"
                    >
                      <TiDeleteOutline size={30} color="red" />
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        
        </table>
      </div>
    </div>
  );
};

export default MyGroups;
