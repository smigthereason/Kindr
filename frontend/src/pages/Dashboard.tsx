import React from 'react'
import world from "../assets/images/world.png"

const Dashboard = () => {
  return (
    <div className='overflow-clip max-w-[90vw] '> 
      <img src={world} alt="User" className=" fixed right-0 top-0 mr-2 w-full -z-40" />
    </div>
  )
}
export default Dashboard