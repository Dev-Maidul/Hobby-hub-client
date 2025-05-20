import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
//   console.log(group);
  useEffect(() => {
    fetch(`http://localhost:3000/groups/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setGroup(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching group data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!group) {
    return <div>Group not found!</div>;
  }

  return (
    <div>
      {/* ================================ */}
      <div className="w-full shadow-md dark:bg-gray-50 dark:text-gray-800 p-8 py-12 mt-8 mb-8">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-800"
            >
              Location: {group?.location}
            </a>
          </div>
          <button className="btn btn-primary">Join Group</button>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={group?.imageURL}
              alt=""
              className="block object-cover object-center w-full rounded-md dark:bg-gray-500 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
            />
            <div className="flex items-center text-xs">
              <span>Start Date:{group?.startDate}</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-600">
                {group?.groupName}
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-600">
              {group?.description}
            </p>
            <p className="leading-snug dark:text-violet-600">
             Members: {group?.maxMembers}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
