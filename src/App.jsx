import { useState } from 'react'
import Header from './HeaderComponent.jsx'
import './index.css'
import Hero from './HeroComponent.jsx'
import Cardcomponent from './CardComponent.jsx'
import Grid from './GridComponent.jsx'
import Footer from './footer.jsx'
import { QoutesPage } from './Qoutes/Qoutes.jsx'
import { Qoute } from './Qoutes/qo.jsx'
// import QoutesData from '../src/data/data.js'

function App() {
  

  return (
    <>

      {/* <Header />
      <Hero />
      <Cardcomponent />
      <Grid />
      <Footer /> */}
      {/* {
        QoutesData.map((qoute)=>(
          <QoutesPage />
        ))
      } */}
      <Qoute/>
    </>
  )
}

export default App
