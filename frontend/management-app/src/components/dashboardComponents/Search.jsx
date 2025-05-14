import React from 'react'
import { LuUsers } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import { useStateContext } from '../../contextProvider'; // or useView if you're using ViewContext

function Search() {
  const { view } = useStateContext(); // or useView()

  return (
    <div className='flex flex-col justify-center bg-gray-100 px-4 py-2 rounded-t-xl'>
      <div className='border-b border-b-gray-400 flex items-center justify-between gap-2 mb-5'>
        <div className='flex items-center gap-2'>
          <LuUsers />
          <p>nombre d'employés :</p>
          <p className='font-bold'>1100 personnes</p>
        </div>
        <div className='flex items-center gap-3 pb-3'>
          <div className='flex items-center bg-white px-3'>
            <CiSearch />
            <input
              type="text"
              placeholder='Rechercher un employé'
              className='border bg-transparent border-transparent rounded-md px-2 py-1 focus:outline-none'
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

      {/* ✅ Only show this section when view is 'list' */}
      {view === 'list' && (
        <div className='flex items-center justify-start pr-4 py-2 text-sm'>
          <div className='w-1/4'>
            <p>Nom</p>
          </div>
          <div className='flex items-center gap-4 justify-between w-3/4'>
            <div>
                <p>Paie</p>
            </div>
            <div>
                <p>Departement</p>
            </div>
            <div>
                <p>Role</p>
            </div>
            <div>
                <p>Date d'adhésion</p>
            </div>
            <div>
                <p>Type de contract</p>
            </div>
            <div>
                <p>Action</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
