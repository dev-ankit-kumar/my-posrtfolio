import React from 'react';
import Self from '../components/Self.png';

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
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="" />

        <img src="https://cdn-icons-png.flaticon.com/512/4138/4138168.png" alt="" />
      </div>
    </div>


</div>
  )
}
