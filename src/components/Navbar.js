import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'

export default function Navbar() {
 
 

const[open,setopen]=useState(true);

const x={
  overflow:'hidden',
  height:0
}
const y={
  overflow:'auto',
  height:'50vh'
}
let showmenu=()=>{
  setopen(!open)
}

  return (
    <div className='navbar'>
      <div className="menu">
        <button className='menu-btn' onClick={showmenu}>
           <Hamburger />
           </button>
      </div>

      <div className="list" style={open?x:y}>
        <ul>
        <a href="/">Home</a>
        <a href="/">About me</a>
        <a href="/">What I do</a>
        <a href="/">Resume</a>
        <a href="/">Portfolio</a>
        <a href="/">Conatct</a>
        </ul>
      </div>














    </div>
  )
}
