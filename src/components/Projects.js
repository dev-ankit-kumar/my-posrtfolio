import React from 'react'
import Fox from '../components/Fox.png'
import Todo from '../components/Todo.png'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Projects() {
  return (
    <div className='projects part3'>

    <AnimationOnScroll animateIn="animate__bounceIn">

    <div className="fox web">
        <div className="website-image">
        <img src={Fox} alt=""  className='bg-image' /  >
        </div>
        <div className="info-right">
        <h3>A university website</h3>
        <h2>Fox university</h2>
        <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ducimus hic voluptatum totam eaque corrupti.
        </p>
        <p className="language">Html Css Javascript</p>
        </div>
    </div>
    </AnimationOnScroll>

    <AnimationOnScroll animateIn="animate__bounceIn">

    <div className="todo web">
    <div className="info-left">
        <h3>A Todo List</h3>
        <h2>My Todo List</h2>
        <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ducimus hic voluptatum totam eaque corrupti.
        </p>
        <p className="language">Html Css Javascript</p>
        </div>

        <div className="website-image">
        <img src={Todo} alt=""  className='bg-image' / >
        </div>
    </div>
    </AnimationOnScroll>

    </div>
  )
}
