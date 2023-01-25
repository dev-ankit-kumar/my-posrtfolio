import React from 'react';
import Self from '../components/Self.png';
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'
import Logome from '../components/Logome.png'
import {FiFacebook} from 'react-icons/fi'
export default function sidebar() {
  return (
    <div className="part">

    <div className='sidebar' style={{overflow:'hidden'}}>
      <div className="upper">
          <img src={Self} alt=""  style={{width:'12rem',height:'12rem'}}/>
          <h2 className='ankit'>Ankit Kumar</h2>
      </div>

      <div className="list">
        <a href="/">Home</a>
        <a href="/">About me</a>
        <a href="/">What I do</a>
        <a href="/">Resume</a>
        <a href="/">Portfolio</a>
        <a href="/">Conatct</a>
      </div>

      <div className="lower">
        <a href=""> <AiFillGithub/></a>
        <a href=""> <BsInstagram/></a>
        <a href=""><AiOutlineLinkedin/></a>
        <a href=""><FiFacebook/></a>
      </div>
    </div>


</div>
  )
}
