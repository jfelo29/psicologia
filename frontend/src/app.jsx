import React from 'react'
import Header from './componets/Header/header'
import Inicio from './componets/Inicio/inicio'
import Servicios from './componets/Servicios/Servicios'
import Aboutme from './componets/AboutMe/Aboutme'


import { useState } from 'react'
import CurrentUserContext from './componets/contexts/currentUserContext'

export default function App() {
 const [currentUser, setCurrentUser] = useState(null)
 return (
  <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
   <div>
    <Header />
    <main >
     <Inicio />
     <Servicios />
     <Aboutme />



    </main>
   </div>
  </CurrentUserContext.Provider>
 )
}