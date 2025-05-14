import React from 'react'
import { CiCalendarDate } from "react-icons/ci";
import { TbDotsVertical } from "react-icons/tb";
function ListView(props) {
  return (
    <div className='flex items-center justify-start border-b p-3'>
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
                    style={{ backgroundColor: props.depratementColor }}
                ></div>

                <p className='text-sm font-semibold'>{props.departement}</p>
            </div>
            <p className='font-semibold text-sm mr-16'>{props.role}</p>
            <div className='flex items-center gap-1'>
                <CiCalendarDate className='text-2xl' />
                <p className='text-sm font-semibold mr-[250px]'>{props.joiningDate}</p>
            </div>
            <p className='font-semibold text-sm'>{props.contractType}</p>
        </div>
        <div>
            <TbDotsVertical className='text-2xl mr-5' />
        </div>
    </div>
  )
}

export default ListView