import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

//Note card component using id,text,date,handleDelete from App.js

function Note({id,text,date,handleDelete}){

  return(
    <div className="note">
      <span>{text}</span>
      <div className="footer">
        <small>{date}</small>
        <MdDeleteForever 
          onClick={()=>handleDelete(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>

    </div>
  )
}

export default Note