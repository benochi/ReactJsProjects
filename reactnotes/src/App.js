import React, { useState, useEffect } from 'react';
import {nanoid} from 'nanoid'
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  //build notes state
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text:"This is a default note",
      date:"08/26/2022" 
    }
  ])
  //states for searching text and toggling darkmode
  const [searchNote, setSearchNote] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  //localStorage - don't use for vulnerable data due to XSS attacks.
  useEffect(() =>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'))
    if(savedNotes){
      setNotes(savedNotes)
    }
  },[])

  //saving app data in LS
  useEffect(()=>{
    localStorage.setItem('react-notes-data', JSON.stringify(notes))
  }, [])
  
  //handle adding a new note create note and spread old state and add new
  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text : text,
      date : date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote]
    setNotes(newNotes)
  }

  //handle deleting notes
  const deletingNote = (id) =>{
    const newNotes = notes.filter((note)=> note.id!==id);
    setNotes(newNotes)
  }

  

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header
          handleToggleDarkMode={setDarkMode}
        />
        <Search 
          handleSearch={setSearchNote}
        /> 
        <NotesList 
          notes={notes.filter((note)=>note.text.toLowerCase().includes(searchNote))} 
          handleAddNote={addNote} 
          handleDelete={deletingNote}
        />
      </div>
    </div>
  );
}

export default App;
