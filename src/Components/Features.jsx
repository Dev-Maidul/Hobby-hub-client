import React, { useEffect, useState } from "react";
import SingleGroup from "./SingleGroup";
import { Fade } from "react-awesome-reveal";

const Features = ({ groups, setGroups }) => {
  console.log(groups);
  const [displayGroups, setDisplayGroups] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayGroups(groups);
    } else {
      setDisplayGroups(groups.slice(0, 6));
    }
  }, [groups, showAll]);
  return (
    <Fade>
        <div className="py-8 bg-[#f3f4f6] p-12 rounded-2xl">
        <h1 className="p-4 text-4xl font-semibold leading-none text-center">
          Featured Groups !
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-6">
        {displayGroups.map((group) => (
          <SingleGroup group={group} key={group?._id}></SingleGroup>
        ))}
      </div>
      <button
        onClick={() => {
          setShowAll((prev) => !prev);
          if (showAll) window.scrollTo(0, 400);
        }}
        className="relative inline-block text-lg group cursor-pointer w-full mx-auto"
      >
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span className="relative">{showAll ? "Show Less" : "Show All"}</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </button>
    </div>
    </Fade>
  );
};

export default Features;
