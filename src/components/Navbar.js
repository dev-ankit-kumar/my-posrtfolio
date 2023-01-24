import React from 'react'
import Hamburger from 'hamburger-react'

export default function Navbar() {

 


  return (
    <div className='navbar'>
      <div className="menu">
           <Hamburger  className='ham'  onClick={()=>{
            console.log("hello");
            document.querySelector(".list").style.display="block"
           }} />
      </div>

      <div className="list"     style={{display:'none'}}>
        
        <a href="/">Home</a>
        <a href="/">About me</a>
        <a href="/">What I do</a>
        <a href="/">Resume</a>
        <a href="/">Portfolio</a>
        <a href="/">Conatct</a>
      </div>














    </div>
  )
}
