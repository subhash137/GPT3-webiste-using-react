
import './App.css'

import React from 'react'

import { Blog , Possibility , Header , Footer , Whatgpt3 ,Features} from './containers/index.jsx'
import {Article , Brand , Cta ,Feature ,Navbar} from './components/index.jsx'

const App = ()=> {
  return (

    <div className="App">

      <div className='gradient__bg'>
        <Navbar />
        <Header />
        
      </div>

        <Brand />
        <Whatgpt3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />

      
    </div>
  )
}

export default App
