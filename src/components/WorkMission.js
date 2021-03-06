import React from "react";

function WorkMission(props) {
  return (
    <div className=" flex  flex-row sm:w-full my-2 text-justify justify-start items-start space-x-2">
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 fill-current text-red-500"
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
      <div>
        <p className="leading-relaxed w-full text-gray-300">
          {props.item.mission}
        </p>

        <div className="flex flex-wrap space-x-2 font-thin text-red-500 text-sm sm:text-sm">
        {
          props.item.technologies && (<> 
              
            {props.item.technologies.map((item) => {
              return <p>{item}</p>;
            })
            }
          </>)
        }
        </div>
      </div>


    </div>
  );
}

export default WorkMission;
