import React from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";

function Notifications() {
  return (
    <div className="p-6 bg-white rounded shadow max-w-md mx-auto mt-10 text-center text-gray-600">
      <IoIosNotificationsOutline className="text-6xl mx-auto mb-4" />
      <h2 className="text-xl font-semibold mb-2">Notifications</h2>
      <p>Vous n'avez aucune notification pour le moment.</p>
    </div>
  );
}

export default Notifications;
