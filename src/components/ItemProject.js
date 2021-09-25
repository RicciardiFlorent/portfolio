import React from "react";
function ItemProject(props) {

  return (
    <div className="inline-block px-3 transition duration-500 ease-in-out transform hover:-translate-y-4" >
      <div className=" w-72 h-96 max-w-xs overflow-hidden shadow-md bg-gray-800  bg-opacity-50   hover:shadow-xl  transition-shadow duration-300 ease-in-out rounded-br-xl rounded-tl-xl">
        <div className="flex justify-between items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 ml-3 text-yellow-200"
            fill="none"
            viewBox="0 0 24 24 "
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          <div className="flex space-x-3 mr-3">
            { props.project.githubLink && (<><a href={props.project.githubLink} rel="noreferrer" target="_blank" title="Github"> <svg
              className="w- h-6 fill-current text-red-500 hover:text-yellow-200"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415 1.2 1.2 0 0 1-.167-.11 1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182ZM20.737 5.377c.032-.125.063-.264.09-.42a6.278 6.278 0 0 0-.408-3.293 1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584 6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83 8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4 1 1 0 0 0 1.942.479 1.678 1.678 0 0 1 .468-.878 1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738 4.258 4.258 0 0 1 .92-2.713 3.022 3.022 0 0 1 .195-.231 1 1 0 0 0 .188-1.025 3.388 3.388 0 0 1-.155-.555 4.094 4.094 0 0 1 .079-1.616 7.543 7.543 0 0 1 2.415 1.18 1.009 1.009 0 0 0 .827.133 11.777 11.777 0 0 1 6.173.001 1.005 1.005 0 0 0 .83-.138 7.572 7.572 0 0 1 2.406-1.19 4.04 4.04 0 0 1 .087 1.578 3.205 3.205 0 0 1-.169.607 1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746 1.63 1.63 0 0 1 .466.908 3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311 4.256 4.256 0 0 0-.116-.416 6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826Z" />
            </svg> </a> </> ) }
            { props.project.websiteLink && (<><a href={props.project.websiteLink} rel="noreferrer" target="_blank"  title="Website"><svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500 hover:text-yellow-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg></a></> ) }
          </div>
        </div>
        <div className="flex flex-col">
            <h3 className="ml-5 mt-8 font-black text-xl text-yellow-100">{props.project.title}</h3>
            <p className="mx-2 text-justify text-gray-200 mt-3">{props.project.description}</p>

            <div className="flex absolute bottom-0  font-thin text-gray-200 text-sm flex-wrap mx-2 text-justify mt-4 mb-4">
              {props.project.technologies.map((item) => {
                return <p className="mr-3">{item}</p>
              })}
               

            </div>
        </div>
      </div> 
    </div>
  );
}

export default ItemProject;
