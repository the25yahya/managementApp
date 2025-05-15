import React from 'react';
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className='flex gap-4 bg-slate-100 h-screen w-screen p-8'>
      <Navbar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
