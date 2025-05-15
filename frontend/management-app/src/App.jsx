import React from 'react';
import './App.css';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './components/Dashboard';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useStateContext } from './contextProvider';
import AddEmployee from './pages/AddEmployee';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import DepartmentSchedule from './pages/DepartmentSchedule';

function App() {
  const { user } = useStateContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={user ? <DashboardLayout /> : <Navigate to="/login" replace />}
        >
          {/* Default /dashboard shows Dashboard component */}
          <Route index element={<Dashboard />} />
          {/* Other nested routes */}
          <Route path="add-employee" element={<AddEmployee/>} />
          <Route path="settings" element={<Settings/>} />
          <Route path="notifications" element={<Notifications/>} />
          <Route path="schedules" element={<DepartmentSchedule/>} />
          {/* Add more nested routes here */}
        </Route>

        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
