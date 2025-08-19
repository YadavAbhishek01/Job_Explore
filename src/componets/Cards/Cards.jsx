import React from 'react'

const Cards = ({children }) => {
  return (
    <div className={` bg-gray-300 p-6 rounded-lg shadow-md`}>
      {children}
    </div>
  )
}

export default Cards
