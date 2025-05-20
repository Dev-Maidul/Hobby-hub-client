import React from "react";
import { Link } from "react-router";

const SingleGroup = ({ group }) => {
//   console.log(group?._id);
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-white dark:text-gray-800  mb-4  p-4">
        <img
          src={group.imageURL}
          alt="Group-cover"
          className="object-cover object-center w-full rounded-t-md h-72 bg-white"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-wide">
              {group.groupName}
            </h2>
          </div>
         <Link to={`/groups/${group?._id}`}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 cursor-pointer"
          >
            See more
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleGroup;
