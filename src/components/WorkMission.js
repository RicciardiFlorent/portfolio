import React from "react";

function WorkMission(props) {
  return (
    <div className=" flex  flex-row sm:w-full my-2 text-justify justify-start items-baseline space-x-2">
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 fill-current text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
      <p className="leading-relaxed w-full text-gray-300">
        {props.mission}
      </p>
    </div>
  );
}

export default WorkMission;
