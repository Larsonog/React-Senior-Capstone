import { useState } from 'react'
import conwayBanner from './assets/phbanner.jpeg'
//import './App.css'
import NavBar from './components/header/Navbar'

function App() {

  return (
    <>
    
    <div>     
      <h1>Encyclopedia Conway!</h1>
    <NavBar/>
    </div>

      <img src={conwayBanner} className='banner' alt="picture of downtown Conway, AR"/>
      <p>
        Welcome to Encylopedia Conway a webpage for anything and everything going on in Conway, Arkansas. 
        This project is for my Senior Seminar class at Hendrix College. I am currently a senior there 
        graduating in May 2024. This website has always been a passion project for me. As a lifetime Conway 
        resident myself, I have always wanted to know what's going on and finding that information has always 
        been difficult. This project is both for new and long time residents for Conway. 
        Enjoy!
      </p>
    </>
  )
}

export default App
