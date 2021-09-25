import React from 'react'

const BoutonWorkMenu = (props)  =>{

    return ( 
        <button onClick={props.onClick} className="flex-none w-max sm:w-52 sm:text-left sm:border-l-2 sm:border-b-0 sm:hover:border-red-500 sm:hover:bg-grey-300 border-b-2 sm:focus:text-red-500 sm:focus:bg-gray-800 focus:text-red-500 focus:border-red-500 border-gray-400  hover:bg-gray-800 text-yellow-200 font-bold py-4 px-4 active">
            {props.companyName}
        </button>
    )
}

export default BoutonWorkMenu
