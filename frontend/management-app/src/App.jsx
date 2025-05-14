import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <div className='flex gap-4 bg-slate-100 h-screen w-screen p-8'>
      <Navbar />
      <Dashboard />
    </div>
  )
}

export default App