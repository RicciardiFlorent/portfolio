import React from 'react'
import WorkMission from "./WorkMission";

function Work(props) {
    return (
        <div className="flex flex-col my-10 sm:ml-10 sm:my-0 sm:w-max">
            <div className="flex justify-start items-baseline space-x-2">
            <p className=" font-bold text-lg text-gray-100">{props.work.position}</p><p className="text-yellow-200 font-bold text-lg">@{props.work.company}</p>
            </div>
            <p className="text-sm text-gray-100">{props.work.date}</p>


            {props.work.missions.map((item)=>{
                    return <WorkMission  mission={item}/>
            })}
         
        </div>
    )
}

export default Work
