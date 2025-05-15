import React, { useState, useEffect } from 'react';
import { CiBoxList } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import Search from './dashboardComponents/Search';
import ListView from './dashboardComponents/ListView';
import CardView from './dashboardComponents/CardView';
import { useStateContext } from '../contextProvider';

const API_URL = import.meta.env.VITE_API_URL;

function Dashboard() {
  const { view, setView } = useStateContext();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch(`${API_URL}/api/employees`);
        if (!res.ok) {
          throw new Error('Failed to fetch employees');
        }
        const data = await res.json();
        setEmployees(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

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
              view === 'list' ? 'bg-orange-500 text-white' : 'bg-white text-black hover:bg-orange-100'
            }`}
          >
            <CiBoxList className="text-base" />
            <span>liste</span>
          </button>
          <button
            onClick={() => setView('card')}
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm transition-colors duration-300 ${
              view === 'card' ? 'bg-orange-500 text-white' : 'bg-white text-black hover:bg-orange-100'
            }`}
          >
            <FaRegAddressCard className="text-base" />
            <span>carte</span>
          </button>
        </div>
      </div>

      <Search />

      {/* Show loading or error */}
      {loading && <p>Chargement des employés...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Render list view */}
      {view === 'list' && !loading && !error && (
        <div className="border-x space-y-4">
          {employees.map((person, index) => (
            <ListView key={index} {...person} />
          ))}
        </div>
      )}

      {/* Render card view */}
      {view === 'card' && !loading && !error && (
        <div className="flex flex-wrap gap-4 mt-6 shadow-sm">
          {employees.map((person, index) => (
            <CardView key={index} {...person} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
