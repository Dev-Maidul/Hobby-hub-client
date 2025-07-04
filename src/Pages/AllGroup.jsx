import React, { useState, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import SingleGroup from "../Components/SingleGroup";

const AllGroup = () => {
  const initialGroups = useLoaderData();
  const [groups] = useState(initialGroups);

  // State for filter and sort
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Filter and sort logic
  const filteredGroups = useMemo(() => {
    let filtered = groups;
    if (search) {
      filtered = filtered.filter(
        (group) =>
          group.groupName.toLowerCase().includes(search.toLowerCase()) ||
          (group.category && group.category.toLowerCase().includes(search.toLowerCase()))
      );
    }
    filtered = filtered.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.groupName.localeCompare(b.groupName);
      } else {
        return b.groupName.localeCompare(a.groupName);
      }
    });
    return filtered;
  }, [groups, search, sortOrder]);

  return (
    <div className="py-12 mt-8 bg-[#f3f4f6] p-8 rounded-2xl space-y-3 min-h-screen ">
      <h1 className="font-bold text-2xl text-center text-[#4F2FFB]">
        Total available groups: {filteredGroups.length}
      </h1>
      {/* Filter and Sort Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by group name or category"
          className="input input-bordered w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="select select-bordered w-full md:w-1/6"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort: A-Z</option>
          <option value="desc">Sort: Z-A</option>
        </select>
      </div>
      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group, index) => (
            <SingleGroup group={group} key={group._id || index} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No groups found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AllGroup;