import React from 'react'
import { useState } from 'react'

import './navbar.css'

import {RiCloseLine , RiMenu3Line } from 'react-icons/ri'


const Menu = () => (

  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GPT3?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>

  </>
)

// BEM - block element modifier

const Navbar = () => {

  const [ toggle  , setToggleMenu] = useState(false);
  return (
    <div class = "gpt3_navbar">

      <div class = "gpt3_navbar_links">

        <div class = "gpt3_navbar_links_logo">
        <img src="src/assets/logo.svg" alt="logo" />


        </div>
        <div className="gpt3_navbar_links_container">
          <Menu />
        </div>

        

      </div>
      <div className="gpt3_navbar_sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
      </div>

      <div className="gpt3_navbar_menu">

        {toggle ? <RiCloseLine color = "#fff" size={27} onClick={()=>setToggleMenu(false)}/> :
        <RiMenu3Line color = "#fff" size={27} onClick={()=>setToggleMenu(true)}/>

        }
        {toggle && (
        <div className="gpt3_navbar_menu_container scale-up-center">
          <div className="gpt3_navbar_menu_container-links">

            <Menu />
            
          </div>
          <div className="gpt3_navbar_menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}




      </div>




      
    </div>
  )
}

export default Navbar
