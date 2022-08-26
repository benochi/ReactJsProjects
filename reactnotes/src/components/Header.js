import React from 'react'

const Header = ({handleToggleDarkMode}) => {
//heading for application and handle darkmode. 
  return (
    <div className="header">
      <h1><span style={{color:"4059AD"}}>Notes</span> App</h1>
      <button 
        onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)}
        className="save">Toggle Mode</button>
    </div>
  )
}

export default Header