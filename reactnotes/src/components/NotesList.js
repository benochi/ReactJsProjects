import React from 'react'
import Note from "./Note"
import AddNote from "./AddNote"
//for formatting notes 

const NoteList = ({notes, handleAddNote, handleDelete}) =>{

  return(
    <div className="notes-list">
      {notes.map((note)=>
        <Note 
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDelete={handleDelete}
        />
      )}
        <AddNote
          handleAddNote={handleAddNote}
        />
    </div>    
  )
}

export default NoteList
