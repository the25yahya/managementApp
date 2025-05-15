import React, { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

function DepartmentSchedule() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch schedules
  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const res = await fetch(`${API_URL}/api/schedules`);
        if (!res.ok) throw new Error('Failed to fetch schedules');
        const data = await res.json();
        setSchedules(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  // Group schedules by department
  const groupedByDepartment = schedules.reduce((acc, sched) => {
    const dept = sched.department_name;
    if (!acc[dept]) acc[dept] = [];
    acc[dept].push(sched);
    return acc;
  }, {});

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Horaires par Département</h2>

      {loading && <p>Chargement des horaires...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && Object.keys(groupedByDepartment).length === 0 && (
        <p>Aucun horaire trouvé.</p>
      )}

      {!loading && !error &&
        Object.entries(groupedByDepartment).map(([department, entries]) => (
          <div key={department} className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-orange-600">{department}</h3>
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Jour</th>
                  <th className="p-2 border">Début</th>
                  <th className="p-2 border">Fin</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, i) => (
                  <tr key={i} className="hover:bg-orange-50">
                    <td className="p-2 border">{entry.day}</td>
                    <td className="p-2 border">{entry.start_time}</td>
                    <td className="p-2 border">{entry.end_time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
}

export default DepartmentSchedule;
