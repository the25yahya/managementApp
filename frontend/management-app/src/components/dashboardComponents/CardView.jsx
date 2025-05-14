import React from 'react'
import { CiCalendarDate } from "react-icons/ci";
import { TbDotsVertical } from "react-icons/tb";

function CardView(props) {
  return (
    <div className='bg-white rounded-xl shadow-md p-4 w-full max-w-xs'>
      <div className='flex flex-col items-center text-center'>
        <img className='w-20 h-20 rounded-full mb-2' src={props.img} alt={props.name} />
        <p className='text-lg font-semibold'>{props.name}</p>
        <p className='text-sm text-gray-500 mb-3'>{props.email}</p>
      </div>

      <div className='flex flex-col gap-2 text-sm'>
        <div className='flex items-center justify-between'>
          <span className='text-gray-500'>Rôle:</span>
          <span className='font-medium'>{props.role}</span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-gray-500'>Salaire:</span>
          <span className='font-medium'>{props.payroll}</span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-gray-500'>Contrat:</span>
          <span className='font-medium'>{props.contractType}</span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-gray-500'>Département:</span>
          <div className='flex items-center gap-2'>
            <span className='w-2 h-2 rounded-full' style={{ backgroundColor: props.depratementColor }}></span>
            <span className='font-medium'>{props.departement}</span>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-gray-500'>Date:</span>
          <div className='flex items-center gap-1'>
            <CiCalendarDate className='text-lg text-gray-600' />
            <span className='font-medium'>{props.joiningDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardView;
