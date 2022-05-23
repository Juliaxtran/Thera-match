import React from 'react'
// import TopBar from '../components/topbar/TopBar';
// import Header from '../header/Header';
import Posts from '../posts/Posts';
import HomeNav from '../components/HomeNav';
import SideBarUser from '../components/SideBarUser';
import '../Forum.css';


const Forum = () => {
  return (
    <>
      < HomeNav />
      {/* <TopBar /> */}
      {/* <Header /> */}

      <div className="blogHome">
        <Posts />

      </div>
    </>
  )
}

export default Forum;