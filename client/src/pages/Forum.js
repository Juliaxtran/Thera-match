import React from 'react'
import TopBar from '../components/topbar/TopBar';
import Header from '../header/Header';
import Posts from '../posts/Posts';
import '../Forum.css';


const Forum = () => {
  return (
    <>
      <TopBar />
    <Header />
    <div className="blogHome">
      <Posts />

    </div>
    </>
  )
}

export default Forum;