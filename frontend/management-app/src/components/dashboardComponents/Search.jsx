import React, { useState, useEffect } from 'react';
import { LuUsers } from "react-icons/lu";
import { CiSearch, CiFilter } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import { useStateContext } from '../../contextProvider';

function Search() {
  const { view, employees, setFilteredEmployees } = useStateContext();
  const [searchTerm, setSearchTerm] = useState('');

  // 🔍 Filter employees by name
  useEffect(() => {
    const filtered = employees.filter((emp) =>
      emp.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(filtered); // Let the table/list below use this instead of full employees list
  }, [searchTerm, employees, setFilteredEmployees]);

  return (
    <div className='flex flex-col justify-center bg-gray-100 px-4 py-2 rounded-t-xl'>
      <div className='border-b border-b-gray-400 flex items-center justify-between gap-2 mb-5'>
        <div className='flex items-center gap-2'>
          <LuUsers />
          <p>nombre d'employés :</p>
          <p className='font-bold'>{employees.length} personnes</p>
        </div>
        <div className='flex items-center gap-3 pb-3'>
          <div className='flex items-center bg-white px-3'>
            <CiSearch />
            <input
              type="text"
              placeholder='Rechercher un employé'
              className='border bg-transparent border-transparent rounded-md px-2 py-1 focus:outline-none'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className='bg-white flex items-center gap-1 px-2 py-1 rounded-md'>
            <CiFilter />
            <p>Filtrer</p>
          </button>
          <button className='bg-white flex items-center gap-1 px-2 py-1 rounded-md'>
            <IoFilterSharp />
            <p>trier</p>
          </button>
        </div>
      </div>

      {view === 'list' && (
        <div className='flex items-center justify-start pr-4 py-2 text-sm'>
          <div className='w-1/4'>
            <p>Nom</p>
          </div>
          <div className='flex items-center gap-4 justify-between w-3/4'>
            <div><p>Paie</p></div>
            <div><p>Departement</p></div>
            <div><p>Role</p></div>
            <div><p>Date d'adhésion</p></div>
            <div><p>Type de contract</p></div>
            <div><p>Action</p></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
