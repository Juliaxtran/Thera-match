import React from 'react'
import TopBar from '../components/topbar/TopBar';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Posts from '../posts/Posts';
import '../Forum.css';


const Forum = () => {
  return (
    <>
      <TopBar />
    <Header />
    <div className="blogHome">
      <Posts />
      <Sidebar />
    </div>
    </>
  )
}

export default Forum;