import React, { useState } from 'react';
import { CiBoxList } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import Search from './dashboardComponents/Search';
import ListView from './dashboardComponents/ListView';
import CardView from './dashboardComponents/CardView';
import data from '../data/dummy.json';
import { useStateContext } from '../contextProvider';

function Dashboard() {
  const {view, setView} = useStateContext();

  return (
    <div className='bg-white w-full p-8 rounded-xl shadow-md'>
      <div className='flex justify-between items-center mb-3'>
        <div>
          <h1 className='text-lg font-semibold'>employés</h1>
          <p className='text-sm text-gray-600'>visualiser et gérer les employés</p>
        </div>
        <div className="flex gap-1 bg-gray-200 p-1 rounded-md">
          <button
            onClick={() => setView('list')}
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm transition-colors duration-300 ${
              view === 'list'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-black hover:bg-orange-100'
            }`}
          >
            <CiBoxList className="text-base" />
            <span>liste</span>
          </button>
          <button
            onClick={() => setView('card')}
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm transition-colors duration-300 ${
              view === 'card'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-black hover:bg-orange-100'
            }`}
          >
            <FaRegAddressCard className="text-base" />
            <span>carte</span>
          </button>
        </div>
      </div>
      <Search />
      {/* Render list view */}
      {view === 'list' && (
        <div className="border-x space-y-4">
          {data.map((person, index) => (
            <ListView key={index} {...person} />
          ))}
        </div>
      )}
      {/* Render card view */}
        {view === 'card' && (
            <div className="flex flex-wrap gap-4 mt-6 shadow-sm">
            {data.map((person, index) => (
                <CardView key={index} {...person} />
            ))}
            </div>
        )}
    </div>
  );
}

export default Dashboard;
