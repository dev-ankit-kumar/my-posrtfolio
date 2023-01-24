import React from 'react'
import Me from '../components/Me.jpeg'
export default function Succidea() {
  return (
    <div className='succidea'>
        <div className="me">
      <img src={Me} alt="" className="founder-image" />
      </div> 
      <div className="founder">
        <h2><a href="">Founder of Succidea</a></h2>
        <div className="succidea-logo-info">
            <a href="https://succidea.com/"><img src="http://succidea.com/wp-content/uploads/2022/11/cropped-A_Succidea-removebg-preview-2.png" alt="" /></a>
     <p>   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut corporis doloribus, beatae quibusdam maiores saepe consequuntur quod ad officia necessitatibus, officiis exercitationem dolorem! Quidem voluptatum reprehenderit incidunt quisquam repellat harum fugit ipsa aliquid. Ad labore dolorem vel aperiam aliquid blanditiis, reiciendis alias velit fugiat a ipsam asperiores doloremque aliquam corporis.</p>
     </div>
      </div>
    </div>
  )
}
