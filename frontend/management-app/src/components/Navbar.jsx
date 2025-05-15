import React, { useEffect, useState } from 'react';
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuUsers, LuLayoutDashboard } from "react-icons/lu";
import { RiUserSettingsLine } from "react-icons/ri";
import { CiTimer } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { useStateContext } from '../contextProvider';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

function Navbar() {
  const { user } = useStateContext(); // user = JWT
  const [adminInfo, setAdminInfo] = useState({ username: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminInfo = async () => {
      try {
        const res = await fetch(`${API_URL}/api/admin`, {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setAdminInfo({ username: data.username, email: data.email });
        } else {
          console.error('Failed to fetch admin info:', data.error);
        }
      } catch (err) {
        console.error('Error fetching admin info:', err);
      }
    };

    if (user) {
      fetchAdminInfo();
    }
  }, [user]);

  return (
    <nav className='pr-4'>
      <div className='bg-white my-4 p-4 rounded-lg shadow-md flex items-center justify-between gap-2'>
        <FaRegUser className='text-3xl' />
        <div>
          <p>{adminInfo.username || 'Loading...'}</p>
          <p>{adminInfo.email || ''}</p>
        </div>
      </div>

      <div>
        <p className='text-sm my-4'>Main Menu</p>
        <div
          className='flex items-center gap-2 my-5 cursor-pointer'
          onClick={() => navigate('/dashboard')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') navigate('/dashboard') }}
        >
          <LuLayoutDashboard className='text-2xl' />
          <p className='text-sm'>Dashboard</p>
        </div>
        <div
          className='flex items-center gap-2 mb-5 cursor-pointer'
          onClick={() => navigate('/dashboard/employees')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') navigate('/dashboard/employees') }}
        >
          <LuUsers className='text-2xl' />
          <p className='text-sm'>Employés</p>
        </div>
        <div
          className='flex items-center gap-2 mb-5 whitespace-nowrap cursor-pointer'
          onClick={() => navigate('/dashboard/add-employee')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') navigate('/dashboard/add-employee') }}
        >
          <RiUserSettingsLine className='text-2xl' />
          <p className='text-sm'>Ajouter des employés</p>
        </div>
        <div
          className='flex items-center gap-2 mb-5 cursor-pointer'
          onClick={() => navigate('/dashboard/schedules')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') navigate('/dashboard/schedules') }}
        >
          <CiTimer className='text-2xl' />
          <p className='text-sm'>Horaires</p>
        </div>
      </div>

      <div>
        <p className='text-sm my-4'>Settings</p>
        <div
          className='flex items-center gap-2 mb-5 cursor-pointer'
          onClick={() => navigate('/dashboard/notifications')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') navigate('/dashboard/notifications') }}
        >
          <IoIosNotificationsOutline className='text-2xl' />
          <p className='text-sm'>Notifications</p>
        </div>
        <div
          className='flex items-center gap-2 mb-5 cursor-pointer'
          onClick={() => navigate('/dashboard/settings')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') navigate('/dashboard/settings') }}
        >
          <CiSettings className='text-2xl' />
          <p className='text-sm'>Paramètres</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
