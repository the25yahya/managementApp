import React, { useState } from 'react';

const initialState = {
  name: '',
  payroll: '',
  departement: '',
  role: '',
  joiningDate: '',
  contractType: '',
  img: '',
  departementColor: '#FF5722',
};

function AddEmployee({ onSuccess }) {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/employees/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to add employee');
      }

      const added = await res.json();
      setForm(initialState);
      onSuccess?.(added); // Optional callback to reload or notify
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto mt-4">
      <h2 className="text-xl font-semibold mb-4">Ajouter un employé</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Text Inputs */}
        {[
          { name: 'name', label: 'Nom' },
          { name: 'payroll', label: 'Salaire' },
          { name: 'departement', label: 'Département' },
          { name: 'role', label: 'Rôle' },
          { name: 'joiningDate', label: 'Date d\'adhésion', type: 'date' },
          { name: 'contractType', label: 'Type de contrat' },
          { name: 'img', label: 'Lien vers la photo' },
        ].map(({ name, label, type = 'text' }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
        ))}

        {/* Department Color Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Couleur du département</label>
          <input
            type="color"
            name="departementColor"
            value={form.departementColor}
            onChange={handleChange}
            className="mt-1 h-10 w-16 p-0 border-none cursor-pointer"
          />
        </div>

        {/* Error */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition"
        >
          {loading ? 'Ajout en cours...' : 'Ajouter'}
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
