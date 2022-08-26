import React, { useState } from 'react'
//component handles ddding a new note

function AddNote({handleAddNote}){
  const [noteText, setNoteText] = useState('')
  const charLimit = 300;

  const handleChange= (event) =>{
    if(charLimit - event.target.value.length>=0){
      setNoteText(event.target.value)
  }}

  // save note
  const handleSaveClick = () => {
    if(noteText.trim().length > 0){
      handleAddNote(noteText);
      setNoteText('')
    }
  }

  //this is the text area for notes. includes a char counter and a submit button.
  return (
    <div className="note new">
      <textarea  cols="10" rows="8" placeholder="Type to add a new note..."
        onChange={handleChange} value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default AddNote