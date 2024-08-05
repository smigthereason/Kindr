import React from 'react'
import world from "../assets/images/world.png"
import Dashnav from '../components/Dashnav'

const Dashboard = () => {
  return (
    <div className=' max-w-[90vw] flex flex-row'> 
      <img src={world} alt="User" className=" fixed right-0 top-0 mr-2 w-full -z-40" />
      <Dashnav title='Dashboard'/>
      
    </div>

  )
}
export default Dashboard