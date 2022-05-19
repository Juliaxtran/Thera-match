import React from 'react'
import TopBar from '../components/topbar/TopBar';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import '../Forum.css';


const Forum = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Sidebar />
    </div>
  )
}

export default Forum;