import React, { useState } from "react";
import { useLoaderData } from "react-router";
import SingleGroup from "../Components/SingleGroup";

const AllGroup = () => {
  const initialGroups = useLoaderData();
  const [groups, setGroups] = useState(initialGroups);
//   console.log(groups);
  return (
    <div className="py-12 mt-8 bg-[#f3f4f6] p-8 rounded-2xl space-y-3">
      <h1 className="font-bold text-2xl text-center">
        Total available of groups:{groups.length}{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-6">
        {
           groups.map((group,index)=> <SingleGroup group={group} key={index}></SingleGroup>)
        }
      </div>
    </div>
  );
};

export default AllGroup;
