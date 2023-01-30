import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import Resume from '../components/Resume.pdf'

export default function Navbar() {
 
 let ShowResume=()=>{
  window.open(Resume);

 }

const[open,setopen]=useState(true);

const x={
  overflow:'hidden',
  height:0
}
const y={
  overflow:'auto',
  height:'80vh'
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

        <div className="links">
        
        <a href="/">1. Home</a>
        <a href="/">2. About me</a>
        <a href="/">3. What I do</a>
        <a onClick={ShowResume} href="/">4. Resume</a>
        <a href="/">5. Portfolio</a>
        <a href="/">6. Conatct</a>
       
        </div>

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
