import { useState } from 'react'
import Header from './componets/Header/header'
import CurrentUserContext from './componets/contexts/currentUserContext'
import React from 'react'
export default function App() {
 const [currentUser, setCurrentUser] = useState(null)
 return (
  <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
   <div>
    <Header />
   </div>
  </CurrentUserContext.Provider>
 )
}