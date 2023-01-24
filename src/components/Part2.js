import React from 'react';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


export default function Part2() {



  return (
    <div className='part2'>
        <div className="About-section">
            <div className="about">
              <h1>ABOUT ME</h1>
            </div>
            <div className="know">
            Know me more
            </div>
        </div>
        <AnimationOnScroll animateIn="animate__bounceIn">

        <div className="intro">
          <div className="intro-left-section">
          <h2>I'm <span className="name">Ankit Kumar</span>,a web developer</h2>
          <p className="intropara">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ullam delectus optio tempora atque distinctio voluptates autem quasi sapiente perspiciatis illum harum ex aut nesciunt dolor similique iusto, ea dicta?
          </p>
          <p className="intropara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, natus.
          </p>
          </div>
          <div className="intro-right-section">
            <ul>
              <li> <span>Name</span> : Ankit Kumar</li>
              <li><span>Email</span>: <span className="mail">ankit_kumar.ug21@nsut.ac.in</span></li>
              <li><span>Phone</span>: 9667357277</li>
              <li><span>From</span>: NSUT Delhi,India</li>
            </ul>
            <button className="btn-download-resume">Download resume</button>
          </div>
          
        </div>
        </AnimationOnScroll>

    </div>
  )
}
