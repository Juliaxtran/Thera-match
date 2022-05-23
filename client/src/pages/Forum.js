import React from 'react'
import Posts from '../components/Posts';
import HomeNav from '../components/HomeNav';
import '../Forum.css';


const Forum = () => {
  return (
    <>
      < HomeNav />
      <div className="blogHome">
        <Posts />

      </div>
    </>
  )
}

export default Forum;