import React from 'react'
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiUserSettingsLine } from "react-icons/ri";
import { CiTimer } from "react-icons/ci";


function Navbar() {
  return (
    <nav className='pr-4'>
      <div className='bg-white my-4 p-4 rounded-lg shadow-md flex-col items-center justify-between'>
        <p>yahya</p>
        <p>yahya@gmail.com</p>
      </div>
      <div>
        <p className='text-sm my-4'>Main Menu</p>
        <div className='flex items-center gap-2 my-5 cursor-pointer '>
          <LuLayoutDashboard className='text-2xl' />
          <p className='text-sm'>Dashboard</p>
        </div>
        <div className='flex items-center gap-2 mb-5'>
          <LuUsers className='text-2xl' />
          <p className='text-sm'>employés</p>
        </div>
        <div className='flex items-center gap-2 mb-5 whitespace-nowrap'>
          <RiUserSettingsLine className='text-2xl' />
          <p className='text-sm'>ajouter des employés</p>
        </div>
        <div className='flex items-center gap-2 mb-5'>
          <CiTimer className='text-2xl' />
          <p className='text-sm'>horaires</p>
        </div>
      </div>
      <div>
        <p className='text-sm my-4'>Main Menu</p>
        <div className='flex items-center gap-2 mb-5'>
          <IoIosNotificationsOutline className='text-2xl' />
          <p className='text-sm'>Notifications</p>
        </div>
        <div className='flex items-center gap-2 mb-5'>
          <CiSettings className='text-2xl' />
          <p className='text-sm'>Paramètres</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar