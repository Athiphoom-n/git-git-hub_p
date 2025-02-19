import React from 'react'

const Menu = ({menu}) => {

  return (
    <div className='w-full h-10 flex justify-start px-10 items-center bg-gray-200 hover:bg-gray-400 cursor-pointer my-1 duration-300 rounded-sm'>{menu.name}</div>
  )
}

export default Menu