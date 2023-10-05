import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import conwayBanner from './assets/phbanner.jpeg'
//import './App.css'
import NavBar from './components/header/Navbar'
import Home from './pages/1.home/Home'
import Events from './pages/2.events/Events'
import RoadWork from './pages/3.roadWork/RoadWork'
import Entertainment from './pages/4.entertainment/Entertainment'
import SecondHandShops from './pages/5.secondHandShops/SecondHandShops'
import Restaurants from './pages/6.restaurants/Restaurants'
import Votiing from './pages/7.voting/Votiing'
import WalkInClinics from './pages/8.walkInClinics/WalkInClinics'


function App() {

  return (
    <>


      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route  path='/events' element={<Events />} />
            <Route  path='/roadwork' element={<RoadWork />} />
            <Route  path='/entertainment' element={<Entainment />} />
            <Route  path='/secondhandshops' element={<SecondHandShops />} />
            <Route  path='/restaurants' element={<Restaurants />} />
            <Route  path='/voting' element={<Voting />} />
            <Route  path='/walkinclinics' element={<WalkInClinics />} />
          </Routes>
        </Router>
      </div>
      <div>
        <h1>Encyclopedia Conway!</h1>
      </div>
      <div>
        <img src={conwayBanner} className='banner' alt="picture of downtown Conway, AR" />
        <p>
          Welcome to Encylopedia Conway a webpage for anything and everything going on in Conway, Arkansas.
          This project is for my Senior Seminar class at Hendrix College. I am currently a senior there
          graduating in May 2024. This website has always been a passion project for me. As a lifetime Conway
          resident myself, I have always wanted to know what's going on and finding that information has always
          been difficult. This project is both for new and long time residents for Conway.
          Enjoy!
        </p>
      </div>
    </>
  )
}

export default App
