import React from 'react'
import '../Forum.css';


const Forum = () => {
  return (
    <div>
      <div className="panel panel-default post-editor">
        <div className="panel-body">
          <textarea className="form-control post-editor-input" />
          <button className="btn btn-success post-editor-button">Post</button>
        </div>
      </div>
    </div>
  )
}

export default Forum;