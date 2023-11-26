import React from 'react'

import './header.css'

const Header = () => {
  return (
    <div class = "section1" >

      <div class = "heading">

        <h2 className='gradient__text'>Let&apos;s Build Something amazing with GPT-3 OpenAI </h2>

        
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div class = "signing">
          <input type = "text" id="input" placeholder='Your Email Address' />
          <button >Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src="src/assets/people.png" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      

      <div className="gpt3__header-image">
         <img src="src/assets/ai.png" />
      </div>
        

    </div>
  )
}

export default Header
