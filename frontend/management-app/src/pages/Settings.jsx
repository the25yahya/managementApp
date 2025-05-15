import React from 'react';

function Settings() {
  const handleLogout = () => {
    // Clear the JWT cookie by setting it to expire immediately
    document.cookie = 'jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    // Optionally, you might want to reload or redirect the user after logout
    window.location.href = '/login';
  };

  return (
    <div className="p-6 bg-white rounded shadow max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Paramètres</h2>
      <p className="mb-6">Vous pouvez gérer vos préférences ici.</p>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Déconnexion
      </button>
    </div>
  );
}

export default Settings;
