import React, { useState } from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { TbDotsVertical } from "react-icons/tb";
import { useStateContext } from '../../contextProvider';

const API_URL = import.meta.env.VITE_API_URL;

function ListView(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setEmployees } = useStateContext();

  const handleDelete = async () => {
    try {
      const res = await fetch(`${API_URL}/api/employees/delete/${props.id}`, {
        method: 'DELETE'
      });

      if (!res.ok) throw new Error("Échec de la suppression de l'employé");

      // Remove from global employees state
      setEmployees(prev => prev.filter(emp => emp.id !== props.id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className='flex items-center justify-start border-b p-3 relative'>
      <div className='flex items-center gap-2 w-1/4'>
        <img className='w-14 rounded-full' src={props.img} />
        <div>
          <p>{props.name}</p>
          <p className='text-sm font-semibold'>{props.email}</p>
        </div>
      </div>
      <div className='flex items-center justify-start w-3/4'>
        <p className='semibold mr-16'>{props.payroll}</p>
        <div className='flex mr-24 items-center justify-start gap-1 border rounded-lg p-2'>
          <div
            className='rounded-full w-2 h-2'
            style={{ backgroundColor: props.depratement_color }}
          ></div>
          <p className='text-sm font-semibold'>{props.departement}</p>
        </div>
        <p className='font-semibold text-sm mr-16'>{props.role}</p>
        <div className='flex items-center gap-1'>
          <CiCalendarDate className='text-2xl' />
          <p className='text-sm font-semibold mr-[250px]'>{props.joining_date}</p>
        </div>
        <p className='font-semibold text-sm'>{props.contract_type}</p>
      </div>

      {/* Three dots menu */}
      <div className='relative'>
        <TbDotsVertical
          className='text-2xl mr-5 cursor-pointer'
          onClick={() => setMenuOpen(prev => !prev)}
        />
        {menuOpen && (
          <div className='absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded-md z-50'>
            <button
              onClick={handleDelete}
              className='block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50'
            >
              Supprimer l'employé
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListView;
